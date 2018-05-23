'use strict';
const models = require('../models');

exports.createUser = (req, h) => {
  const userInfo = {
    username: req.payload.username,
    email: req.payload.email,
  };
  return models.User.create(userInfo).then((userInfo) => {
    return { message: "User created successfully", user: userInfo };
  }).catch((err) => {
    return { err: err };
  });
}

exports.getUser = (req, h) => {
  return models.User.findAll({
    // where: {
    //   id: req.params.id
    // }
  }).then((userData) => {
    return { message: "Success", user: userData };
  }).catch((err) => {
    return { err: "err" };
  });
}