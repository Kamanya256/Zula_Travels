const express = require("express");
const router = express.Router();
const db = require("../db");

/**
 * POST /api/bookings/hotel
 * Create hotel booking & deduct room availability
 */
router.post("/hotel", (req, res) => {
  const {
    user_id,
    hotel_room_id,
    quantity,
    currency
  } = req.body;

  // 1️⃣ Start transaction
  db.beginTransaction(err => {
    if (err) return res.status(500).json(err);

    // 2️⃣ Check availability
    db.query(
      "SELECT available_quantity, price_per_night FROM hotel_rooms WHERE id = ? FOR UPDATE",
      [hotel_room_id],
      (err, rows) => {
        if (err || rows.length === 0) {
          return db.rollback(() =>
            res.status(400).json({ error: "Room not found" })
          );
        }

        const room = rows[0];

        if (room.available_quantity < quantity) {
          return db.rollback(() =>
            res.status(400).json({ error: "Not enough rooms available" })
          );
        }

        const totalAmount = room.price_per_night * quantity;

        // 3️⃣ Create booking
        db.query(
          `
          INSERT INTO bookings (user_id, status, total_amount, currency)
          VALUES (?, 'pending', ?, ?)
          `,
          [user_id, totalAmount, currency],
          (err, bookingResult) => {
            if (err) return db.rollback(() => res.status(500).json(err));

            const bookingId = bookingResult.insertId;

            // 4️⃣ Add booking item
            db.query(
              `
              INSERT INTO booking_items
              (booking_id, service_type, service_id, quantity, unit_price)
              VALUES (?, 'hotel_room', ?, ?, ?)
              `,
              [bookingId, hotel_room_id, quantity, room.price_per_night],
              err => {
                if (err) return db.rollback(() => res.status(500).json(err));

                // 5️⃣ Deduct rooms
                db.query(
                  `
                  UPDATE hotel_rooms
                  SET available_quantity = available_quantity - ?
                  WHERE id = ?
                  `,
                  [quantity, hotel_room_id],
                  err => {
                    if (err) return db.rollback(() => res.status(500).json(err));

                    // ✅ Commit transaction
                    db.commit(err => {
                      if (err) return db.rollback(() => res.status(500).json(err));

                      res.json({
                        success: true,
                        booking_id: bookingId,
                        total_amount: totalAmount
                      });
                    });
                  }
                );
              }
            );
          }
        );
      }
    );
  });
});

module.exports = router;
