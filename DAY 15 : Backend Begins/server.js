import http from 'http'

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"})
    if(req.url=="/"){
        res.write("You are at home page")
    }
    else if (req.url=="/Saurashya"){
        res.write("You are Authorized")
    }
    else{
        res.write("You are not authorized")
    }
    res.end()
}).listen(3000,()=>{
    console.log("Listening on port 3000");
})

