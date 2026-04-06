const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const { protect, authorizeRoles } = require("../middleware/authMiddleware");

// ADMIN: get all users
router.get("/", protect, authorizeRoles("Admin"), getAllUsers);

// GET single user
router.get("/:id", protect, getUserById);

// UPDATE user
router.put("/:id", protect, updateUser);

// DELETE user (Admin only)
router.delete("/:id", protect, authorizeRoles("Admin"), deleteUser);

module.exports = router;