const {getUser,getGallery} = require("../controllers/userController")
const express = require('express');
const userRouter = express.Router();
userRouter.get("/getGallery",getGallery);
userRouter.get("/:id",getUser);
module.exports=userRouter;