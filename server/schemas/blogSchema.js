const blogSchema = new mongoose.Schema({
  title: { 
    type: String,
    required: true 
},
  content: { type: String,
    required: true 
},
  author: { type: String,
    required: true 
},
  tags: [{ type: String }],
  createdAt: { type: Date,
    default: Date.now 
},
  updatedAt: {
    type: Date, 
    default: Date.now 
},
});

const blog=mongoose.model("Blog", blogSchema);
module.exports = blog;

