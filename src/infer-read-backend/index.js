import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import authRoutes from './routes/auth.js';
import documentRoutes from './routes/documents.js'
import userSettingsRoutes from './routes/user.js'

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization', 'X-Requested-With');
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }
    return next();
});

app.use('/auth', authRoutes);

app.use('/documents', documentRoutes);

app.use('/user', userSettingsRoutes);

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
