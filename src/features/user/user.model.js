const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    email:{type:String, required:true,unique:true},
    password:{type:String, required:true},
    name:{type:String, required:true},
    age:{type:Number},
    
     },{
        versionKey:false,
        timestamps:true,
     bufferCommands: false,
  autoCreate: false 
    })
     const User=mongoose.model("user",userSchema)
     module.exports=User
