// Authentication model logic handling
import bcrypt from 'bcryptjs';

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
    .then(result => {
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
    pass;
}


export {
    signup,
    logIn
}