const express = require('express')
const {verifyToken} = require("../utils/jwt");
const isLogin= (req,res,next)=>{
    try{
        const jwt_token = req.cookies["JWT_TOKEN"];
        console.log(req.cookies)
        if(!jwt_token)
            {
                console.log("not logged in");
                return res.json({
                    success : false,
                    message : "Unauthorised access please login"
                });
            }
        const isValid = verifyToken(jwt_token);
        if(!isValid)
        {
            console.log("not valid token");
            return res.json({
                success : false,
                message : "Token is not valid,please login to continue"
            })
        }
        req.verifiedUser=isValid.role;
        next();
    }
    catch(error)
    {
        console.log(error);
        return res.status(501).json({
            success : false,
            message : "error occurred",
            error
        })
    }
}
const isOrphanage = (req,res,next)=>{
    if(req.verifiedUser!=='orphanage')
        return res.status(401).json({
            success : false,
            message : "Unauthorised access to access the data"
        });
    next();
}
const isUser = (req,res,next)=>{
    if(req.verifiedUser!=='user')
        return res.status(401).json({
            success : false,
            message : "Unauthorised access to access the data"
        });
    next();
}
module.exports={
    isLogin,
    isOrphanage,
    isUser
}