// import mongoose from "mongoose";
// import Document from "../models/Document";

// mongoose.connect('mongodb+srv://Ethan:2mQWDO8L7jTetddl@cluster0.kbsgj.mongodb.net/test?retryWrites=true&w=majority');


// const firstDoc = new Document({
//     title: "testDoc",
//     language: "English"
// })

// //Create op to mongoDB 
// await firstDoc.save();

// const getDoc = await Document.findOne({});
// console.log(getDoc);


// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;

// // _ indicates that this variable will only be used in this file
// let _db;


// const mongoConnect = (callback) => {
//     MongoClient.connect("mongodb+srv://Ethan:2mQWDO8L7jTetddl@cluster0.kbsgj.mongodb.net/test?retryWrites=true&w=majority")
// .then(client => {
//     console.log("connected");
//     _db = client.db();
//     callback(client);
// })
// .catch(err => {
//     console.log(err);
// });
// };

// const accessDB = () => {
//     if (_db) {
//         return _db;
//     }
//     throw "Database Not Found";
// };

// module.exports = {
//     mongoConnect,
//     accessDB
// }

// MongoClient.connect("mongodb+srv://Ethan:2mQWDO8L7jTetddl@cluster0.kbsgj.mongodb.net/?retryWrites=true&w=majority")
// .then(result => {
//     console.log("connected");
// })
// .catch(err => {
//     console.log(err);
// });