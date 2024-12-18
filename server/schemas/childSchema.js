const childSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["male", "female", "other"], required: true },
  status: {
    type: String,
    enum: ["available", "adopted"],
    default: "available",
  },
  orphanage: { type: mongoose.Schema.Types.ObjectId, ref: "Orphanage" },
  bio: { type: String, required: false },
  photo: { type: String, required: false }, // URL for child photo
  addedAt: { type: Date, default: Date.now },
});

const child = mongoose.model("Child", childSchema);
module.exports = child;
