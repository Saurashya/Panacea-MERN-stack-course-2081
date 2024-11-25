import React from 'react'
import { useState } from 'react';
import UseValue from './hooks/useValue';

const App = () => {
  const[p,setP]=useState(0);
  const[t,setT]=useState(0);
  const[r,setR]=useState(0);
  const[si,setSI]=useState(0);

  const handleClick=(e)=>{
    e.preventDefault();
    const value=UseValue(p,t,r)
    setSI(value);
  }

  return (
   <>
     <form className='flex flex-col items-center justify-center gap-10 h-[100vh] w-full'>
      <label>Principal: </label>
      <input type="number" placeholder='Enter principal' onChange={(e)=>{setP(e.target.value)}}/>
      <label>Time: </label>
      <input type="number" placeholder='Enter Time' onChange={(e)=>{setT(e.target.value)}}/>
      <label>Rate: </label>
      <input type="number" placeholder='Enter Rate' onChange={(e)=>{setR(e.target.value)}}/>
      <button className='bg-black text-white rounded-lg p-4' onClick={handleClick}>Calculate</button>
    </form>
    <h1>The SI is :{si}</h1>
   </>
  )
}

export default App