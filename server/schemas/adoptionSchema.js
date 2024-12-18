const adoptionSchema = new mongoose.Schema({
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
  adoptionDate: { type: Date, required: false },
  notes: { type: String, required: false },
});

const adoption = mongoose.model("Adoption", adoptionSchema);
module.exports = adoption;
