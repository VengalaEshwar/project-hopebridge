//imports
const express = require('express');
const config = require('./configs/serverConfig');
const connectDB = require("./configs/dbConfig")
//app
const app = express();

//middlewares

// app.use(cookieParser());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

//starting the server
app.listen(config.PORT,async ()=>{
    await connectDB();
    console.log("App started at port",config.PORT);
})

app.get("ping",tempRouter)
