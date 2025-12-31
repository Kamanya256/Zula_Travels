// models/hotel.js
const db = require("../db");

// Simple Hotel model using raw SQL
const Hotel = {
  // Get all hotels (optionally filter by destination)
  getAll: (callback) => {
    const sql = `
      SELECT 
        h.id,
        h.name,
        h.location,
        h.address,
        h.rating,
        h.description,
        h.price_per_night,
        h.image_url,
        d.country,
        d.city
      FROM hotels h
      JOIN destinations d ON h.destination_id = d.id
      ORDER BY h.name ASC
    `;
    db.query(sql, callback);
  },

  // Get single hotel by ID
  getById: (id, callback) => {
    const sql = `
      SELECT 
        h.id,
        h.name,
        h.location,
        h.address,
        h.rating,
        h.description,
        h.price_per_night,
        h.image_url,
        d.country,
        d.city
      FROM hotels h
      JOIN destinations d ON h.destination_id = d.id
      WHERE h.id = ?
      LIMIT 1
    `;
    db.query(sql, [id], callback);
  },

  // Create hotel (for admin panel later)
  create: (data, callback) => {
    const {
      destination_id,
      name,
      location,
      address,
      rating,
      description,
      price_per_night,
      image_url,
    } = data;

    const sql = `
      INSERT INTO hotels 
        (destination_id, name, location, address, rating, description, price_per_night, image_url)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
      sql,
      [
        destination_id,
        name,
        location,
        address || null,
        rating || null,
        description || null,
        price_per_night,
        image_url || null,
      ],
      callback
    );
  },

  // Update hotel
  update: (id, data, callback) => {
    const {
      destination_id,
      name,
      location,
      address,
      rating,
      description,
      price_per_night,
      image_url,
    } = data;

    const sql = `
      UPDATE hotels
      SET 
        destination_id = ?,
        name = ?,
        location = ?,
        address = ?,
        rating = ?,
        description = ?,
        price_per_night = ?,
        image_url = ?
      WHERE id = ?
    `;

    db.query(
      sql,
      [
        destination_id,
        name,
        location,
        address || null,
        rating || null,
        description || null,
        price_per_night,
        image_url || null,
        id,
      ],
      callback
    );
  },

  // Delete hotel
  delete: (id, callback) => {
    const sql = `DELETE FROM hotels WHERE id = ?`;
    db.query(sql, [id], callback);
  },
};

module.exports = Hotel;
