const cloudinary = require('cloudinary').v2;
const {CLOUDINARY_NAME,CLOUDINARY_KEY,CLOUDINARY_SECRET} = require('./serverConfig')
cloudinary.config({ 
  cloud_name: CLOUDINARY_NAME,    // Cloudinary cloud name
  api_key: CLOUDINARY_KEY,         // Cloudinary API key
  api_secret: CLOUDINARY_SECRET    // Cloudinary API secret
});

module.exports = cloudinary;
