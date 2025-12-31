const db = require("../db");

const Car = {
    checkAvailability: (startDate, endDate, callback) => {
        const sql = `
      SELECT 
        c.id,
        c.make,
        c.model,
        chr.base_rate_per_day,
        chr.available_quantity
        - IFNULL(SUM(bi.quantity), 0) AS available_cars
      FROM cars c
      JOIN car_hire_rates chr ON chr.car_id = c.id
      LEFT JOIN booking_items bi
        ON bi.service_type = 'car_hire'
        AND bi.service_id = c.id
        AND NOT (
          bi.end_date <= ?
          OR bi.start_date >= ?
        )
      GROUP BY c.id
      HAVING available_cars > 0
    `;

        db.query(sql, [startDate, endDate], callback);
    },
};

module.exports = Car;
