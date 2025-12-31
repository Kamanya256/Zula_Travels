// Check room availability by date range
checkAvailability: (hotelId, startDate, endDate, callback) => {
  const sql = `
    SELECT 
      hr.id,
      hr.room_type,
      hr.capacity,
      hr.price_per_night,
      hr.available_quantity
      - IFNULL(SUM(bi.quantity), 0) AS available_rooms
    FROM hotel_rooms hr
    LEFT JOIN booking_items bi 
      ON bi.service_type = 'hotel_room'
      AND bi.service_id = hr.id
      AND NOT (
        bi.end_date <= ?
        OR bi.start_date >= ?
      )
    WHERE hr.hotel_id = ?
    GROUP BY hr.id
    HAVING available_rooms > 0
  `;

  db.query(sql, [startDate, endDate, hotelId], callback);
}
