const express = require("express");
const router = express.Router();

const {
  createRecord,
  getRecords,
  deleteRecord,
} = require("../controllers/financialController");

const { protect } = require("../middleware/authMiddleware");

// ➕ Create record
router.post("/", protect, createRecord);

// 📥 Get all records
router.get("/", protect, getRecords);

// ❌ Delete record
router.delete("/:id", protect, deleteRecord);

module.exports = router;
const { getDashboard } = require("../controllers/financialController");
router.get("/dashboard", protect, getDashboard);