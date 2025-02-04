const express = require('express');
const {registerOrphanage,orphanageDetails,editOrphanage,addPhoto,getPhoto,getAllOrphanages} = require('../controllers/orphanageController.js');
const uploadIfExist = require('../Middlewares/multerMiddleware.js');
const {isLogin,isOrphanage} = require('../Middlewares/authMiddleWare.js');
const orphanageRouter = express.Router();

orphanageRouter.post('/create',registerOrphanage);
orphanageRouter.get('/getAll',getAllOrphanages);
orphanageRouter.get('/:id',isLogin,isOrphanage,orphanageDetails);
orphanageRouter.put('/edit',isLogin,isOrphanage,editOrphanage);
orphanageRouter.post('/addPhoto',isLogin,isOrphanage,addPhoto);
orphanageRouter.get('/getPhoto/:id',isLogin,getPhoto);
module.exports=orphanageRouter;