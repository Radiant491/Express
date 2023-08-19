const mongoose = require("mongoose")
const {Schema} = mongoose
const Myschema = new Schema({

    name:{
        type: String,
        require: true
    },
    email:{
        type:String,
        unique:true
    },
    phone:{
        type:Number
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        require:false
    },
    address:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})
module.exports = mongoose.model("student",Myschema)
