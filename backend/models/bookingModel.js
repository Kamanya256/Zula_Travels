const db = require("../db");

const Booking = {
  getAll: (callback) => {
    db.query("SELECT * FROM bookings", callback);
  },
  getById: (id, callback) => {
    db.query("SELECT * FROM bookings WHERE id = ?", [id], callback);
  },
  create: (data, callback) => {
    const { user_id, status_id, total_amount, currency } = data;
    db.query(
      "INSERT INTO bookings (user_id, status_id, total_amount, currency) VALUES (?, ?, ?, ?)",
      [user_id, status_id, total_amount, currency],
      callback
    );
  },
  update: (id, data, callback) => {
    db.query("UPDATE bookings SET ? WHERE id = ?", [data, id], callback);
  },
  delete: (id, callback) => {
    db.query("DELETE FROM bookings WHERE id = ?", [id], callback);
  }
};

module.exports = { Booking };
