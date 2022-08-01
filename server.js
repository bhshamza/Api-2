const express = require ('express');
const app = express();
//const mongoose = require('mongoose')
app.use(express.json())
const connectDB = require('./config/connectDB')

const port=process.env.port
connectDB()
app.use('/newuser',require("./routes/userRoutes"))
app.listen(5000,()=>{
    console.log(`runing on port 5000`)
}) 