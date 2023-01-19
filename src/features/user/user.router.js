const express=require("express");
const { db } = require("./user.model");
const User=require("./user.model");

const app=express.Router()


app.post("/signup",async(req,res)=>{
    const {name,email,password,age}=req.body

    try{
        let exitingUser=await User.findOne({email})
        if(exitingUser){
            res.status(404).send("canot create user with existing email")
        }else{
            let user=await User.create({name,email,password,age})
    console.log(user)
    res.send(`token:${email}_#_${password}`)
        }

    }catch(e){
        res.send(e.message)
    }
    
})






app.post("/login",async(req,res)=>{
    const {email,password}=req.body
    console.log(email,password)

    try{
       let user=await User.findOne({email})
       //console.log(user)
       if(user){
        if(user.password===password){
            res.send({token:`${email}_#_${password}`,user})

        }
        else{
            res.status(404).send(` Athentication failed incorrect password`)
        }
       }else{
        res.status(404).send(`user with email ${email} not found`)

       }

    }catch(e){
        res.send(e.message)
    }
    
})









module.exports=app