import express from "express";
import {
	getTutorials,
	getTutorialsBySearch,
	getTutorialById,
	createTutorial,
	updateTutorial,
	deleteTutorial,
	likeTutorial,
	commentTutorial,
} from "../controllers/tutorials.js";

const router = express.Router();

router.get("/search", getTutorialsBySearch);

router.get("/:id", getTutorialById);

router.get("/", getTutorials);

router.post("/", createTutorial);

router.patch("/:id", updateTutorial);

router.delete("/:id", deleteTutorial);

router.patch("/:id/likeTutorial", likeTutorial);

router.patch("/:id/commentPost", commentTutorial);

export default router;
