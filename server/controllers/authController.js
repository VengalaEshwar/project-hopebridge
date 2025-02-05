const { createUser,authenticateUser } = require("../services/userService.js");
const signupUser = async (req, res) => {
  try {
    const response = await createUser(req.body);

    if (!response.success){
        return res.json(response);
    }

    return res.status(201).send({
      ...response,
      message: "User is created,please login",
    });

  } catch (error) {

    return res.status(404).json({
      message: "error occurred at signup,try again",
      error,
      success : false
    });

  }
};
const loginUser = async (req, res) => {  
  try {
    const response =  await authenticateUser(req.body);
    if(!response.success)
        return res.send(response)
    res.cookie('JWT_TOKEN', response.JWT_TOKEN, {
      httpOnly: true, // Prevents JavaScript access (security)
      secure: process.env.NODE_ENV === "production", // Secure cookies in production
      sameSite: "None", // Required for cross-origin requests
      path: "/",
    }); 
    return res.status(201).send(response);
  } catch (error) {
    console.log(error)
    return res.status(405).json({
      message: "error occurred at signup,try again",
      success : false,
      error : error.message,
    });
  }
};
const logoutUser = (req,res)=>{
    try{
      res.cookie('JWT_TOKEN',"", {
        httpOnly: true,  
        secure: false,  // Change to true in production (HTTPS)
        maxAge: 0,  // 7 days
        sameSite: 'lax'  // Use 'lax' instead of 'strict'
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
