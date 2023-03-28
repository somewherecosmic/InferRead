import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    documents: {
        type: [{title: String, pages: [String], language: String}]
    },
    words: {
        type: [{word: String, POS: String}]
    }
});


export default mongoose.model("User", userSchema);