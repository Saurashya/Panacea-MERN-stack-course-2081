import express from 'express'
import { user,pass } from '../index.js'

const verifyUser=(req,res,next)=>{
    if(user==="saurashya"){
        console.log("User verified")
        next()
    }
    else{
        res.send("<h1>Invalid username</h1>")
    }
}
const verifyPassword=(req,res,next)=>{
    if(pass==123){
        console.log("password verified")
        next()
    }
    else{
        res.send("<h1>Invalid Password</h1>")
    }
}

const verifyLogin=(req,res)=>{
    res.send(`<h1>${user} is logged in !</h1>`)
}

export {verifyUser,verifyPassword,verifyLogin}