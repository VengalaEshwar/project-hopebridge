const User = require("../schemas/user.js");
const Orphanage = require("../schemas/orphanageSchema.js");
const {JWT_SECRET_KEY} = require("../configs/serverConfig.js")
const {generateToken} = require('../utils/jwt.js')
const argon2 = require("argon2");
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
      success : true
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
            messsage : "login successfull",
            JWT_TOKEN : token,
            userData :{
               name: user.name,
                email,
                phone,
                role
            },
            success : true
        }
    }catch (error) {
        console.log(error);
        throw new Error(error);
      }
}
module.exports = {
  createUser,
  authenticateUser,
};
