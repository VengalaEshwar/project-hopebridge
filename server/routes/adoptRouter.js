const express = require('express');
const {adoptApplication,adoptResponse} = require("../controllers/adoptController.js");
const {isLogin,isOrphanage}=require('../Middlewares/authMiddleWare');
const adoptRouter = express.Router();
adoptRouter.post("/apply",isLogin,adoptApplication);
adoptRouter.put("/respond",isLogin,adoptResponse)
module.exports=adoptRouter;