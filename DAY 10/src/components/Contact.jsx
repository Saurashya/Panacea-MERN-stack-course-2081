import React from 'react'
import { useContext } from 'react'
import { Mode } from '../App';

const Contact = () => {
    const color=useContext(Mode);
  return (
   <>
        {
            color?<div  className='h-[100vh] w-full flex flex-col justify-center items-center'>
            <form className='flex flex-col text-xl gap-2'>
               <legend className='text-4xl font-semibold my-6 text-center'>Contact Us</legend>
             <label>Name</label>
             <input type="text" name="name" className='outline outline-black outline-1 rounded-lg p-2'/> <br /> 
             <label>Email</label>
             <input type="email" name="email" className='outline outline-black outline-1 rounded-lg p-2'/><br />
             <label>Message</label>
             <textarea name="message" className='outline outline-black outline-1 rounded-lg p-2'></textarea><br />
             <button className='bg-black text-white rounded-lg p-4 font-semibold' onClick={(e)=>e.preventDefault()}>Submit</button>
       
           </form>
          </div>:
          <div  className='h-[100vh] w-full flex flex-col justify-center items-center bg-black text-white'>
          <form className='flex flex-col text-xl gap-2'>
             <legend className='text-4xl font-semibold my-6 text-center'>Contact Us</legend>
           <label>Name</label>
           <input type="text" name="name" className='outline outline-black outline-1 rounded-lg p-2'/> <br /> 
           <label>Email</label>
           <input type="email" name="email" className='outline outline-black outline-1 rounded-lg p-2'/><br />
           <label>Message</label>
           <textarea name="message" className='outline outline-black outline-1 rounded-lg p-2'></textarea><br />
           <button className='bg-white text-black rounded-lg p-4 font-semibold' onClick={(e)=>e.preventDefault()}>Submit</button>
     
         </form>
        </div>
        }
   </>
  )
}

export default Contact