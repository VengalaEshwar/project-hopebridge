const mongoose = require('mongoose');
const transactionSchema = mongoose.Schema({
    credit : {type : mongoose.Schema.ObjectId ,ref : "orphanage",required : true},
    debit : {type : mongoose.Schema.ObjectId ,ref : "user",required : true},
    transactionDate : {type : Date,default : Date.now},
    note : {type : {type : String , required : false}}
});

const Transaction = mongoose.model("transaction",transactionSchema);
module.exports=Transaction;