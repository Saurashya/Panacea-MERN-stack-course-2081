import React from 'react'
import Component1 from './components/component1'
import { createContext,useState } from 'react';

export const Saurashya=createContext();
const App = () => {
  const [name,setName]=useState("...loading");
  const [tempName,setTempName]=useState("...loading");
  const age=32;

  const handleClick=(e)=>{
    e.preventDefault();
    setTempName(name)
  }
  return (
    <Saurashya.Provider value={{name:tempName,age:age}}>
      <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
      <button onClick={handleClick}>Submit Name</button>
        <Component1/>
    </Saurashya.Provider>
  )
}

export default App