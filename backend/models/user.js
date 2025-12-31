// models/user.js
const db = require("../db");
const bcrypt = require("bcryptjs");

const User = {
  // Get all users (only safe fields)
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT 
           id,
           role_id,
           first_name,
           last_name,
           email,
           phone,
           is_active,
           created_at,
           updated_at
         FROM users`,
        (err, results) => {
          if (err) return reject(err);
          resolve(results);
        }
      );
    });
  },

  // Get user by email (used for login)
  getByEmail: (email) => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        (err, results) => {
          if (err) return reject(err);
          resolve(results[0] || null);
        }
      );
    });
  },

  // Create a new user
  create: async (data) => {
    const {
      first_name,
      last_name,
      email,
      phone,
      password,   // plain password from frontend
      role_id,
    } = data;

    const hashed = await bcrypt.hash(password, 10);

    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO users 
         (role_id, first_name, last_name, email, phone, password_hash, is_active)
         VALUES (?, ?, ?, ?, ?, ?, 1)`,
        [role_id || 2, first_name, last_name, email, phone || null, hashed],
        (err, result) => {
          if (err) return reject(err);
          resolve(result);
        }
      );
    });
  },
};

module.exports = User;
