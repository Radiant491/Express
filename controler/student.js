const StudentSchema = require("../model/schema")
const Demo = require("../model/registerschema")
const Insert= async(req,res)=>{
try{
   const {name,email,phone,age,address}=req.body;

   let checkphone = await StudentSchema.findOne({phone})
   if(checkphone){
    console.log("phone  number alredy exists try another number")
    return res.status(404).json({error:"phone number alredy exists"})
   }else{

   const data = await new StudentSchema({name,email,phone,age,address})
   const save = await data.save()
   console.log("Inserted Successfully")
   res.send({"Inserted Successfully":true,save})
   }
}
catch(error){
    console.log("Error Occured",error)
    res.status(500).json("some internal error")
}
}
const View = async(req,res)=>{
    try{
       const data = await StudentSchema.find()
       console.log(data)
       res.json(data)
    }catch(error){
        console.log("Error Occured",error)
        res.status(500).json("some internal error")
    }
}
const Delete = async(req,res)=>{
    try {
        let data = await StudentSchema.findById(req.params.id) 
        if(!data){
            console.log("data is not found")
            return res.status(404).send("data not exists")
        }else{
            data = await StudentSchema.findByIdAndDelete(req.params.id)
        console.log("data deleted successfully")
        res.json({"success":"sucessfully","deleted data":data})
    }
    } catch (error) {
        console.log("Error Occured",error)
        res.status(500).json("some internal error")
    }
}
const Update = async(req,res)=>{
    const{name,email,phone,address,age}=req.body;
    try {
        const newdata={}
        if (name)[newdata.name=name]
        if (email)[newdata.email=email]
        if (phone)[newdata.phone=phone]
        if (address)[newdata.address=address]
        if (age)[newdata.age=age]
        let data = await StudentSchema.findById(req.params.id);
        if(!data){
            console.log("data is not found")
        return res.status(404).send("data not exists")
        }else{
            data = await StudentSchema.findByIdAndUpdate(req.params.id,{$set:newdata})
    console.log("data updated successfully")
    res.json({"success":"sucessfully","updated data":data}) 
        }
    
    } catch (error) {
        console.log("Error Occured",error)
    res.status(500).json("some internal error")
    }
}

//Register

const Register = async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        let mail = await Demo.findOne({email})
        if(mail){
         console.log("email alredy exists try another email")
         return res.status(404).json({error:"email alredy exists"})
        }else{
     
        const data = await new Demo({name,email,password})
        const save = await data.save()
        console.log("Inserted Successfully")
        res.send({"Inserted Successfully":true,save})
        }
     }
     catch(error){
         console.log("Error Occured",error)
         res.status(500).json("some internal error")
     }
}

module.exports={Insert,View,Delete,Update,Register};