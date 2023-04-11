import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  documents: [
    {
      _id: mongoose.Types.ObjectId,
      title: String,
      pages: [String],
      language: String,
    },
  ],
  words: {
    type: [{ word: String, POS: String }],
  },
  userConfig: {
    type: Object,
    required: false,
  },
});

export default mongoose.model("User", userSchema);
