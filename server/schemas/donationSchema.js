const mongoose = require('mongoose');
const donationSchema = new mongoose.Schema({
  donor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  donationType: { type: String, enum: ["global", "specific"], required: true },
  orphanage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Orphanage",
    required: false,
  },
  date: { type: Date, default: Date.now },
  transactionId: {  type: mongoose.Schema.Types.ObjectId, ref: "transaction", required: false }, // For tracking payment 
  comments : {type : String,required: false}
});

const Donation= mongoose.model("Donation", donationSchema);
module.exports = Donation; 
