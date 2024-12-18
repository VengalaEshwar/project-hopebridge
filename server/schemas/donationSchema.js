const donationSchema = new mongoose.Schema({
  donor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ["global", "specific"], required: true },
  orphanage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Orphanage",
    required: false,
  },
  date: { type: Date, default: Date.now },
  transactionId: { type: String, required: false }, // For tracking payment
});

const donation= mongoose.model("Donation", donationSchema);
module.exports = donation; 
