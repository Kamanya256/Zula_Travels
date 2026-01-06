const express = require("express");
const router = express.Router();
const db = require("../db");
const crypto = require("crypto");

/**
 * POST /api/courier/book
 * Create courier booking
 */
router.post("/book", (req, res) => {
    const {
        customer_id,
        vehicle_id,
        pickup_address,
        dropoff_address,
        parcel_items,
        is_surprise,
        receiver_name,
        receiver_phone,
        special_instructions,
        payment_method
    } = req.body;

    const tracking_id = "ZULA-" + crypto.randomBytes(4).toString("hex").toUpperCase();

    // Get vehicle pricing
    db.query(
        "SELECT base_fare, price_per_km FROM courier_fleet WHERE id=? AND is_available=1",
        [vehicle_id],
        (err, fleet) => {
            if (err || fleet.length === 0)
                return res.status(400).json({ error: "Invalid vehicle" });

            const total_price = fleet[0].base_fare; // distance calc later

            const sql = `
                INSERT INTO courier_bookings (
                    customer_id, vehicle_id,
                    pickup_address, dropoff_address,
                    parcel_items, is_surprise,
                    receiver_name, receiver_phone,
                    special_instructions,
                    total_price, payment_method,
                    tracking_id
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;

            db.query(
                sql,
                [
                    customer_id,
                    vehicle_id,
                    pickup_address,
                    dropoff_address,
                    parcel_items,
                    is_surprise,
                    receiver_name,
                    receiver_phone,
                    special_instructions,
                    total_price,
                    payment_method,
                    tracking_id
                ],
                (err2, result) => {
                    if (err2) return res.status(500).json(err2);

                    res.json({
                        success: true,
                        booking_id: result.insertId,
                        tracking_id
                    });
                }
            );
        }
    );
});

module.exports = router;
