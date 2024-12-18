import express from 'express'

const app = express()
const port=3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.send("Welcome to home page")
})

app.get('/profile',(req,res)=>{
    const {username,phone}=req.query
    res.send(`Welcome: ${username}! Your number is : ${phone}`)
})

app.listen(port,()=>{console.log(`Server up on port ${port}`)})