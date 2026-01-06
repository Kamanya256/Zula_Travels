const db = require("../db");

const Car = {
  getAll: (callback) => {
    const sql = `
      SELECT 
        id,
        make,
        model,
        year,
        seating_capacity,
        transmission,
        description,
        image_url,
        is_available,
        plate_number,
        category,
        base_rate_per_day,
        available_quantity,
        fuel_type,
        engine_capacity,
        features
      FROM cars
      WHERE is_available = 1
      ORDER BY created_at DESC
    `;
    db.query(sql, callback);
  },

  getByMake: (make, callback) => {
    const sql = `
      SELECT 
        id,
        make,
        model,
        year,
        seating_capacity,
        transmission,
        description,
        image_url,
        is_available,
        plate_number,
        category,
        base_rate_per_day,
        available_quantity,
        fuel_type,
        engine_capacity,
        features
      FROM cars
      WHERE make = ? AND is_available = 1
      ORDER BY created_at DESC
    `;
    db.query(sql, [make], callback);
  },

  getByCategory: (category, callback) => {
    const sql = `
      SELECT 
        id,
        make,
        model,
        year,
        seating_capacity,
        transmission,
        description,
        image_url,
        is_available,
        plate_number,
        category,
        base_rate_per_day,
        available_quantity,
        fuel_type,
        engine_capacity,
        features
      FROM cars
      WHERE category = ? AND is_available = 1
      ORDER BY created_at DESC
    `;
    db.query(sql, [category], callback);
  },

  searchAvailable: (filters, callback) => {
    let sql = `
      SELECT 
        id,
        make,
        model,
        year,
        seating_capacity,
        transmission,
        description,
        image_url,
        is_available,
        plate_number,
        category,
        base_rate_per_day,
        available_quantity,
        fuel_type,
        engine_capacity,
        features
      FROM cars
      WHERE is_available = 1
    `;

    const params = [];

    // Add filters if provided
    if (filters.category && filters.category !== 'All') {
      sql += ' AND category = ?';
      params.push(filters.category);
    }

    if (filters.make && filters.make !== 'All') {
      sql += ' AND make = ?';
      params.push(filters.make);
    }

    if (filters.quantity) {
      sql += ' AND available_quantity >= ?';
      params.push(filters.quantity);
    }

    sql += ' ORDER BY created_at DESC';

    db.query(sql, params, callback);
  },

  getById: (id, callback) => {
    const sql = `
      SELECT 
        id,
        make,
        model,
        year,
        seating_capacity,
        transmission,
        description,
        image_url,
        is_available,
        plate_number,
        category,
        base_rate_per_day,
        available_quantity,
        fuel_type,
        engine_capacity,
        features
      FROM cars
      WHERE id = ? AND is_available = 1
    `;
    db.query(sql, [id], callback);
  },

  // Optional: Update availability
  updateAvailability: (id, available_quantity, callback) => {
    const sql = `
      UPDATE cars 
      SET available_quantity = ?, 
          is_available = ?
      WHERE id = ?
    `;
    const is_available = available_quantity > 0 ? 1 : 0;
    db.query(sql, [available_quantity, is_available, id], callback);
  }
};

module.exports = Car;