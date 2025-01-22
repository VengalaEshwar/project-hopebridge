const User = require("../schemas/user.js");
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
        const { email, phone, password } = userDetails;
        const user = await User.findOne({ $or: [{ email }, { phone }] });
        if (!user) return { message: "user does not  exist please register" ,success:false};
        console.log("user pass :" ,user.password);
        const encryPass = await argon2.verify(user.password,password); //hashedPass,orgPass
        if(!encryPass)
            return {message : "Password is Incorrect",success : false};
        //making a JWT_TOKEN
        const userData={
            name:user.name,phone,email
        }
        const token = generateToken(userData);
        return {
            messsage : "login successfull",
            JWT_TOKEN : token,
            userData :{
               name: user.name,
                email,
                phone,
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
