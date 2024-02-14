import express from "express";
const router = express.Router();
import { verifyToken } from "../utils/verifyUser.js";
import { createpost } from "../controllers/post.js";

router.post("/create", verifyToken, createpost);

export default router;
