const {createBlog,readBlogs,updateBlog,deleteBlog} = require('../services/blogService.js');
const postBlog = async (req,res)=>{
    try{
        const blog = await createBlog(req.body);
        if(!blog.success)
        {
            return res.status(401).json(blog);
        }
        return res.status(201).json(blog);
    }
    catch(error)
    {
        console.log(error);
        return res.status(501).json({
            success : true,
            message : "some error occurred try to post again",
            error : error
        })
    }
}
const getBlogs = async (req,res)=>{
   try{
    const blogs = await readBlogs(req);
    if(!blogs.success)
        return res.status(401).json(blogs);
    return res.status(201).json(blogs);
   }
   catch(error)
   {
    console.log(error);
        return res.status(501).json({
            success : false,
            message : "try again to load blogs",
            error : JSON.parse(error)
        })
   }

}
const editBlog = async (req,res)=>{
    try{
        const blog = await updateBlog(req.body);
        if(!blog.success)
            return res.status(401).json(blog);
        return res.status(201).json(blog);
       }
       catch(error)
       {
        console.log(error);
            return res.status(501).json({
                success : false,
                message : "try again to update  blog",
                error
            })
       }
}
const removeBlog=async (req,res)=> {
    console.log(req.body);
    try{
        const respsonse = await deleteBlog(req.body);
        if(!respsonse.success)
            return res.status(401).json(respsonse);
        return res.status(201).json(respsonse);
    }
    catch(error)
    {
        return res.status(501).json({
            success : false,
            message : "try again to delete  blog"
        })
    }
}
module.exports={
    postBlog,
    getBlogs,
    editBlog,
    removeBlog
}