import React from 'react'
import { useState } from 'react';
import axios from 'axios'

const App = () => {
  const[user,setUser]=useState("");
  const[pass,setPass]=useState("");
  const handleSubmit=async (e)=>{
    e.preventDefault();
   try{
    await axios.post("http://localhost:3000/form/sendUser",{user:user,pass:pass})
   }
   catch{
    await axios.get("http://localhost:3000/form/getMessage").then((res)=>console.log(res.data)).catch((err)=>console.log(err))
   }
  }
  return (
   <>
    <div className="form">
     <form>
      <input type="text" onChange={(e)=>setUser(e.target.value)}/>
      <input type="password" onChange={(e)=>setPass(e.target.value)}/>
      <button type="submit" onClick={handleSubmit}>Submit</button>
     </form>
    </div>
   </>
  )
}

export default App