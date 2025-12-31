// routes/users.js
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

// GET /api/users
router.get("/", async (req, res) => {
    try {
        const users = await User.getAll();
        res.json(users);
    } catch (err) {
        console.error("Error getting users:", err);
        res.status(500).json({ error: "Server error" });
    }
});

// POST /api/users/register
router.post("/register", async (req, res) => {
    try {
        const { email } = req.body;

        const existing = await User.getByEmail(email);
        if (existing) {
            return res.status(400).json({ error: "Email already registered" });
        }

        const result = await User.create(req.body);

        res.status(201).json({
            message: "User registered",
            id: result.insertId,
        });
    } catch (err) {
        console.error("Error registering user:", err);
        res.status(500).json({ error: "Server error" });
    }
});

// POST /api/users/login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.getByEmail(email);
        if (!user) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const match = await bcrypt.compare(password, user.password_hash);
        if (!match) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const token = jwt.sign(
            {
                id: user.id,
                role_id: user.role_id,
                email: user.email,
            },
            JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.json({
            message: "Login successful",
            token,
            user: {
                id: user.id,
                role_id: user.role_id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                phone: user.phone,
                is_active: user.is_active,
            },
        });
    } catch (err) {
        console.error("Error logging in user:", err);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
