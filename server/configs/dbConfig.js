const serverConfig = require("./serverConfig");
const mongoose = require("mongoose");
const connectDB = async ()=>{
    try{
        console.log(serverConfig.DB_URL);
        
        await mongoose.connect(serverConfig.DB_URL);
        
        console.log("Succesfully connected to database");
    }
    catch(e)
    {
        console.log(e,"unsuccesfull in connection with  database");
    }
}
module.exports=connectDB;

// , {
//     useNewUrlParser: true,  // Ensure compatibility
//     useUnifiedTopology: true, // Avoid deprecation warnings
//   }