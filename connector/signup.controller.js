const { SignUp } = require("../model/signUp.model");

module.exports.signUpController = async (req, res, next) => {
  try {
    const value = await SignUp.create(req.body);

    res.status(200).json({
        status: "success",
      });
  } catch (error) {

    res.status(400).json({
        status: "error",
        message: error.message,
        error: error,
      });

  }
};
