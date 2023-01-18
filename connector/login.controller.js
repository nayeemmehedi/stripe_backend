const { SignUp } = require("../model/signUp.model");
const bcrypt = require("bcrypt");
const {  tokenCreate } = require("../utils/token");

module.exports.loginController = async (req, res, next) => {
  try {
    const user = await SignUp.find({ email: req.body?.email });

    if (!user) {
      return res.status(400).json({
        status: "error",
        message: "User not  found",
      });
    }


    const value =await bcrypt.compare(req.body.password, user[0].password);

    if(!value){
      return res.status(400).json({
        status: "error",
        message: "Invalid Password",
      })
    }

    const token =   tokenCreate({
        email: user[0].email,
        role:"learner"
    })


    res.send({
        status: "success",
        message: "Login Success",
        token

    })



   
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
      error: error,
    });
  }
};
