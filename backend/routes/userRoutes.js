import express from "express";
const router = express.Router();
import {
  authUser,
  getUsers,
  registerUser,
  getUserProfile,
  updateUserProfile,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// localhost:5000/api/users/
router.route("/").post(registerUser).get(protect, admin, getUsers);

router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
