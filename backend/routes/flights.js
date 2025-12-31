// routes/flights.js
const express = require("express");
const router = express.Router();
const db = require("../db");

// GET /api/flights (list with pagination for React-Admin)
router.get("/", (req, res) => {
  const { _start = 0, _end = 10 } = req.query;

  const start = Number(_start);
  const end = Number(_end);
  const limit = end - start;

  // 1) Get total count
  db.query("SELECT COUNT(*) AS total FROM flights", (errCount, countRows) => {
    if (errCount) {
      console.error("Error counting flights:", errCount);
      return res.status(500).json({ error: "Database error (count)" });
    }

    const total = countRows[0].total;

    // 2) Get paginated rows
    db.query(
      "SELECT * FROM flights LIMIT ?, ?",
      [start, limit],
      (errRows, rows) => {
        if (errRows) {
          console.error("Error fetching flights:", errRows);
          return res.status(500).json({ error: "Database error (rows)" });
        }

        // React-Admin requires Content-Range and exposure of that header
        // If there are no rows, avoid negative "end" in header
        const endIndex = rows.length > 0 ? start + rows.length - 1 : start;

        res.setHeader("Content-Range", `flights ${start}-${endIndex}/${total}`);
        res.setHeader("Access-Control-Expose-Headers", "Content-Range");

        res.json(rows);
      }
    );
  });
});

module.exports = router;
