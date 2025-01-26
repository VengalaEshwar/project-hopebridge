const express = require('express');
const {addChild,getChild,editChild,getSingleChild} = require("../controllers/childController");
const {isLogin,isOrphanage}=require('../Middlewares/authMiddleWare');
const childRouter = express.Router();

childRouter.post("/addChild",isLogin,isOrphanage,addChild);
childRouter.put("/editChild",isLogin,isOrphanage,editChild);
childRouter.get("/",isLogin,getChild);

childRouter.get("/:page",isLogin,getChild);
childRouter.get("/getSingleChild/:id",isLogin,getSingleChild);
module.exports=childRouter;