//Import Dependencies
import express from 'express'
import { verifyUser,verifyPassword,verifyLogin } from './middlewares/user.js';
import path from 'path'

//load express
console.clear();
const app = express();

//run middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

let user='saurashya';
let pass=123;

//create routes
app.get('/',[verifyUser,verifyPassword,verifyLogin])

app.route("/user")
.get((req,res)=>{
    res.send("View users")
})
.post((req,res)=>{
    res.send("Create user")
})
.put((req,res)=>{
    res.send("Update user")
})
.delete((req,res)=>{
    res.send("User deleted")
})

//start server at port 
app.listen(3000,()=>{
    console.log("Server is running on port 3000")})


export {user,pass};