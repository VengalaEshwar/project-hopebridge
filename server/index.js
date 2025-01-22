//imports
const express = require('express');
const config = require('./configs/serverConfig');
const connectDB = require("./configs/dbConfig")
const authRouter = require("./routes/authRouter");
const blogRouter = require("./routes/blogRouter");
const multer = require('multer');
const upload = multer();   //use multer for form-data
//app
const app = express();

//middlewares

// app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(upload.none());

//routers
app.use("/auth",authRouter);
app.use("/blog",blogRouter);



//starting the server
app.listen(config.PORT,async ()=>{
    await connectDB();
    console.log("App started at port",config.PORT);
})





// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//test router
app.post("/ping",(req,res)=>{
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