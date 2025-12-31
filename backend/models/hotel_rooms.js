const express = require("express");
const router = express.Router();
const HotelRoom = require("../models/hotelRoom");

router.get("/availability", (req, res) => {
    const { hotel_id, start_date, end_date } = req.query;

    if (!hotel_id || !start_date || !end_date) {
        return res.status(400).json({ message: "Missing parameters" });
    }

    HotelRoom.checkAvailability(
        hotel_id,
        start_date,
        end_date,
        (err, results) => {
            if (err) return res.status(500).json(err);
            res.json(results);
        }
    );
});

module.exports = router;
