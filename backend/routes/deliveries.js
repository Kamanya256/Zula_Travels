const express = require("express");
const router = express.Router();
const db = require("../db");

/**
 * GET /api/deliveries/vehicle-types
 */
router.get("/vehicle-types", (req, res) => {
    db.query(
        "SELECT * FROM delivery_vehicle_types WHERE is_active=1",
        (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json(rows);
        }
    );
});

/**
 * POST /api/deliveries
 * Create delivery order
 */
router.post("/", (req, res) => {
    const {
        user_id,
        vehicle_type_id,
        pickup_address,
        dropoff_address,
        package_description,
        weight_kg,
        distance_km,
        delivery_type
    } = req.body;

    db.query(
        "SELECT * FROM delivery_vehicle_types WHERE id=?",
        [vehicle_type_id],
        (err, rows) => {
            if (err || rows.length === 0)
                return res.status(400).json({ error: "Invalid vehicle type" });

            const vehicle = rows[0];
            const price =
                vehicle.base_price + distance_km * vehicle.price_per_km;

            db.query(
                `
        INSERT INTO deliveries
        (user_id, vehicle_type_id, pickup_address, dropoff_address,
         package_description, weight_kg, distance_km, price, delivery_type)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
                [
                    user_id,
                    vehicle_type_id,
                    pickup_address,
                    dropoff_address,
                    package_description,
                    weight_kg,
                    distance_km,
                    price,
                    delivery_type
                ],
                (err2, result) => {
                    if (err2) return res.status(500).json(err2);

                    res.json({
                        success: true,
                        delivery_id: result.insertId,
                        price
                    });
                }
            );
        }
    );
});

module.exports = router;
