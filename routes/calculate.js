import express from "express";
import calculate from "../controllers/User.js";
const router = express.Router();

router.post("/", calculate);

export default router;
