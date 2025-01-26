const {createOrphanage,readOrphanage,updateOrphanage,postPhoto} = require('../services/orphanageService');
const registerOrphanage = async (req,res)=>{
    try{
        const orphanage = await createOrphanage(req.body);
        if(!orphanage.success)
            return res.status(401).json(orphanage)
        return res.status(201).json(orphanage);
    }catch(error)
    {
        return res.status(501).json({
            message : "Some error occurred at server",
            status : false,
            error
        })   
    }
}
const orphanageDetails = async (req,res)=>{
    try{
        const orphanage = await readOrphanage(req.body);
        if(!orphanage.success)
            return res.status(401).json(orphanage)
        return res.status(201).json(orphanage);
    }catch(error)
    {
        return res.status(501).json({
            message : "Some error occurred at server",
            status : false,
            error
        })   
    }
}
const editOrphanage = async (req,res)=>{
    try{
        const orphanage = await updateOrphanage(req.body);
        if(!orphanage.success)
            return res.status(401).json(orphanage)
        return res.status(201).json(orphanage);
    }catch(error)
    {
        return res.status(501).json({
            message : "Some error occurred at server",
            status : false,
            error
        })   
    }
}
const addPhoto = async (req,res)=>{
    try{
        const photo = await postPhoto(req.body);
        if(!photo.success)
            return res.status(401).json(photo)
        return res.status(201).json(photo);
    }catch(error)
    {
        return res.status(501).json({
            message : "Some error occurred at server",
            status : false,
            error
        })   
    }
}
module.exports={
    registerOrphanage,
    orphanageDetails,
    editOrphanage,
    addPhoto
}