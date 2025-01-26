const adoption = require('../schemas/adoptionSchema');
const Adoption = require('../schemas/adoptionSchema');
const Orphanage = require('../schemas/orphanageSchema');
const User = require("../schemas/user");
const postApplication = async (data)=>{
    try{
    const orphanage = await Orphanage.findOne({
        $and: [
          { _id: data.orphanageID },
          { children: { $in: [data.childID] } } // Checks if childID exists in the children array
        ]
      });
      if(Object.keys(orphanage).length<=0)
        return {
        success : false,
        message : "invalid child or orphanage"
    }
    const application = await Adoption.create({
        name : data.name,
        email : data.email,
        mobile : data.mobile,
        adopter : data.userID,
        orphanage : data.orphanageID,
        child : data.childID,
        notes : data.notes
    });

      if(Object.keys(adoption).length<=0)
        return {
        success : false,
        message : "some error occurred in application try again"
    }
    const orphanageResponse = await Orphanage.findOneAndUpdate(
        {
          $and: [
            { _id: data.orphanageID },
            { children: { $in: [data.childID] } } // Check if childID exists in the children array
          ]
        },
        { $push: { applications: application._id } }, // Push application ID to the applications array
        { new: true } // Return the updated document
      );
      
      const userResponse = await User.findByIdAndUpdate(
        data.userID,
        { $push: { applications: application._id } }, // Push application ID to the applications array
        { new: true } // Return the updated document
      );
    return {
        success : true,
        message : "successfully submited",
        application
    }
    }
    catch(error)
    {
        console.log(error);
        throw new Error(error);
    }
}
const editApplication = async (data)=>{
    try{
        const response = await Adoption.findByIdAndUpdate(data.applicationID,{status : data.status},{new : true});
        return {
            success : true,
            message: "updated the application",
            response
        }
    }catch(error)
    {
        console.log(error);
        throw new Error(error);
    }
}
module.exports={postApplication,editApplication};