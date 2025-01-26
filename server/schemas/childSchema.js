const mongoose = require('mongoose');
const childSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, enum: ["male", "female", "other"], required: true },
  dob : {type : Date,required  : true},
  status: {
    type: String,
    enum: ["available", "adopted"],
    default: "available",
  },
  description : {
    type : String,
    required : false
  },
  orphanage: { type: mongoose.Schema.Types.ObjectId, ref: "Orphanage" },
  bio: { type: String, required: false },
  imageURL: { type: String, required: true }, // URL for child photo
  addedAt: { type: Date, default: Date.now },
});

const child = mongoose.model("Child", childSchema);
module.exports = child;
