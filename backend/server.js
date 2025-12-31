// server.js (CommonJS)

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// Load env
dotenv.config({ path: path.join(__dirname, ".env") });

// Ensure DB connection
require("./db");

// Routes
const flightRoutes = require("./routes/flights");
const userRoutes = require("./routes/users");
const bookingRoutes = require("./routes/bookings");
const hotelRoutes = require("./routes/hotels");

const app = express();

/**
 * CORS + headers
 * We expose Content-Range so React-Admin can read it for pagination
 */
app.use(
    cors({
        origin: ["http://localhost:3000", "http://localhost:3001"], // frontend + admin
        credentials: true,
        exposedHeaders: ["Content-Range"],
    })
);

// Extra safety: ensure header is always exposed
app.use((req, res, next) => {
    res.header("Access-Control-Expose-Headers", "Content-Range");
    next();
});

// JSON body parsing
app.use(express.json());

// API Routes
app.use("/api/flights", flightRoutes);
app.use("/api/users", userRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/hotels", hotelRoutes);

// Health check
app.get("/", (req, res) => {
    res.send("Zula Travels Backend API is running ✅");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});


const paymentRoutes = require("./routes/payments");

app.use("/api/payments", paymentRoutes);
