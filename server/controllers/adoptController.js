const{ postApplication ,editApplication,getApplication} = require('../services/adoptService.js')
const adoptApplication = async (req,res)=>{
    try{
        const application = await postApplication(req.body);
        if(!application.success)
            return res.status(401).json(application);
        return res.status(201).json(application);
    }catch(error)
    {
        console.log(error);
        res.status(501).json({
            success : false,
            message : "some error at the server",
            error
        })
    }
}
const adoptResponse = async (req,res)=>{
    try{
        const application = await editApplication(req.body);
        if(!application.success)
            return res.status(401).json(application);
        return res.status(201).json(application);
    }catch(error)
    {
        console.log(error);
        res.status(501).json({
            success : false,
            message : "some error at the server",
            error
        })
    }
}
const getForm = async (req,res)=>{
    try{
        const application = await getApplication(req.params.id);
        if(!application.success)
            return res.status(401).json(application);
        return res.status(201).json(application);
    }catch(error)
    {
        console.log(error);
        res.status(501).json({
            success : false,
            message : "some error at the server",
            error
        })
    }
}
module.exports={adoptApplication,adoptResponse,getForm};