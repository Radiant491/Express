const express = require('express')
const {Hello, hi, add,sub,mul,div} = require('./demo')
const connectToMongo = require('./db')
const Myschema = require('./model/crud')
const app = express()
app.use(express.json())
app.get('/first',(req,res)=>{
    console.log("whatever API")
    res.send("response sending to me")
})

app.get('/second',(req,res)=>{
    const Students = [
        {"ID" : "1" ,
         "Name" : "Roman",
         "Grade" : "A"
    }
        ]
        res.send(Students)
})
app.get('/third',(req,res)=>{
    const a = [new Date().toLocaleTimeString() ,
    new Date().toLocaleDateString()]
    res.send(a)
})
app.post('/api/insert',async(req,res)=>{
    try{
        const{name,email,phone,address}=req.body;
        const data = new Myschema({name,email,phone,address})
        const save = await data.save()
        console.log("Inserted Successfully")
        res.send({"Inserted Successfully":true,save})
    }
    catch(error){
        console.log("Error Occured",error)
        res.status(500).json("some internal error")
    }
})
app.use('/api/student',require('./Router/studentrouter'))



port = 7001
Hello()
hi("roystan")
add()
sub()
mul()
div()
connectToMongo()
Myschema()
app.listen(port,()=>
{
 console.log("Api Connected port " +port) //$port

})