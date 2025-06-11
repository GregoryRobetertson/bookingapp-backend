require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const bookingRoutes = require("./routes/bookingRoutes");
const cors = require("cors");

console.log("FIREBASE_PRIVATE_KEY:", process.env.FIREBASE_PRIVATE_KEY);

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// CORS configuration
app.use(
  cors({
    origin: "http://localhost:3000", // frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);

// Mongoose connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch((err) => console.error("MongoDB connection error:", err));
