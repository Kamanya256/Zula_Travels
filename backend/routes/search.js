const express = require("express");
const router = express.Router();

const Flight = require("../models/flight");
const Hotel = require("../models/hotel");
const Car = require("../models/car");

router.get("/", async (req, res) => {
    const {
        from,
        to,
        start_date,
        end_date,
        rooms = 1,
        guests = 1,
        cars = 1,
    } = req.query;

    try {
        const results = {
            flights: [],
            hotels: [],
            cars: [],
        };

        await new Promise((resolve, reject) => {
            Flight.search({ from, to, start_date }, (err, rows) => {
                if (err) reject(err);
                results.flights = rows;
                resolve();
            });
        });

        await new Promise((resolve, reject) => {
            Hotel.search({ destination_id: to, rooms }, (err, rows) => {
                if (err) reject(err);
                results.hotels = rows;
                resolve();
            });
        });

        await new Promise((resolve, reject) => {
            Car.search({ destination_id: to, cars }, (err, rows) => {
                if (err) reject(err);
                results.cars = rows;
                resolve();
            });
        });

        res.json({
            success: true,
            search_criteria: req.query,
            results,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
