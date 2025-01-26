const {postDonation} = require('../services/donateService.js');
const donateController = async (req,res)=>{
    try{
        const donation = await postDonation(req.body);
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
module.exports={donateController};