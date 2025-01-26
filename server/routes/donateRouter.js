const express = require('express');
const donateRouter = express.Router();
const {donateController} = require('../controllers/donateController.js')
const {isLogin} = require('../Middlewares/authMiddleWare.js');
donateRouter.post("/",isLogin,donateController);
module.exports=donateRouter;
