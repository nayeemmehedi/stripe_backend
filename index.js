const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const signUp = require('./routes/signup.routes')
const login = require('./routes/login.routes')
const Bangla = require("./routes/bangla.routes")
const payment = require('./routes/payment.routes')


const app = express()
require('dotenv').config()


mongoose.set('strictQuery', false)
mongoose.connect(process.env.MongooseServer);

app.use(express.json())
app.use(cors())

app.use("/api/v1/signup",signUp)
app.use("/api/v1/login",login)
app.use("/api/v1/bangla",Bangla)
app.use("/api/v1/payment",payment)






app.listen(4000)