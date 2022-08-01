const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Schema prototype
const userSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    age:Number,
    favoriteFoods:String,
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model("User",userSchema)