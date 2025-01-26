const express = require('express')
const {postBlog,getBlogs,editBlog,removeBlog} = require('../controllers/blogController.js')
const {isLogin} = require("../Middlewares/authMiddleWare.js");
const uploadIfExist = require('../Middlewares/multerMiddleware.js');
const blogRouter = express.Router();

blogRouter.post("/addBlog", isLogin,uploadIfExist, postBlog);
blogRouter.get("/:page",getBlogs);
blogRouter.get("/",getBlogs);
blogRouter.put("/editBlog",isLogin, uploadIfExist,editBlog);
blogRouter.delete("/deleteBlog",isLogin,uploadIfExist,removeBlog);
module.exports=blogRouter;