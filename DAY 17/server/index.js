import express from 'express'
import cors from 'cors'
import hello from './middlewares/hello.js'

const app=express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(hello)

app.get('/',(req,res)=>{
    res.send("Welcome to home page")
})

app.get("/profile/:username/:id",(req,res,next)=>{
   res.writeHead(200,{"content-type":"text/html"})
    res.write(`<h1>ID: ${req.params.id}</h1>`)
   if(req.params.username==="saurashya"){
    res.write("You are authorized")
   }
   else if(req.params.username==="admin"){
    res.write("You have admin access")
   }
   else{
    res.write("You are not authorized")
   }
   res.end()
   next()
})

app.listen(3000,()=>{console.log("Server is running on port 3000")})