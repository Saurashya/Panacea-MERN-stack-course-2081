import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    ID:{type:Number,unique:true,required:true},
    Name:{type:String,unique:false,required:true},
    Rating:{type:Number,unique:false,required:true,min:1,max:10}
})

const movieModel= mongoose.model("movies",movieSchema)

export default movieModel