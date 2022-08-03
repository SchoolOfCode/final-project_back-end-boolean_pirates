import express from "express";
import { getTutorials } from "../controllers/tutorials.js";

const router = express.Router();

router.get("/", getTutorials)

export default router

