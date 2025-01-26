const dotenv = require('dotenv');
dotenv.config(); //method for starting the .env in the local mission temporarilty

// Here we are exporting all the env variables that the project uses
module.exports = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    JWT_SECRET_KEY : process.env.JWT_SECRET_KEY,
    CLOUDINARY_NAME : process.env.CLOUDINARY_NAME,
CLOUDINARY_KEY : process.env.CLOUDINARY_KEY,
CLOUDINARY_SECRET : process.env.CLOUDINARY_SECRET,
GLOBAL_ID :process.env.GLOBAL_ID,
}

//Eshwar@1617 eshwar // username and pass

// JWT_SECRET: process.env.JWT_SECRET,
// JWT_EXPIRY: process.env.JWT_EXPIRY,
// CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
// CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
// CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
// FRONTEND_URL: process.env.FRONTEND_URL,
// COOKIE_SECURE: process.env.COOKIE_SECURE,