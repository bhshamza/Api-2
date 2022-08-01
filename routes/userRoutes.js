const express = require ('express');
const userSchema = require('../models/userSchema.js');
const router = express.Router()
const User = require ('../models/userSchema.js')

//GET 
router.get("/users", (req, res) => {
    User.find()
      .then((user) => res.send(user))
      .catch((err) => res.status(200).send(err));
  });

//add new person
router.post('/newuser',(req,res)=>{
    const {name,age,favoriteFoods}=req.body
    const newuser = new User({name,age,favoriteFoods})
    newuser
    .save()
    .then((user)=>res.send(user))
    .catch((err)=>res.status(404).send({msg:"cannot add person"}))
});

//update
router.put("/updateuser/:id",(req,res)=>{
    let userId=req.params.id
    User.findById(userId)
    .then
    User.findByIdAndUpdate(userId,{$set:{...req.body}},(err,res)=>{
        if(err){throw err}
        else{res.save()}
    })
    .then((userupdated)=>res.send(userupdated))
})
//delete
router.delete('/deleteuser/:id',(req, res)=>{
    User.findByIdAndDelete(req.params.id)
    .then((data)=>{
        if(!data){
            res.status(404).json({msg:"err ID not valid"})}else{res.status(200).json({msg:"user deleted"})}
        
    })
})

module.exports = router