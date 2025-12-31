const express = require("express");
const cors = require("cors");

const app = express();

/* ===== MIDDLEWARE ===== */
app.use(cors());
app.use(express.json());

/* ===== ROUTES ===== */

app.use("/api/search", require("./routes/search"));

/* Flights */
app.use("/api/flights", require("./routes/flights"));

/* Hotels */
app.use("/api/hotels", require("./routes/hotels"));
app.use("/api/hotel_rooms", require("./routes/hotel_rooms"));

/* Car Hire */
app.use("/api/cars", require("./routes/cars"));
app.use("/api/drivers", require("./routes/drivers"));
app.use("/api/car-pricing", require("./routes/car_pricing"));

/* Payments */
app.use("/api/payments", require("./routes/payments"));

/* Users */
app.use("/api/users", require("./routes/users"));

module.exports = app;
