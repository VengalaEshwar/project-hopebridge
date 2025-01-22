const {createBlog} = require('../services/blogService.js');
const postBlog = async (req,res)=>{
    const blog = createBlog(req.body);

}
module.exports={
    postBlog
}