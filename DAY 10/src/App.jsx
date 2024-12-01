import React, { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import {Routes,Route,Link} from 'react-router-dom'
import { createContext } from 'react'


export const Mode=createContext();

const App = () => {
  const [color,setColor]=useState(true);
  const handleClick=(e)=>{  
    e.preventDefault();
    if(color==true){
      setColor(false)
    }
    else{
      setColor(true)
    }
    // console.log(color)
  }
  return (
    <Mode.Provider value={color}>
      <nav className='bg-black text-white text-2xl flex justify-around items-center h-[50px] w-screen'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <button onClick={handleClick}>Mode</button>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Mode.Provider>
  )
}

export default App