const express = require('express');
const donateRouter = express.Router();
const {donateController,getTransaction} = require('../controllers/donateController.js')
const {isLogin,isUser} = require('../Middlewares/authMiddleWare.js');
donateRouter.post("/",isLogin,isUser,donateController);
donateRouter.get("/transaction/:id",isLogin,getTransaction)
module.exports=donateRouter;
