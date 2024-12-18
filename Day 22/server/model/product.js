import mongoose from "mongoose";

const productSchema=mongoose.Schema({
    ID:{type:Number,unique:true,required:true},
    Name:{type:String,unique:true,required:true},
    Price:{type:Number,unique:false,required:true}
})

const productModel=mongoose.model("product",productSchema)

export default productModel