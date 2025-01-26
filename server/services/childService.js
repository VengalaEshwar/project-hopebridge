const Child = require('../schemas/childSchema');
const Orphanage = require('../schemas/orphanageSchema');
const {uploadToCloudinary,removeFromCloudinary} = require("../utils/cloudinary");
const {deleteImage} = require("../utils/deleteImage");
const createChild = async (data)=>{
    try{
            const imageURL = await uploadToCloudinary( data.imagePath);
            const imagePath = "./"+ data.imagePath;
            deleteImage(imagePath);
            const child = await Child.create({
                    name : data.name,
                    dob : data.dob,
                    gender : data.gender,
                    imageURL,
                    description : data.secription,
                    orphanage : data.orphanageID
            });
            if(Object.keys(child).length<=0)
                return {
                    success : false,
                    message : "unable to create the child"
                }
            const orphanage = await Orphanage.findByIdAndUpdate(
                data.orphanageID, 
                { $push: { children: child._id } }, 
                { new: true }
            );
            if(Object.keys(orphanage).length<=0)
                return {
                    success : false,
                    message : "unable to add children to orphanage"
                }
            return {
                success : true,
                message : "created child and added to specific orphanage",
                child
            }
    }catch(error)
    {
        console.log(error);
        throw new Error(error);
    }
}
const readChild = async (req)=>{
    const curPage = req.params.page || 1;
    const skip = (curPage - 1) * 10;
    try{
        const children = await Child.find().skip(skip).limit(10);
        const totalCount = await Child.countDocuments();
        const totalPages = Math.ceil(totalCount / 10);
        const pre = curPage > 1 && curPage-1<=totalPages;
        const next = totalPages>curPage;
        const response ={
            success : true,
            children,
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
const readSingleChild = async (childID)=>{
    try{
        const child = await Child.findById(childID);
        if(child==null || Object.keys(child).length<=0 )
            return {
                success : false,
                message : "try again to fetch or may be incorrect childID"
            }
        return {
            success : true,
            message : "Read child sucessful",
            child
        }   
    }catch(error)
    {
        console.log(error);
        throw new Error(error);
    }
}
const updateChild = async (data)=>{
    try{
        const child = await Child.findById(data._id);
        if(data.imagePath)
        {
            const imageURL = await  uploadToCloudinary(data.imagePath);
            console.log(imageURL);
            const prevURL = child.imageURL;
            removeFromCloudinary(prevURL)
            const imagePath = "./"+ data.imagePath;
            deleteImage(imagePath);
            data.imagePath =null;
            data.image = null;
            data.imageURL=imageURL
        }
        const childResponse = await Child.findByIdAndUpdate(data._id,{$set : data },{new : true});
        return {
            success : true,
            childResponse,
            message : "successfully added child to server"
        }
    }
    catch(error)
    {
        console.log(error);        
        throw new Error(error);
    }
}
module.exports={
    createChild,
    readChild,
    readSingleChild,
    updateChild,
};