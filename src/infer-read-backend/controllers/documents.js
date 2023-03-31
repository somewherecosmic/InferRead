// Document CRUD operations
import User from '../models/User.js';

const getDocuments = (req, res, next) => {
    const params = req.params;
    User.findById(params.id, 'documents').then(documents => {
        res.status(200).send(documents);
    }).catch(err => {
        res.status(500).send(err);
    });
};

// const deleteDocument = (req, res, next) => {
//     // Takes id of document as param and deletes it
// }



export {
    getDocuments
}