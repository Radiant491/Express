const Hello =() =>{
    const time = new Date().toLocaleTimeString()
    const date = new Date().toLocaleDateString()
    console.log("time: " +time)
    console.log("date: "+date)
}
const hi =()=>{
    const a = "Roystan"
    console.log("my name is " + a)
}
const add =()=>{
    const b = 44
    const c = 44
    console.log("addition :" +(+b + +c))
}
const sub =()=>{
    const d = 40
    const e = 45
    console.log("subtraction :" +(+d - +e))
}
const mul =()=>{
    const f = 44
    const g = 44
    console.log("multiplication :" +(+f * +g))
}
const div =()=>{
    const h = 44
    const i = 44
    console.log("division :" +(+h / +i))
}
module.exports={Hello, hi ,add,sub,mul,div}