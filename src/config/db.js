const mongoose=require("mongoose")

const main=async()=>{
    return await mongoose.connect("mongodb://127.0.0.1:27017/masaizon20",{ useNewUrlParser: true, useUnifiedTopology: true })
    console.log("conneted")
    conn.disconnect()
}

module.exports=main
