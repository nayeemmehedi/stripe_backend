const express = require('express');
const { paymentControll } = require('../connector/payment.controller');

const payment = express.Router();

payment.post('/',paymentControll)


module.exports = payment;