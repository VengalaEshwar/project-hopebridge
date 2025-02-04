const {postDonation,getTransactionService} = require('../services/donateService.js');
const donateController = async (req,res)=>{
    try{
        const donation = await postDonation(req.body);
        if(!donation.success)
            return res.status(401).json(donation);
        return res.status(201).json(donation);
    }catch(error){
        console.log("Im here")
        console.log(error);
        res.status(501).json({
            success : false,
            message : "some error occurred",
            error
        })
    }
}
const getTransaction = async (req,res)=>{
    try{
        const donation = await getTransactionService(req.params.id);
        if(!donation.success)
            return res.status(401).json(donation);
        return res.status(201).json(donation);
    }catch(error){
        res.status(501).json({
            success : false,
            message : "some error occurred",
            error
        })
    }
}
module.exports={donateController,getTransaction};