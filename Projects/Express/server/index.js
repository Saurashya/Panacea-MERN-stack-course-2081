import express from 'express';
import cors from 'cors';

const app = express();
let username = "";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/sendValue", (req, res) => {
    username = req.body.user;
    console.log(req.body.user)
    res.send("value reveived");
});

app.get("/getValue",(req,res)=>{
    if(username==="saurashya"){
        res.send("user is registered")
    }
    else if(username==="admin"){
        res.send("user is admin")
    }
    else{
        res.send("user is not registered")
    }

})

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});
