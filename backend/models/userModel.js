// backend/models/userModel.js
const db = require("../db");
const bcrypt = require("bcryptjs");

const User = {
  // Get all users (if needed here)
  getAll: (callback) => {
    db.query("SELECT id, name, email, role FROM users", callback);
  },

  // Get user by ID
  getById: (id, callback) => {
    db.query("SELECT * FROM users WHERE id = ?", [id], callback);
  },

  // Get user by email (for login)
  getByEmail: (email, callback) => {
    db.query("SELECT * FROM users WHERE email = ?", [email], callback);
  },

  // Create user with hashed password
  create: (data, callback) => {
    const { name, email, password, role } = data;

    if (!password) {
      return callback(new Error("Password is required"));
    }

    bcrypt.hash(password, 10, (err, hash) => {
      if (err) return callback(err);

      db.query(
        "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
        [name, email, hash, role || "user"],
        callback
      );
    });
  },

  // Update user (excluding password)
  update: (id, data, callback) => {
    const updateData = { ...data };
    if (updateData.password) delete updateData.password;

    db.query("UPDATE users SET ? WHERE id = ?", [updateData, id], callback);
  },

  // Delete user
  delete: (id, callback) => {
    db.query("DELETE FROM users WHERE id = ?", [id], callback);
  },

  // Compare plain password with hashed password
  comparePassword: (plainPassword, hashedPassword, callback) => {
    bcrypt.compare(plainPassword, hashedPassword, callback);
  }
};

module.exports = { User };
