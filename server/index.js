//imports
const express = require('express');
const config = require('./configs/serverConfig');
const connectDB = require("./configs/dbConfig")
const authRouter = require("./routes/authRouter");
const adoptRouter = require("./routes/adoptRouter.js");
const blogRouter = require("./routes/blogRouter");
const orphanageRouter = require("./routes/orphanageRouter");
const donateRouter = require("./routes/donateRouter.js");
const childRouter = require("./routes/childRouter");
const multer = require('multer');
const cookieParser = require('cookie-parser');
const uploadIfExist = require('./Middlewares/multerMiddleware.js');
const handleDonationToAllOrphanages = require('./utils/handleDonationToAllOrphanages.js')
const upload = multer();   //use multer for form-data
//app
const app = express();

//middlewares


app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
// app.use(upload.none());
//routers
app.use("/auth",upload.none(),authRouter);
app.use("/blogs",blogRouter);
app.use("/orphanage",uploadIfExist,orphanageRouter);
app.use("/child",uploadIfExist ,childRouter);
app.use("/adopt",uploadIfExist ,adoptRouter);
app.use("/donate",uploadIfExist,donateRouter);

//starting the server
app.listen(config.PORT,async ()=>{
    await connectDB();
    console.log("App started at port",config.PORT);
})
// setInterval(handleDonationToAllOrphanages, 1000*);
setInterval(handleDonationToAllOrphanages, 24 * 60 * 60 * 1000);




// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//test router
app.use("/ping",(req,res)=>{
    console.log(req.body)
    res.status(200).json({
        message : "pong"
    })
})
app.get("/",(req,res)=>{
    res.status(200.).json({
        message : "Welcome to hope bridge"
    })
})
app.use("*",(req,res)=>{ //it will be called if the path is incorrect
    res.status(404).json({
        message : "bad request",
        status : false
    })
})