const hello=(req,res,next)=>{
    console.log("This is middleware from next file")
    next()
}

export default hello;