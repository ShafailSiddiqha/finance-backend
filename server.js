const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/db");

// connect DB
connectDB();

// middleware
app.use(express.json());

// routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// import middleware
const { protect, authorizeRoles } = require("./middleware/authMiddleware");

// test route (protected)
app.get(
  "/api/test/admin",
  protect,
  authorizeRoles("Admin"),
  (req, res) => {
    res.json({ msg: "Welcome Admin!" });
  }
);

const financialRoutes = require("./routes/financialRoutes");
app.use("/api/finance", financialRoutes);

// normal route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});