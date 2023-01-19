const express=require("express")
const Product=require("./product.model");

const app=express.Router()


app.get("/", async(req,res)=>{
  const {limit=10,page=1}=req.query
  try {
    let product=await Product.find().limit(limit).skip((page-1)*limit)
  res.send(product)

  } catch (error) {
    res.send(error.message)
    
  }
})









module.exports=app