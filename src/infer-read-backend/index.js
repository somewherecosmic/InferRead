import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import authRoutes from './routes/auth.js';

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/auth', authRoutes);

mongoose.set('strictQuery', false);
mongoose
    .connect('mongodb+srv://Ethan:2mQWDO8L7jTetddl@cluster0.kbsgj.mongodb.net/test?retryWrites=true&w=majority').then(result => {
        app.listen(3000)
        console.log("Connected to MongoDB Atlas Cluster");
    })
    .catch(err => {
        console.log(err);
    });

// Easy to call in a document create endpoint in API

// const firstDoc = await Document.create({
//     title: "testDoc",
//     language: "English"
// })

// console.log(firstDoc);
