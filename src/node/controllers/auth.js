// Authentication model logic handling
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User.js';


const signup = (req, res, next) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    console.log(email, password);

    bcrypt.hash(password, 12)
    .then(hash => {
        const user = new User({
            email: email,
            password: hash
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
        console.log(user);
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
        res.status(200).send( { token: token, id: loadedUser._id })
    })
    .catch(err => {
        next(err);
    })
}


export {
    signup,
    logIn
}