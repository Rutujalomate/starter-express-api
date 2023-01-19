const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
    
    name:{type:String, required:true},
    description:{type:String},
    image:{type:String},
    price:{type:Number ,required:true,min:1},
    quantity:{type:Number,required:true,min:0}

    
     
    })
     const Product=mongoose.model("product",productSchema)
     module.exports=Product