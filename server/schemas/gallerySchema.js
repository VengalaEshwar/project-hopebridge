const mongoose = require("mongoose");

const gallerySchema = mongoose.Schema({
    orphanage : {
        type : mongoose.Types.ObjectId,
        required : true
    },
    imageURL : {
        type : String,
        required : true
    }
})

const Gallery = mongoose.model("gallery",gallerySchema);
module.exports=Gallery;