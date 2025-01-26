const mongoose = require('mongoose');
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
  imageURL : {
    type : String,
    required : true
  },
  updatedAt: {
    type: Date, 
    default: Date.now 
},
});

const Blog=mongoose.model("Blog", blogSchema);
module.exports = Blog;

