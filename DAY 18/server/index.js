//Import Dependencies
import express from 'express'
import cors from 'cors'
import { verifyUser,verifyPassword,verifyLogin,msg} from './middlewares/user.js';

//load express
console.clear();
const app = express();

//run middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

let user='saurashya';
let pass=123;
app.post("/form/sendUser",(req,res)=>{
    console.log(req.body.user)
    console.log(req.body.pass)
    user=req.body.user;
    pass=parseInt(req.body.pass);
})

app.get("/form/getMessage",[verifyUser,verifyPassword,verifyLogin],(req,res)=>{
    res.send(msg)
})
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