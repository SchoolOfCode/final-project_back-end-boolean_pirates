import tutorialsSchema from "./../models/postTutorial.js";

// Main home page to retrieve Tutorials
export const getTutorials = async (req, res) => {
	try {
		const tutorials = await tutorialsSchema.find();
		res.status(200).json(tutorials);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

// Specific Tutorial Page
export const getTutorial = async (req, res) => {};

// Search Tutorials
export const getTutorialsBySearch = async (req, res) => {};

// Create Tutorial
export const createTutorial = async (req, res) => {
	const tutorials = req.body; //Whole

	const newTutorials = new tutorialsSchema({
		...tutorials,
		createdAt: new Date().toISOString(),
	});

	try {
		await newTutorials.save();
		res.status(201).json(newTutorials);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Update Tutorial (Not in use)
export const updateTutorial = async (req, res) => {};

// Delete Post (Not in use)
export const deleteTutorial = async (req, res) => {};

// Like/unlike tutorial
export const likeTutorial = async (req, res) => {};

// Comment post request
export const commentTutorial = async (req, res) => {};
