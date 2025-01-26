const Orphanage = require("../schemas/orphanageSchema");
const { uploadToCloudinary,removeFromCloudinary} = require('../utils/cloudinary');
const {deleteImage} = require('../utils/deleteImage');
const Gallery = require('../schemas/gallerySchema');
const argon2 = require("argon2");
const createOrphanage = async (data) => {
 try{
    const isExist = await Orphanage.findOne({
       $or: [{ email: data.email }, { phone: data.phone }],
    });
    if (isExist!=null)
      return {
        success: false,
        message: "orphanage already exist with given mail or mobile",
      };
      data.password = await argon2.hash(data.password);
    const orphanageResponse = await Orphanage.create(data);
    return orphanageResponse;
 }catch(error)
 {
    console.log(error);
    throw new Error(error);
 }
};
const readOrphanage = async (data) => {
  try{
    const orphanageDetails = await Orphanage.findById(data.id);
  if (!orphanageDetails)
    return {
      success: false,
      message: "bad request may be invalid data please register as orphanage",
    };
  return {
    success: true,
    message: "orphange details are read",
    orphanageDetails,
  };
  }catch(error)
  {
     console.log(error);
     throw new Error(error);
  }
};
const updateOrphanage = async (data) => {
  try{
    if(Object.keys(data).length === 0)
        return  {
            status : false,
            message : `Invalid input`
        }
  const isExist = await Orphanage.findOne({$or: [{ email: data.email }, { phone: data.phone }]});
  if(isExist!=null) {
    let val="";
    if(isExist.email==data.email && isExist.phone==data.phone) 
        val= "email and phone"
    else if(isExist.email==data.email)
        val="email"
    else val="phone"
    return {
        status : false,
        message : `unsuccesful ${val} already exist`
    }
  }
  if(data.imagePath)
  {
    const orphanage = await Orphanage.findById(data.id);
    const imageURL = orphanage.imageURL;
    if(imageURL) //it means image is present delete that image from cloudinary
    {
        await removeFromCloudinary(imageURL);
    }
    const path="./"+ data.imagePath;
    data.imageURL=await uploadToCloudinary(path);
    if(data.imagePath!=null)
    {
      deleteImage(data.imagePath);
      data.imagePath=null;
    }
  }
  const orphanage = await Orphanage.findByIdAndUpdate(data.id,{$set : data},{new : true});
  return {
    success : true,
    message  : "successfully updated the orphanage",
    orphanage
  }
  }catch(error)
  {
     console.log(error);
     throw new Error(error);
  }
};
const postPhoto = async (data) => {
  try {

    // Validate input
    if (Object.keys(data).length === 0) {
      return {
        status: false,
        message: `Invalid input`,
      };
    }

    // Find the orphanage by ID
    const orphanage = await Orphanage.findById(data.orphanageID);
    if (!orphanage) {
      return {
        status: false,
        message: `Orphanage not found. Try again.`,
      };
    }

    // Upload the image to Cloudinary
    const path = "./" + data.imagePath;
    data.imageURL = await uploadToCloudinary(path);

    // Delete local image if successfully uploaded
    if (data.imagePath) {
      await deleteImage(data.imagePath);
      data.imagePath = null;
    }

    // Create a new photo entry in the gallery
    const addedPhoto = await Gallery.create({
      orphanage: orphanage._id,
      imageURL: data.imageURL,
    });

    // Update the orphanage with the new photo reference
    const updatedOrphanage = await Orphanage.findByIdAndUpdate(
      data.orphanageID,
      { $push: { gallery: addedPhoto._id } },
      { new: true }
    );

    return {
      success: true,
      message: "Successfully updated the orphanage",
      orphanage: updatedOrphanage,
    };
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while adding the photo");
  }
};

module.exports = {
  createOrphanage,
  readOrphanage,
  updateOrphanage,
  postPhoto
};