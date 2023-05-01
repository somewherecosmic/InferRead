// Authentication model logic handling
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import User from '../models/User.js';


const signup = (req, res, next) => {
    console.log(req.body);
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    console.log(email, password);

    bcrypt.hash(password, 12)
    .then(hash => {
        const user = new User({
            _id : new mongoose.Types.ObjectId(),
            email: email,
            username: username,
            password: hash,
            bank: {known: [], learning: []},
            userConfig: {languageSelected: "Irish"},
        })
        return user;
    })
    .then(user => {
        user.save().then(console.log("user created"));
        res.status(201).json({message: "User object created"});
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    })
}

const logIn = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;

    User.findOne({email: email})
    .then(user => {
        loadedUser = user;
        return bcrypt.compare(password, user.password);
    })
    .then(correctPassword => {
        if (!correctPassword) {
            const error = new Error("Incorrect password");
            error.statusCode = 401;
            throw error;
        }
        const token = jwt.sign(
            {email : loadedUser.email},
            'inferread',
            {expiresIn: '24h'});
            // Date object + 24 hours
        res.status(200).send( {email: loadedUser.email, token: token, id: loadedUser._id, bank: loadedUser.bank, userConfig: loadedUser.userConfig, expiresIn: new Date( new Date().getTime() + 24 * 60 * 60 * 1000)}) 
    })
    .catch(err => {
        next(err);
    })
}

const verifyToken = token => {
    const decoded = jwt.verify(token, 'inferread');
        if (typeof decoded != "undefined") {
            return true;
        }
        if (err) {
            console.log(err);
        }
        return false;
    }


export {
    signup,
    logIn,
    verifyToken
}