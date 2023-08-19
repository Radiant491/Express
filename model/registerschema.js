const mongoose = require("mongoose")
const {Schema} = mongoose
const Demo = new Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        unique:true
    }
})
module.exports = mongoose.model("register",Demo)

