import express from "express";
const router = express.Router();
import { verifyToken } from "../utils/verifyUser.js";
import { createpost,getposts , deletepost} from "../controllers/post.js";

router.post("/create", verifyToken, createpost);
router.get("/getposts", getposts);
router.delete('/deletepost/:postId/:userId', verifyToken, deletepost)
export default router;
