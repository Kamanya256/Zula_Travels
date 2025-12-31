const express = require("express");
const router = express.Router();
const db = require("../db");

/* GET all drivers */
router.get("/", (req, res) => {
    db.query("SELECT * FROM drivers", (err, rows) => {
        if (err) return res.status(500).json(err);
        res.json(rows);
    });
});

/* GET one driver */
router.get("/:id", (req, res) => {
    db.query(
        "SELECT * FROM drivers WHERE id=?",
        [req.params.id],
        (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json(rows[0]);
        }
    );
});

/* CREATE driver */
router.post("/", (req, res) => {
    db.query("INSERT INTO drivers SET ?", req.body, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ id: result.insertId, ...req.body });
    });
});

/* UPDATE driver */
router.put("/:id", (req, res) => {
    db.query(
        "UPDATE drivers SET ? WHERE id=?",
        [req.body, req.params.id],
        err => {
            if (err) return res.status(500).json(err);
            res.json({ id: req.params.id, ...req.body });
        }
    );
});

/* DELETE driver */
router.delete("/:id", (req, res) => {
    db.query("DELETE FROM drivers WHERE id=?", [req.params.id], err => {
        if (err) return res.status(500).json(err);
        res.json({ id: req.params.id });
    });
});

module.exports = router;
