const mongoose = require(`mongoose`)
const mongoURL = "mongodb://127.0.0.1:27017/crud"
//mongodb://localhost:27017/crud
const connectToMongo = async()=>{
    try {
    await mongoose.connect(mongoURL)
    console.log("Connected Mongoose Successfully")
}
catch(error){
    console.log("connected Mongo Unsuccessfull",error)
}}
module.exports=connectToMongo;
