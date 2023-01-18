const express = require('express');
const { signUpController } = require('../connector/signup.controller');

const signUp = express.Router();

signUp.post('/',signUpController)


module.exports = signUp;