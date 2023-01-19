
require("dotenv").config();
const PORT=process.env.PORT
console.log(PORT)
const mongoose=require("mongoose")
const express=require("express")
const cors=require("cors")
const app=express()

const main=require("./src/config/db")
//console.log(connect)
app.use(express.json())
app.use(cors())

//console.log(POR)



const userRoute=require("./src/features/user/user.router")

const productRoute=require("./src/features/product/product.router")

const cartRoute=require("./src/features/cart/cart.router")

app.use("/users",userRoute)
app.use("/products",productRoute)
app.use("/carts",cartRoute)


app.listen(PORT,async()=>{
    try{
       await main()
   
    }catch(e){
   console.log(e.message)
    }
   
       console.log(`port running on http://localhost:${PORT}`)
   })

   // mongoimport --drop --db masaizon --collection users --file ./users.json --jsonArray
   // {
  
  
  //"name": "naio",
  
  //"email": "sdominique0@usda.gov",
 // "password": "male",

 // "age": 37
//   }{

  //"quantity":5,
  //"user":"634b8b2b0a11c9f0e75d6fba",
  //"product":"634b92bafbebc4dec1d9ef92"
  //}