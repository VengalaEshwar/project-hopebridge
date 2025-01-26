const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String,
     required: true,
      unique: true 
  },
  imageURL :{
    type : String,
    required : false
  },
  password: { type: String,
     required: true 
  },
  role: { type: String, 
    enum: ["donor", "adopter", "admin"],
    default: "donor" 
  },
  blogs : [{ type : mongoose.Schema.Types.ObjectId,
    ref: "Blog",
    required: false,}]
  ,
  phone : {
    type : Number,
    required : true
  },
  applications :[{type : mongoose.Types.ObjectId, ref : "Adoption"}],
  preferences: {
    age: { type: Number,
      required: false
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: false,
    },
    location: { type: String, required: false },
  },
  amountDonated : {
    type : Number,
    default : 0
  },
  createdAt: { type: Date, default: Date.now },
  transactions: [{ type: mongoose.Types.ObjectId , default: Date.now }],
},
{ timestamps: true });
const User = mongoose.model("User", userSchema);
module.exports = User;
