// backend/models/flightModel.js
const db = require("../db");

// Ensure table exists is optional if you imported SQL — keep for dev convenience
const createTableSql = `
CREATE TABLE IF NOT EXISTS flights (
  id INT AUTO_INCREMENT PRIMARY KEY,
  origin_destination_id INT NOT NULL,
  destination_destination_id INT NOT NULL,
  airline VARCHAR(100),
  flight_number VARCHAR(50),
  departure_time DATETIME NOT NULL,
  arrival_time DATETIME NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  currency VARCHAR(10) NOT NULL,
  seats_total INT NOT NULL,
  seats_available INT NOT NULL
);`;

db.query(createTableSql, (err) => {
  if (err) {
    // ignore if exists; you have the dump — this is safe to leave
    // console.log("flights table create error (ignored if exists):", err.message);
  }
});

const Flight = {
  getAll: (callback) => {
    db.query("SELECT * FROM flights", callback);
  },
  getById: (id, callback) => {
    db.query("SELECT * FROM flights WHERE id = ?", [id], callback);
  },
  create: (data, callback) => {
    const {
      origin_destination_id,
      destination_destination_id,
      airline,
      flight_number,
      departure_time,
      arrival_time,
      price,
      currency,
      seats_total,
      seats_available
    } = data;
    db.query(
      `INSERT INTO flights
      (origin_destination_id, destination_destination_id, airline, flight_number, departure_time, arrival_time, price, currency, seats_total, seats_available)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [origin_destination_id, destination_destination_id, airline, flight_number, departure_time, arrival_time, price, currency, seats_total, seats_available],
      callback
    );
  },
  update: (id, data, callback) => {
    db.query("UPDATE flights SET ? WHERE id = ?", [data, id], callback);
  },
  delete: (id, callback) => {
    db.query("DELETE FROM flights WHERE id = ?", [id], callback);
  }
};

module.exports = { Flight };
