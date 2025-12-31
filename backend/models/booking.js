// models/booking.js
const db = require("../db");

const Booking = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM bookings", (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  },

  create: (data) => {
    const {
      user_id,
      service_type,   // 'hotel', 'flight', 'car', etc.
      service_id,
      check_in,
      check_out,
      guests,
      rooms,
      total_price,
      status,         // 'pending', 'confirmed', etc.
    } = data;

    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO bookings 
         (user_id, service_type, service_id, check_in, check_out, guests, rooms, total_price, status)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [user_id, service_type, service_id, check_in, check_out, guests, rooms, total_price, status || "pending"],
        (err, result) => {
          if (err) return reject(err);
          resolve(result);
        }
      );
    });
  },
};

module.exports = Booking;
