const { uploadToCloudinary,removeFromCloudinary} = require('../utils/cloudinary');
const User = require('../schemas/user');
const Blog = require('../schemas/Blog.js');
const upload = require("../Middlewares/multerMiddleware");
const {deleteImage} = require("../utils/deleteImage");
const createBlog = async (blogDetails)=>{
    try{
        const imageURL = await  uploadToCloudinary(blogDetails.imagePath);
        const blogResponse = await Blog.create({
            title : blogDetails.title,
            content : blogDetails.content,
            author : blogDetails.author,
            imageURL,
            tags : blogDetails.tags && blogDetails.tags.split(" ")
        });
        // blog is create now we need to add its _id to user.blogs to keep track of users blog with help of  provied email by the user
        const response = await User.findOneAndUpdate(
            {email : blogDetails.email},
            { $push: { blogs : blogResponse._id } },
            { new: true } 
        );
        const imagePath = "./"+ blogDetails.imagePath;
        deleteImage(imagePath);
        return {
            success : true,
            message : "blog uploaded successfully",
            blogResponse
        }
    }
    catch(error)
    {
        console.log(error);        
        throw new Error(error);
    }
}
/*************  ✨ Codeium Command ⭐  *************/
/**
 * @description reads all the blogs from database and also provides the metadata of next and previous page
 * @param {Object} req - request object
 * @param {String} req.params.page - page number to read the blogs from
 * @returns {Object} - response object containing blogs, pre and next metadata
 */
/******  053d8f7e-bf3f-4e9f-91b9-742efe8d9980  *******/
const readBlogs =async (req)=>{
    const curPage = req.params.page || 1;
    const skip = (curPage - 1) * 10;
    try{
        const blogs = await Blog.find() //.skip(skip).limit(10);
        const totalCount = await Blog.countDocuments();
        const totalPages = Math.ceil(totalCount / 10);
        const pre = curPage > 1 && curPage-1<=totalPages;
        const next = totalPages>curPage;
        const response ={
            success : true,
            blogs,
            pre,
            next
        }
        return response;
    }
    catch(error){
        console.log(error);
        return new Error(error);
    }
}
const getBlogByID =async (id)=>{
    try{
        const blog = await Blog.findById(id);
        const response ={
            success : true,
            blog
        }
        return response;
    }
    catch(error){
        console.log(error);
        return new Error(error);
    }
}
const updateBlog = async (blogDetails)=>{
    try{
        const blog = await Blog.findById(blogDetails._id);
        if(blogDetails.imagePath)
        {
            const imageURL = await  uploadToCloudinary(blogDetails.imagePath);
            const prevURL = blog.imageURL;
            removeFromCloudinary(prevURL)
            const imagePath = "./"+ blogDetails.imagePath;
            deleteImage(imagePath);
            blogDetails.imagePath =null;
            blogDetails.image = null;
            blogDetails.imageURL=imageURL
        }
        if(blogDetails.tags)
        {
            blogDetails={...blogDetails,tags:blogDetails.tags.split(" ")}
        }
        const blogResponse = await Blog.findByIdAndUpdate(blogDetails._id,{$set : blogDetails },{new : true});
        return {
            success : true,
            blogResponse,
            message : "successfully added blog to server"
        }
    }
    catch(error)
    {
        console.log(error);        
        throw new Error(error);
    }
}
const deleteBlog = async (blogDetails)=>{
    try {
        //here implement the logic to remove the blog id from the user's list
        const result = await User.updateOne(
            { _id: blogDetails.userId }, // Find the user by ID
            { $pull: { blogs: blogDetails.blogId } } // Remove the specific blog ID from the blogs array
          );
          if (Object.keys(result).length<=0) {
            return {
              success: false,
              message: "User not found",
            };
          }
        let blog = await Blog.findById(blogDetails.blogId);
        if (Object.keys(blog).length<=0) {
          return {
            success: false,
            message: "Blog not found",
          };
        }
        await removeFromCloudinary(blog.imageURL);
        blog = await Blog.findByIdAndDelete(blogDetails._id);
        return {
          success: true,
          message: "Blog deleted successfully",
          data: blog,
        };
      } catch (error) {
        console.error(error);
        return {
          success: false,
          message: "Error deleting blog",
          error: error.message,
        };
      }
}
const removeBlogFromUser = async (userId, blogId) => {
    try {
      
  
      if (result.modifiedCount > 0) {
        console.log(`Successfully removed blog with ID: ${blogId} from user ${userId}.`);
      } else {
        console.log(`No changes made. Either the user or blog ID does not exist.`);
      }
    } catch (error) {
      console.error("Error removing blog from user's blog list:", error);
    }
  };
module.exports={
    createBlog,
    readBlogs,
    updateBlog,
    deleteBlog,
    getBlogByID
}