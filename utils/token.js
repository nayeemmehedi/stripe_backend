const jwt = require('jsonwebtoken');

module.exports.tokenCreate = function(value){

    const token = jwt.sign(value, process.env.SECRATE , { expiresIn: '1h' });
    return token;

}
