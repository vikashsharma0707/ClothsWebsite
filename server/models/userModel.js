const mongoose= require("mongoose");
const userSchema=new mongoose.Schema({
    name:String,
    address:String, 
    city: String,
    pin:Number,
    mobile: String,
    product:String,
    price:Number

})
module.exports= mongoose.model("customer", userSchema);