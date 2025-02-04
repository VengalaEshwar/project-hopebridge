const express = require('express');
const {adoptApplication,adoptResponse,getForm} = require("../controllers/adoptController.js");
const {isLogin,isOrphanage}=require('../Middlewares/authMiddleWare');
const adoptRouter = express.Router();
adoptRouter.post("/apply",isLogin,adoptApplication);
adoptRouter.put("/respond",isLogin,adoptResponse)
adoptRouter.get("/:id",isLogin,getForm);
module.exports=adoptRouter;