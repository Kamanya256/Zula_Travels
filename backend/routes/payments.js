const express = require("express");
const router = express.Router();
const db = require("../db");

/**
 * PUT /api/payments/:id
 * Update payment status
 */
router.put("/:id", (req, res) => {
    const { status } = req.body;
    const paymentId = req.params.id;

    db.beginTransaction((err) => {
        if (err) return res.status(500).json(err);

        // 1️⃣ Update payment status
        db.query(
            "UPDATE payments SET status=? WHERE id=?",
            [status, paymentId],
            (err) => {
                if (err) return db.rollback(() => res.status(500).json(err));

                // Only act when payment is successful
                if (status !== "paid") {
                    return db.commit(() => res.json({ success: true }));
                }

                // 2️⃣ Get booking_id
                db.query(
                    "SELECT booking_id FROM payments WHERE id=?",
                    [paymentId],
                    (err, rows) => {
                        if (err || rows.length === 0)
                            return db.rollback(() =>
                                res.status(400).json({ error: "Invalid payment" })
                            );

                        const bookingId = rows[0].booking_id;

                        // 3️⃣ Get hotel room booking items
                        db.query(
                            `
              SELECT service_id, quantity
              FROM booking_items
              WHERE booking_id = ?
              AND service_type = 'hotel_room'
              `,
                            [bookingId],
                            (err, rooms) => {
                                if (err)
                                    return db.rollback(() => res.status(500).json(err));

                                // No hotel rooms? Just confirm booking
                                if (rooms.length === 0) {
                                    return confirmBooking(db, bookingId, res);
                                }

                                // 4️⃣ Deduct availability (one by one)
                                deductRooms(db, rooms, bookingId, res);
                            }
                        );
                    }
                );
            }
        );
    });
});

/* ---------------- HELPERS ---------------- */

function deductRooms(db, rooms, bookingId, res) {
    let index = 0;

    function next() {
        if (index >= rooms.length) {
            return confirmBooking(db, bookingId, res);
        }

        const { service_id, quantity } = rooms[index];

        // Check availability
        db.query(
            "SELECT available_quantity FROM hotel_rooms WHERE id=? FOR UPDATE",
            [service_id],
            (err, rows) => {
                if (err)
                    return db.rollback(() => res.status(500).json(err));

                if (rows.length === 0 || rows[0].available_quantity < quantity) {
                    return db.rollback(() =>
                        res.status(400).json({
                            error: "Not enough room availability",
                        })
                    );
                }

                // Deduct rooms
                db.query(
                    `
          UPDATE hotel_rooms
          SET available_quantity = available_quantity - ?
          WHERE id = ?
          `,
                    [quantity, service_id],
                    (err) => {
                        if (err)
                            return db.rollback(() => res.status(500).json(err));

                        index++;
                        next();
                    }
                );
            }
        );
    }

    next();
}

function confirmBooking(db, bookingId, res) {
    db.query(
        "UPDATE bookings SET status='confirmed' WHERE id=?",
        [bookingId],
        (err) => {
            if (err)
                return db.rollback(() => res.status(500).json(err));

            db.commit(() => {
                res.json({
                    success: true,
                    message: "Payment confirmed & rooms reserved",
                });
            });
        }
    );
}

module.exports = router;
