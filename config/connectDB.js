const mongoose = require('mongoose')
//require('dotenv'.config({path:'./.env'}))
//require('dotenv').config()
//MONGO_URI=process.env.MONGO_URI

const connectDB=()=>{
    mongoose.connect("mongodb+srv://saidahmed2210:sa79440677@mongosaid.dwskb.mongodb.net/?retryWrites=true&w=majority",(err)=>{
        if(err) throw err
        else console.log("database is connected")
    })
}
module.exports=connectDB