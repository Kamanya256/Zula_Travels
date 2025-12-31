const express = require("express");
const router = express.Router();
const db = require("../db");

/* GET all pricing */
router.get("/", (req, res) => {
    db.query("SELECT * FROM car_pricing", (err, rows) => {
        if (err) return res.status(500).json(err);
        res.json(rows);
    });
});

/* GET one pricing */
router.get("/:id", (req, res) => {
    db.query(
        "SELECT * FROM car_pricing WHERE id=?",
        [req.params.id],
        (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json(rows[0]);
        }
    );
});

/* CREATE pricing */
router.post("/", (req, res) => {
    db.query("INSERT INTO car_pricing SET ?", req.body, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ id: result.insertId, ...req.body });
    });
});

/* UPDATE pricing */
router.put("/:id", (req, res) => {
    db.query(
        "UPDATE car_pricing SET ? WHERE id=?",
        [req.body, req.params.id],
        err => {
            if (err) return res.status(500).json(err);
            res.json({ id: req.params.id, ...req.body });
        }
    );
});

/* DELETE pricing */
router.delete("/:id", (req, res) => {
    db.query("DELETE FROM car_pricing WHERE id=?", [req.params.id], err => {
        if (err) return res.status(500).json(err);
        res.json({ id: req.params.id });
    });
});

module.exports = router;
