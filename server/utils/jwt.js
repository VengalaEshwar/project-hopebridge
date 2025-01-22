const {JWT_SECRET_KEY} = require("../configs/serverConfig.js")
const jwt = require('jsonwebtoken');
const generateToken =(user)=>{
    const token = jwt.sign(user,JWT_SECRET_KEY,{expiresIn:"1w"});
    return token;
}
const verifyToken = (token)=>{
    return jwt.verify(token,JWT_SECRET_KEY);
}
module.exports={
    generateToken,
    verifyToken
}