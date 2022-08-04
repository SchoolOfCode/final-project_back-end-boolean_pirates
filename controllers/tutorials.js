import mongoose from "mongoose";
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
export const getTutorialById = async (req, res) => {
const { id } = req.params
if(!mongoose.Types.ObjectId.isValid(id)){
	return res.status(404).send(`No tutorial with id ${id} found`)};
 try {
  const tutorial = await tutorialsSchema.findById(id);
  res.status(200).json(tutorial);
} catch (error) {
  res.status(404).json({ message: error.message });
}
};

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
export const deleteTutorial = async (req, res) => {
  console.log(req.params)
  const { id } = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
  return res.status(404).send(`No tutorial with id ${id} found`)};
 try {
  await tutorialsSchema.findByIdAndRemove(id);
  res.status(200).json({message: "Post is succesfully deleted"});
} catch (error) {
  res.status(404).json({ message: error.message });
}
};

// Like/unlike tutorial
export const likeTutorial = async (req, res) => {};

// Comment post request
export const commentTutorial = async (req, res) => {};
