import express from 'express'
import user from './routes/user.js';
import employee from './routes/employee.js'
import teacher from './routes/teacher.js'

const app=express();

console.clear();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.send("Welcome to home page")
})

app.use('/users',user)
app.use('/employees',employee)
app.use('/teachers',teacher)

const port =3000;
app.listen(port,()=>{console.log(`Server up on port ${port}`)})