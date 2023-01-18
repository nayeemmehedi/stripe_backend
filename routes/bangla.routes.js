const express = require('express')
const { BanglaPost, BanglaGet } = require('../connector/bangla.controller')
const roleVerify = require('../middleware/roleVerify')
const verifyUser = require('../middleware/verifyUser')

const Bangla = express.Router()


Bangla.post('/', verifyUser, BanglaPost)
Bangla.post('/', verifyUser, BanglaPost)
Bangla.get('/',verifyUser,roleVerify(['teacher','learner']),BanglaGet)

module.exports = Bangla
