import express from 'express'
import { user,pass } from '../index.js'

let msg=""
const verifyUser=(req,res,next)=>{
    if(user==="saurashya"){
        console.log("User verified")
        next()
    }
    else{
        msg="<h1>Invalid username</h1>"
    }
}
const verifyPassword=(req,res,next)=>{
    if(pass==123){
        console.log("password verified")
        next()
    }
    else{
           msg= "<h1>Invalid Password</h1>"
    }
}

const verifyLogin=(req,res,next)=>{
    msg="<h1>Invalid Login</h1>"
    next()
}

export {verifyUser,verifyPassword,verifyLogin,msg}