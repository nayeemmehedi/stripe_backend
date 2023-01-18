const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const signupSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,

    validate: {
      validator: function (value) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
      },
      message: "Invalid email address.",
    },
  },

  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
    validate: {
      validator: (value) => validator.isStrongPassword(value),
    },
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        return (value = this.password);
      },
      message: "Password does not match",
    },
  },
});

signupSchema.pre("save", async function (req, res, next) {
  try {
    const user = this;

    const hashValue = await bcrypt.hash(user.password, 10);

    user.password = hashValue;
    user.confirmPassword = undefined;

    next();
  } catch (error) {
    console.log(error)
   
  }
});

module.exports.SignUp = mongoose.model("SignUp", signupSchema);
