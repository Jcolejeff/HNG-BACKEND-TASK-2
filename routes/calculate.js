import express from "express";
import calculate from "../controllers/calculate.js";
const router = express.Router();

router.post("/", calculate);

export default router;
