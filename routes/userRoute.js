import { Router } from "express";
import {
  createUser,
  deleteUser,
  editUser,
  getUsers,
} from "../controllers/userController";
const router = Router();

router.get("/", getUsers);
router.post("/", createUser);
router.patch("/:id", editUser);
router.delete("/:id", deleteUser);

export default router;
