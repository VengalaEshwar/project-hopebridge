const {getUserById,getGalleryService} = require("../services/userService");
const getUser = async (req,res )=>{
    try{
        const user = await getUserById(req.params.id);
        if(Object.keys(user).length<=0)
        {
            return res.send({
                message : "try again",
                success : false,
            });
        }
        return res.status(201).send({
            message : "user loaded",
            success : true,
            user
        });
    }catch(e)
    {
        return res.status(401).send({
            message : "error occurred in getting the user",
            success : false
        })
    }
} 
const getGallery = async (req,res )=>{
    try{
        const gallery = await getGalleryService();
        if(Object.keys(gallery).length<=0)
        {
            return res.send({
                message : "try again",
                success : false,
            });
        }
        return res.status(201).send({
            message : "gallery loaded",
            success : true,
            gallery
        });
    }catch(e)
    {
        return res.status(401).send({
            message : "error occurred in getting the user",
            success : false
        })
    }
} 
module.exports={
    getUser,
    getGallery
};