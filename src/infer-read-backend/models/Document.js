import mongoose from 'mongoose';
const { Schema, model } = mongoose;


// class Document {
//     constructor(title, language) {
//         this.title = title;
//         this.language = language;
//     }
// }

const documentSchema = new Schema({
    title: String,
    language: String
})

const Document = model("Document", documentSchema);

export default Document;