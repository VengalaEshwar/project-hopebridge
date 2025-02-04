const Donation = require('../schemas/donationSchema');
const Global = require('../schemas/Global');
const User = require('../schemas/user');
const Orphanage = require('../schemas/orphanageSchema');  //GLOBAL_ID
const Transaction = require('../schemas/transactionSchema')
const {GLOBAL_ID} = require('../configs/serverConfig');
const postDonation = async (data)=>{
    try{    
        if(data.donationType==='specific')
        {
            //here handling of payment should be happend but to reduce the complexity it has been removed 
            //add money into the orphanage account
            let orphanage = await Orphanage.findByIdAndUpdate(data.orphanageId,{$inc : {amountReceived : data.amount}});
            //add money to donatedamount in user account
            let user =await User.findByIdAndUpdate(data.userID,{$inc : {amountDonated : data.amount}});
            const transaction =await Transaction.create({
                credit : orphanage?._id,
                debit : user._id,
                note : data.comments,
                amount : data.amount
            });
            orphanage = await Orphanage.findByIdAndUpdate(data.orphanageId,{$push : {transactions : transaction._id}});
            user =await User.findByIdAndUpdate(data.userID,{$push : {transactions : transaction._id}});
            const donation = await Donation.create({
                donor : data.userID,
                amount : data.amount,
                orphanage :data.orphanageId,
                transactionID :  transaction._id,
                comments : data.comments,
                donationType : data.donationType
            });
            if(Object.keys(donation).length<=0 || Object.keys(transaction).length<=0 )
                return {
                    success : false,
                    message : "unsuccess amount donated to orphanage",
            }
            return {
                success : true,
                message : "successfully amount donated to orphanage",
                transaction
            }
        }
        else
        {
            let user =await User.findByIdAndUpdate(data.userID,{$inc : {amountDonated : data.amount}});
            let global =await Global.findByIdAndUpdate(GLOBAL_ID,{$inc : {balance : data.amount}});
            const transaction =await Transaction.create({
                credit : GLOBAL_ID,
                debit : user._id,
                note : data.comments,
                amount : data.amount
            });
            user =await User.findByIdAndUpdate(data.userID,{$push : {transactions : transaction._id}});
            const donation = await Donation.create({
                donor : data.userID,
                amount : data.amount,
                orphanage :GLOBAL_ID,
                transactionID :  transaction._id,
                comments : data.comments,
                donationType : data.donationType
            });
            if(Object.keys(donation).length<=0 || Object.keys(transaction).length<=0 )
                return {
                    success : false,
                    message : "unsucess amount donated globally",
            }
            return {
                success : true,
                message : "successfully amount donated globally",
                transaction
            }
        }
    }catch(error)
    {
        console.log(error);
        throw new Error(error);
    }
}
const getTransactionService=async (data)=>{
    try{
        const transaction =await Transaction.findById(data);
        if(Object.keys(transaction).length<=0 )
            return {
                success : false,
                message : "failed to fetch transaction",
        }
        return {
            success : true,
            message : "successfully fetched the transaction",
            transaction
        }
    }catch(e)
    {
        console.log(error);
        throw new Error(error);
    }
}
module.exports={postDonation,getTransactionService} ;