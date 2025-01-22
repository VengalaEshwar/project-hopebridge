const express = require('express');
const {signupUser,loginUser,logoutUser} = require("../controllers/authController");
const authRouter = express.Router();


authRouter.post("/signup",signupUser);
authRouter.post("/login",loginUser);
authRouter.get("/logout",logoutUser);

module.exports=authRouter;
