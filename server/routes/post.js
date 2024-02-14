import express from "express";
const router = express.Router();
import { verifyToken } from "../utils/verifyUser.js";
import { createpost,getposts } from "../controllers/post.js";

router.post("/create", verifyToken, createpost);
router.get("/getposts", verifyToken, getposts);

export default router;
