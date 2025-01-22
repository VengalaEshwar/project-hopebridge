const express = require('express')
const {postBlog} = require('../controllers/blogController.js')
const blogRouter = express.Router();

blogRouter.post("/addBlog",postBlog);