const mongoose = require('mongoose');
const globalSchema = mongoose.Schema({
    balance : {
        type : Number,
        default : 0
    },
    totalAmount : {
        type : Number,
        default : 0
    }
})
const Global = mongoose.model("global",globalSchema);
module.exports=Global;