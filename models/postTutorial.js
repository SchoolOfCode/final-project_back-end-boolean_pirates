import mongoose from 'mongoose';

const tutorialSchema = mongoose.Schema({
    title: String,
    instructions: String,
    ability: String,
    creator: String,
    materials: [String],
    videoUrl: String,
    imageUrl: String,
    likes: {
        type: [String],
        default: [],
    },
    comments: {
        type: [String],
        default: [],
    },
    favourites: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostTutorials = mongoose.model('Tutorial', tutorialSchema);

export default PostTutorials;