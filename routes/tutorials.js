import express from "express";
import {
	getTutorials,
	getTutorialsBySearch,
	getTutorial,
	createTutorial,
	updateTutorial,
	deleteTutorial,
	likeTutorial,
	commentTutorial,
} from "../controllers/tutorials.js";

const router = express.Router();

router.get("/search", getTutorialsBySearch);

router.get("/:id", getTutorial);

router.get("/", getTutorials);

router.post("/", createTutorial);

router.patch("/:id", updateTutorial);

router.delete("/:id", deleteTutorial);

router.patch("/:id/likeTutorial", likeTutorial);

router.post("/:id/commentPost", commentTutorial);

export default router;
