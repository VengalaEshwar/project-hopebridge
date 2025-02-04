const mongoose = require("mongoose");
const orphanageSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
},
  imageURL :{
    type : String,
    required : true
  },
  location: { 
    type: String,
    required: true
 },
  description: { 
    type: String, 
    required: true
 },
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: "Child" }],
  email: { 
    type: String,
    required: true
},
  yoe : {
    type : Number,
    required : true
  },
  phone: { 
    type: String, 
    required: true 
},
  password: { 
    type: String, 
    required: true 
},
amountReceived : {
  type : Number,
  default : 0
},
applications :[{type : mongoose.Types.ObjectId, ref : "Adoption"}],
gallery : [{type : mongoose.Schema.Types.ObjectId,required : false , ref : "gallery"}],
transactions : [{type : mongoose.Schema.Types.ObjectId,required : false , ref : "transaction"}],
  createdAt: { type: Date, default: Date.now },
});
const orphanage = mongoose.model("Orphanage", orphanageSchema);
module.exports = orphanage;
