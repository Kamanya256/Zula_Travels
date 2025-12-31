// routes/hotels.js
const express = require("express");
const router = express.Router();
const db = require("../db");

// GET /api/hotels  (list with pagination for React-Admin)
router.get("/", (req, res) => {
    // React-Admin uses _start and _end for pagination
    const { _start = 0, _end = 10 } = req.query;

    const start = Number(_start);
    const end = Number(_end);
    const limit = end - start;

    // First get total count
    db.query("SELECT COUNT(*) AS total FROM hotels", (errCount, countRows) => {
        if (errCount) {
            console.error("Error counting hotels:", errCount);
            return res.status(500).json({ error: "Database error (count)" });
        }

        const total = countRows[0].total;

        // Then get paginated rows
        db.query(
            "SELECT * FROM hotels LIMIT ?, ?",
            [start, limit],
            (errRows, rows) => {
                if (errRows) {
                    console.error("Error fetching hotels:", errRows);
                    return res.status(500).json({ error: "Database error (rows)" });
                }

                // Important for React-Admin
                res.setHeader("Content-Range", `hotels ${start}-${start + rows.length - 1}/${total}`);
                res.setHeader("Access-Control-Expose-Headers", "Content-Range");

                res.json(rows);
            }
        );
    });
});

// GET /api/hotels/:id  (single hotel)
router.get("/:id", (req, res) => {
    const { id } = req.params;

    db.query("SELECT * FROM hotels WHERE id = ?", [id], (err, rows) => {
        if (err) {
            console.error("Error fetching hotel by id:", err);
            return res.status(500).json({ error: "Database error" });
        }

        if (rows.length === 0) {
            return res.status(404).json({ error: "Hotel not found" });
        }

        res.json(rows[0]);
    });
});

module.exports = router;
