const orphanageSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
},
  location: { 
    type: String,
    required: true
 },
  description: { 
    type: String, 
    required: false
 },
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: "Child" }],
  contactInfo: {
    email: { 
        type: String,
        required: false 
    },
    phone: { 
        type: String, 
        required: false 
    },
  },
  createdAt: { type: Date, default: Date.now },
});
const orphanage = mongoose.model("Orphanage", orphanageSchema);
module.exports = orphanage;
