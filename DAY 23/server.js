import express from 'express'
import bcrypt from 'bcrypt'

const app =express()
const port= 4000
let users=[
    
]

app.use(express.json())
app.use(express.urlencoded({extended:true}))
console.clear()


app.get('/',(req,res)=>{
    res.send("Welcome to homepage")
})

app.post('/user/create',async(req,res)=>{
   try{
    const salt = await bcrypt.genSalt()
    const hashedPass = await bcrypt.hash(req.body.password,salt)

    const entry = {name:req.body.name,password:hashedPass}
    users.push(entry)
    return res.json(users)
   }catch(e){
    console.log(e)
   }
})

app.post('/user/login',async(req,res)=>{
    const findUser = users.find(user=>user.name===req.body.name);
    if(findUser==null){
        return res.status(404).send("User not found!")
    }
    const isAuthorized=await bcrypt.compare(req.body.password,findUser.password)

    if(isAuthorized){
       return res.send("Authorized successfully!")
    }
    return res.status(401).send("Not Authorized to access")
})


app.listen(port,()=>{console.log(`Server up at port ${port}`)})