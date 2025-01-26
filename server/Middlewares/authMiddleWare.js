const express = require('express')
const {verifyToken} = require("../utils/jwt");
const isLogin= (req,res,next)=>{
    const jwt_token = req.cookies["JWT_TOKEN"];
    if(!jwt_token)
    {
        return res.status(401).json({
            success : false,
            message : "Unauthorised access please login"
        });
    }
    try{
        const isValid = verifyToken(jwt_token);
        if(!isValid)
        {
            return res.status(401).json({
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
module.exports={
    isLogin,
    isOrphanage
}