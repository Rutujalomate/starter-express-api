mongoose= require("mongoose")
require("dotenv").config();

const connection = mongoose.connect('mongodb://127.0.0.1:27017/jkl')

module.exports={connection}