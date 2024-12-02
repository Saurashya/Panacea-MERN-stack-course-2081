import React from 'react'
import { useState,useEffect} from 'react'

const App = () => {
  const [pass,setPass]=useState('');
  const [errMsg,setErrMsg]=useState("");

  useEffect(()=>{
    if(pass.trim()== ""){
      setErrMsg("Password should not be empty")
    }
    else if(pass.length<6){
      setErrMsg("Password should be more than 6 characters")
    }
    else if (pass.split(" ").length>1){
      setErrMsg("Password should not contain spaces")
    }
    else{
      setErrMsg("")
    }
  },[pass])

  return (
    <div>
      <form>
        Password
        <input type="password" placeholder='Enter Password' onChange={(e)=>{setPass(e.target.value)}}/>
      </form>
      {
        errMsg==""?"":
        <h2 className='text-red-500'>*{errMsg}</h2>
      }
      {
        errMsg==""?
        <button className='bg-black text-white'>Submit</button>:
        <button className='bg-black text-white opacity-50 disabled cursor-not-allowed'>Submit</button>
      }
    </div>
  )
}

export default App