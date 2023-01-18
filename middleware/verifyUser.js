var jwt = require("jsonwebtoken");

module.exports = async function (req, res, next) {
  try {
    if (!req.headers?.authorization) {
      return res.status(401).json({ message: "No token provided" });
    }
    const token = await req.headers?.authorization?.split(" ")[1];

    const verifyToken = jwt.verify(token, process.env.SECRATE);

    

    req.user = verifyToken;

    next();
  } catch (error) {
    res.status(400).send(error);
  }
};
