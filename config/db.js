const mongoose=require("mongoose")
const connect=async ()=>{
    return mongoose.connect('mongodb+srv://r:lo@cluster0.1eeagss.mongodb.net/tree?retryWrites=true&w=majority',{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(console.log("connected to mongodb")).catch(err=>console.log(err))
}
module.exports=connect