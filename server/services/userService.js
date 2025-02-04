const User = require("../schemas/user.js");
const Orphanage = require("../schemas/orphanageSchema.js");
const {JWT_SECRET_KEY} = require("../configs/serverConfig.js")
const {generateToken} = require('../utils/jwt.js')
const argon2 = require("argon2");
const Gallery = require("../schemas/gallerySchema.js");
const createUser = async (userDetails) => {
  try {
    const { email, phone, password } = userDetails;
    const isExist = await User.findOne({ $or: [{ email }, { phone }] });
    if (isExist) return { message: "user already exist please login",success : false };

    const encryPass = await argon2.hash(password);
    const userData = await User.create({
      ...userDetails,
      password: encryPass,
    });
    return {
      userData,
      success : true,
    };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
const authenticateUser = async(userDetails)=>{
    try{
        const { email, phone, password,role } = userDetails;
        const user = await (role==='user'?User:Orphanage).findOne({ $or: [{ email }, { phone }] }) ;
        if (!user) return { message: `${role} does not  exist please register` ,success:false};
        const encryPass = await argon2.verify(user.password,password); //hashedPass,orgPass
        if(!encryPass)
            return {message : "Password is Incorrect",success : false};
        //making a JWT_TOKEN
        const userData={
            name:user.name,phone,email,role
        }
        const token = generateToken(userData);
        return {
            message : "login successfull",
            JWT_TOKEN : token,
            userData :{
               name: user.name,
                email,
                phone,
                role,
                id : user._id
            },
            success : true
        }
    }catch (error) {
        console.log(error);
        throw new Error(error);
      }
}
const getUserById = async (id)=>{
  try{
    const user =await  User.findById(id);
    return user;
  }catch(e)
  {
    console.log(e);
    throw new Error(e);
  }
}
const getGalleryService = async ()=>{
  try{
    const gallery =await  Gallery.find();
    return gallery;
  }catch(e)
  {
    console.log(e);
    throw new Error(e);
  }
}
module.exports = {
  createUser,
  authenticateUser,
  getUserById,
  getGalleryService
};
