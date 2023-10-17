// Document CRUD operations
import User from '../models/User.js';
import { verifyToken } from './auth.js';
import mongoose from 'mongoose'; 

const getDocuments = (req, res, next) => {
    const userId = req.params.id;
    User.findById(userId, 'documents').then(documents => {
        res.status(200).send(documents);
    }).catch(err => {
        res.status(500).send(err);
    });
};

const deleteDocument = (req, res, next) => {
    const userId = req.params.id;
    const docId = req.params.docId;
    const token = req.query.auth;
    if (verifyToken(token) != true) {
        res.status(401).send('Unauthorized');
        return;
    }
    // Need to delete after completion
    // const filter = {"_id" : mongoose.Types.ObjectId(userId)};
    // const pull = {"$pull": { "documents": { "_id": mongoose.Types.ObjectId(docId)}}};
    User.updateOne(
        { _id: userId },
        { $pull: { documents: { _id: docId } } },
        (err, result) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(result);
        });
};

const updateDocumentTitle = (req, res, next) => {

    // Write query for mongodb driver to update title in db
    const userId = req.params.id;
    const docId = req.params.docId;
    const token = req.query.auth;
    const newTitle = req.body.newTitle;
    console.log(userId + " " + docId + " " + newTitle);
    if (verifyToken(token) != true) {
        res.status(401).send('Unauthorized');
        return;
    }
    console.log("Inside of update");
    User.findOneAndUpdate(
        { _id: mongoose.Types.ObjectId(userId), "documents._id": mongoose.Types.ObjectId(docId) },
        { $set: { "documents.$.title": newTitle } },
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send("Failed to change title, " + err);
                return;
            }
            return res.status(200).send("Changed title successfully");
        });
};

export {
    getDocuments,
    deleteDocument,
    updateDocumentTitle,
}