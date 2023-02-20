const mongoose=require('mongoose');
require("dotenv").config();


const connetion=mongoose.connect(process.env.MONOG_URL)
module.exports=connetion;