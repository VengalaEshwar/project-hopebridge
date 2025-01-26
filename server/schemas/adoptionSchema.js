const mongoose = require('mongoose');
const adoptionSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true,
  },
  email : {
    type : String,
    required : true,
  },
  mobile : {
    type : String,
    required : true
  },
  adopter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  child: { type: mongoose.Schema.Types.ObjectId, ref: "Child", required: true },
  orphanage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Orphanage",
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  applicationDate: { type: Date, required: false ,default : Date.now},
  notes: { type: String, required: false },
});

const adoption = mongoose.model("Adoption", adoptionSchema);
module.exports = adoption;
