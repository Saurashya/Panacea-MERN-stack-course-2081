import React from 'react'
import { useContext } from 'react'
import { Mode } from '../App'

const Component1 = () => {
    const value=useContext(Mode)
    return(
        <>
        <h1>{value?<div className="main h-screen w-screen bg-white text-2xl flex flex-col items-center justify-center">
        <h1>This is Light Part</h1>
        <article className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A repudiandae aliquid in distinctio facere iusto quos tenetur debitis. Odio, quia.</article>
    </div>:<div className="main h-screen w-screen bg-black text-white text-2xl flex flex-col items-center justify-center">
        <h1>This is Dark Part</h1>
        <article className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A repudiandae aliquid in distinctio facere iusto quos tenetur debitis. Odio, quia.</article>
    </div>}</h1>
        </>
    )
}

export default Component1