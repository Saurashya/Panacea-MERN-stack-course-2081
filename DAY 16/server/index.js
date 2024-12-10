import express from 'express'
import cors from 'cors'

const app=express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

let admin="Saurashya";

app.get("/",(req,res)=>{
    res.send("Home Page")
})
app.post("/form",(req,res)=>{
    const user = req.body.user;
    const pass=req.body.password;
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(`<h1 style="color:red;">Welcome: ${user}</h1>`);
    res.write(`<h2>Your password is : ${pass}</h2>`);
    if(user==="admin" && pass ==="admin123"){
        res.write("You are authorized user")
    }
    else{
        res.write("You are not authorized user")
    }
    res.send();
})

app.get("/getAdmin",(req,res)=>{
    res.send(admin)
})

app.listen(4000)