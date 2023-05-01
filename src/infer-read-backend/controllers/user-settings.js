// Document CRUD operations
import User from "../models/User.js";
import { verifyToken } from "./auth.js";
import mongoose from "mongoose";

const getSettings = (req, res, next) => {
  const userId = req.params.id;
  User.findById(userId, "userConfig")
    .then((userOptions) => {
      res.status(200).send(userOptions);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const updateSettings = (req, res, next) => {
  const userId = req.params.id;
  const updatedConfig = req.body.userConfig;
  console.log(updatedConfig);
  User.findByIdAndUpdate(userId, { $set: { userConfig: updatedConfig } }, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send("User not found");
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getBank = (req, res, next) => {
  const userId = req.params.id;
  User.findById(userId, 'bank').then((bank) => {
    res.status(200).send(bank);
  }).catch(err => {
    res.status(500).send(err);
  })
}

const updateBank = (req, res, next) => {
  const userId = req.params.id;
  const updatedBank = req.body.bank;
  User.findOneAndUpdate(userId, {'bank': updatedBank}, {new: true})
  .then(user => {
    res.status(200).send(user);
  }).catch(err => {
    console.log(err);
  }); 
}

export { getSettings, updateSettings, getBank, updateBank };
