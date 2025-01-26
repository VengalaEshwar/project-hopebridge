const express = require('express');
const {registerOrphanage,orphanageDetails,editOrphanage,addPhoto} = require('../controllers/orphanageController.js');
const uploadIfExist = require('../Middlewares/multerMiddleware.js');
const {isLogin,isOrphanage} = require('../Middlewares/authMiddleWare.js');
const orphanageRouter = express.Router();

orphanageRouter.post('/create',registerOrphanage);
orphanageRouter.get('/',isLogin,isOrphanage,orphanageDetails);
orphanageRouter.put('/edit',isLogin,isOrphanage,editOrphanage);
orphanageRouter.post('/addPhoto',isLogin,isOrphanage,addPhoto);
module.exports=orphanageRouter;