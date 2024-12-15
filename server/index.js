const express = require('express')
const app = express();
const config = require('./configs/serverConfig');
//listen methods start the server and run the code in the callback
app.listen(config.PORT,()=>{
    console.log(`Server started at port ${config.PORT}`);
});
