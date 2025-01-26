const {createChild,readChild,readSingleChild,updateChild} = require('../services/childService.js');
const addChild = async (req,res)=>{
    try{
        const child = await createChild(req.body);
        if(!child.success)
            return res.status(401).json(child);
        return res.status(201).json(child);
    }
    catch(error){
        return res.status(501).json({
            success : false,
            message : "Some error occurred at backend",
            error : error
        });
    }
}
const getChild = async (req,res)=>{
    try{
        
        const children= await readChild(req);
        if(!children.success)
            return res.status(401).json(children);
        return res.status(201).json(children);
    }
    catch(error){
        console.log(error);
        return res.status(501).json({
            success : false,
            message : "Some error occurred at backend",
            error : error
        });
    }
}
const editChild = async (req,res)=>{
    try{
        const child = await updateChild(req.body);
        if(!child.success)
            return res.status(401).json(child);
        return res.status(201).json(child);
    }
    catch(error){
        return res.status(501).json({
            success : false,
            message : "Some error occurred at backend",
            error : error
        });
    }
}
const getSingleChild =  async (req,res)=>{
    try{
        const child = await readSingleChild(req.params.id);
        if(!child.success)
            return res.status(401).json(child);
        return res.status(201).json(child);
    }
    catch(error){
        return res.status(501).json({
            success : false,
            message : "Some error occurred at backend",
            error : error
        });
    }
}

module.exports={
    addChild,
    getChild,
    editChild,
    getSingleChild
};