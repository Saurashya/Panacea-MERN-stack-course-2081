import express from 'express';
import productModel from './model/product.js';
import connectDB from './db/connectdb.js';
import cors from 'cors'

console.clear();

const app=express();
const PORT = process.env.PORT||4000
const DATABASE_URL=process.env.DATABASE_URL||"mongodb://127.0.0.1:27017/product"

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
connectDB(DATABASE_URL)

app.get('/',(req,res)=>{
    res.send("Product info")
})


app.post('/createProduct',async(req,res)=>{
    const{id,name,price} = req.body
    try{
        const result=await productModel.insertMany({
            ID:id,
            Name:name,
            Price:price
        })
        res.send(result)
    }catch(error){
        console.log(error)
        res.send(500,error)
    }
})
app.get('/viewProduct',async(req,res)=>{
    try{
        const result=await productModel.find()
        res.send(result)
    }catch(error){
        console.log(error)
        res.send(error)
    }
})

app.get('/viewProductById/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const result = await productModel.findOne({ ID: id });
      res.send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });
app.get('/updateProduct',async(req,res)=>{
    try{
        const result=await productModel.updateMany({
            ID:1,
            Name:"Jordans 4",
            Price:6000
    }) 
    res.send(result)
}catch(error){
        console.log(error)
        res.send(error)
    }
})
app.get('/deleteProduct',async(req,res)=>{
    try{
        const result=await productModel.deleteMany({
            
        })
        res.send(result)
    }catch(error){
        console.log(error)
        res.send(error)
    }
})
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})
