import { Router } from "express";
const router = Router();
import {
  createUser,
  deleteUser,
  getUser,
  getUserById,
  updateUser,
  // getUserById,
  // createUser,
  // updateUser,
  // deleteuser,
} from "../controller/index.controller";

router.get("/users", getUser);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
export default router;
