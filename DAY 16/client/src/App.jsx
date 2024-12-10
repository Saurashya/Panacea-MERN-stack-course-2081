import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const[admin,setAdmin]=useState("..loading");

  useEffect(()=>{
    const data=axios.get("http://localhost:4000/getAdmin");
    data.then((res)=>setAdmin(res.data))
    data.catch((err)=>{console.log(err)})
  },[])
  const style={
    inputStyling:"outline-none bg-white w-auto rounded-lg p-2 text-xl shadow-xl hover:shadow-none"
  }
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <h1>Admin:{admin}</h1>
      <h2>
        {
          admin==="Saurashya"?"You are authorized":"You are not authorized"
        }
      </h2>
      <form action="http://localhost:4000/form" method="post" className='flex flex-col bg-gray-300 h-[50%] w-[50%] justify-center items-center gap-4 rounded'>
        <label htmlFor="user" className='text-2xl'>User</label>
        <input type="text" name="user" id="user" className={style.inputStyling}/>
        <label htmlFor="password"  className='text-2xl'>Password</label>  
        <input type="password" name="password" id="password" className={style.inputStyling}/>
        <button type='submit' className='bg-black text-white rounded-lg font-semibold p-2'>Submit</button>
      </form>
    </div>
  )
}

export default App