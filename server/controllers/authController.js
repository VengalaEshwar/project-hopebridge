const { createUser,authenticateUser } = require("../services/userService.js");
const signupUser = async (req, res) => {
  try {
    const response = await createUser(req.body);

    console.log(response);

    if (!response.success){
        return res.status(400).json(response);
    }

    return res.status(201).send({
      ...response,
      message: "User is created,please login",
    });

  } catch (error) {

    return res.status(405).json({
      message: "error occurred at signup,try again",
      error,
      success : false
    });

  }
};
const loginUser = async (req, res) => {
  try {
    const response = await authenticateUser(req.body);
    console.log(response);
    if(!response.success)
        return res.status(401).send(response)
    res.cookie('JWT_TOKEN', response.JWT_TOKEN, {
        httpOnly : true,
        // secure: process.env.NODE_ENV === 'production', // Ensure it's sent only over HTTPS in production
        maxAge: 3600000*24*7,  // Token expiration time (1 hour)
        sameSite: 'strict',  // Mitigates CSRF attacks
      });  
    return res.status(201).send(response);
  } catch (error) {
    console.log(error)
    return res.status(405).json({
      message: "error occurred at signup,try again",
      success : false,
      error,
    });
  }
};
const logoutUser = (req,res)=>{
    try{
        res.clearCookie('JWT_TOKEN', {
            httpOnly: true,  // Ensures it is not accessible via JavaScript
            secure: process.env.NODE_ENV === 'production', // Ensure it's sent only over HTTPS in production
            sameSite: 'strict',  // Mitigates CSRF attacks
            expires: new Date(0),  // Expire the cookie immediately by setting the expiration date to the past
          });
          return res.status(201).json({
            message : "logout success",
            success : true
          })
    }catch(error)
    {
        cosole.log(error);
        return res.status(501).json({
            message : "some error occurred",
            success : false,
            error
          })
    }

}
module.exports = {
  signupUser,
  loginUser,
  logoutUser
};
