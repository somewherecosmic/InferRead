import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    documents: {
        type: [{title: String, content: String}]
    },
    words: {
        type: [{word: String, POS: String}]
    }
});


export default mongoose.model("User", userSchema);