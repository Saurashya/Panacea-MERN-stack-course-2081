import React from 'react'
import { useContext } from 'react'
import { Mode } from '../App';

const About = () => {
    const color=useContext(Mode);
  return (
    <>
        {
            color?<div className="container h-[100vh] w-screen flex">
            <div className="left h-[100%] w-[50%] flex justify-center items-center">
                <img src="https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg" alt="Wallpaper" className='h-[400px] w-[400px] rounded-full shadow-xl'/>
            </div>
            <div className="right h-[100%] w-[50%] flex flex-col justify-center items-center">
                <h1 className='text-4xl my-6 font-semibold'>About US</h1>
                <p className='text-lg'>This is an anime Fanpage . It is made by <span className='font-semibold'>Saurashya</span> 
                </p>
            </div>
        </div>:
        <div className="container h-[100vh] w-screen flex bg-black text-white">
        <div className="left h-[100%] w-[50%] flex justify-center items-center">
            <img src="https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg" alt="Wallpaper" className='h-[400px] w-[400px] rounded-full shadow-xl'/>
        </div>
        <div className="right h-[100%] w-[50%] flex flex-col justify-center items-center">
            <h1 className='text-4xl my-6 font-semibold'>About US</h1>
            <p className='text-lg'>This is an anime Fanpage . It is made by <span className='font-semibold'>Saurashya</span> 
            </p>
        </div>
    </div>
        }
    </>
  )
}

export default About