import React, { useState } from 'react'
import Component1 from './components/Component1'
import { createContext } from 'react'

export const Mode=createContext();

const App = () => {
  const [color,setColor]=useState(true);
  return (
   <>
   {
    color?<button onClick={(e)=>{
      e.preventDefault();
      if(color==true){
        setColor(false)
      }
      else{
        setColor(true)
      }
     }} className='bg-white text-black'>Change color</button>:
     <button onClick={(e)=>{
      e.preventDefault();
      if(color==true){
        setColor(false)
      }
      else{
        setColor(true)
      }
     }} className='bg-black text-white'>Change color</button>
   }

   <Mode.Provider value={color}>
   <Component1/>
   </Mode.Provider>
   </>
  )
}

export default App