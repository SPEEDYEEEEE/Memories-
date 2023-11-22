import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    creator: String,
    title: String,
    message: String,
    tags: [String],
    selectedFile: String,
    likecount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date() 
    },
});

const postMessage = mongoose.model('postMessage', postSchema);

//module.exports = postMessage;

export default postMessage;