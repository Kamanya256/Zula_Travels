// models/flight.js
const db = require("../db");

const Flight = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM flights", (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  },

  getById: (id) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM flights WHERE id = ?", [id], (err, results) => {
        if (err) return reject(err);
        resolve(results[0] || null);
      });
    });
  },

  create: (data) => {
    const { airline, departure, destination, date, price, seats_available } = data;
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO flights (airline, departure, destination, date, price, seats_available) VALUES (?, ?, ?, ?, ?, ?)",
        [airline, departure, destination, date, price, seats_available],
        (err, result) => {
          if (err) return reject(err);
          resolve(result);
        }
      );
    });
  },
};

module.exports = Flight;
