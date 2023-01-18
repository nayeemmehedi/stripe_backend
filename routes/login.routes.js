const express = require('express');
const { loginController } = require('../connector/login.controller');

const login = express.Router();

login.post('/',loginController)


module.exports = login;