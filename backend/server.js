const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config();

mongoose.connect(process.env.URI).then(()=>{
    console.log("connection successfuly")
    app.listen(process.env.PORT || 8000 , (err)=>{
        if(err) console.log(err);
        console.log("running successfuly at " , process.env.PORT)
    })
}).catch((error)=>{
    console.log("error" , error)
})
app.get("/", (req,res)=>{
    res.send("api running")
})
