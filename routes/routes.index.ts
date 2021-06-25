import { Router } from "express";
const router = Router();
import {
  createUser,
  deleteUser,
  getUser,
  getUserById,
  loginUser,
  updateUser,
  // getUserById,
  // createUser,
  // updateUser,
  // deleteuser,
} from "../controller/index.controller";

import { createProject } from "../controller/task.controller";

router.get("/users", getUser);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.get("/login", loginUser);

router.get("/task", createProject);
// router.get()
// router.get()
// router.get()
// router.get()

export default router;
