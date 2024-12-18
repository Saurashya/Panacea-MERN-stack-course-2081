import express from 'express'
import connectDB from './db/dBconnect.js'
import movieModel from './models/movieModel.js'

const app =express()
const port = process.env.PORT || 4000
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/movies"

app.use(express.json())
app.use(express.urlencoded({extended:true}))
connectDB(DATABASE_URL)

app.get('/',(req,res)=>{
    res.send("Welcome to database!")
})

app.get('/createMovie',async(req,res)=>{
    try{
        const result = await movieModel.insertMany({
            ID:18,
            Name:"John Wick 18",
            Rating:6.5
        })
        res.send(result)
    }catch(error){
        console.log(error)
        res.send(error)
    }
})

app.get('/viewMovies',async (req,res)=>{
    try {
        const result = await movieModel.find()
        res.send(result)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

app.get('/updateMovies',async (req,res)=>{
    try {
        const result = await movieModel.updateMany({ID:18},{Name:"I changed the Name"})
        if(result.acknowledged==true){
            res.send("Movie Name Updated!")
        }
        else{
            res.send("Something went wrong!")
        }
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})
app.get('/deleteMovies',async (req,res)=>{
    try {
        const result = await movieModel.deleteMany({ID:17})
        if(result.acknowledged==true){
            res.send("Movie Deleted!")
        }
        else{
            res.send("Something went wrong!")
        }
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})


app.listen(port,()=>{
    console.log(`Server Up at port ${port}`)
})