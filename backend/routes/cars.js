const express = require("express");
const router = express.Router();
const db = require("../db");

/* GET all cars */
router.get("/", (req, res) => {
    db.query("SELECT * FROM cars", (err, rows) => {
        if (err) return res.status(500).json(err);
        res.json(rows);
    });
});

/* GET one car */
router.get("/:id", (req, res) => {
    db.query(
        "SELECT * FROM cars WHERE id=?",
        [req.params.id],
        (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json(rows[0]);
        }
    );
});

/* CREATE car */
router.post("/", (req, res) => {
    db.query("INSERT INTO cars SET ?", req.body, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ id: result.insertId, ...req.body });
    });
});

/* UPDATE car */
router.put("/:id", (req, res) => {
    db.query(
        "UPDATE cars SET ? WHERE id=?",
        [req.body, req.params.id],
        err => {
            if (err) return res.status(500).json(err);
            res.json({ id: req.params.id, ...req.body });
        }
    );
});

/* DELETE car */
router.delete("/:id", (req, res) => {
    db.query("DELETE FROM cars WHERE id=?", [req.params.id], err => {
        if (err) return res.status(500).json(err);
        res.json({ id: req.params.id });
    });
});

module.exports = router;
