'use strict';

const models = require('../models');
const usersController = require('../controllers/usersController')


const usersRoutes = [
  {
    method: "POST",
    path: "/api/users/create",
    handler: usersController.createUser
  },
  {
    method: "GET",
    path: "/api/users",
    handler: usersController.getUser
  }
];

module.exports = usersRoutes;