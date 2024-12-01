import React from 'react'
import { useContext } from 'react'
import { Mode } from '../App';

const Home = () => {
    const color=useContext(Mode);
  return (
    <>
       {
        color? <div className="container h-[100vh] w-full flex">
        <div className="left h-[100%] w-[50%] flex justify-center items-center">
            <img src="https://c4.wallpaperflare.com/wallpaper/778/348/985/anime-one-piece-brook-one-piece-franky-one-piece-wallpaper-preview.jpg" alt="Wallpaper" className='h-[400px] w-[400px] shadow-2xl shadow-blue-400'/>
        </div>
        <div className="right h-[100%] w-[50%] flex flex-col justify-center items-center">
            <h1 className='text-4xl my-6 font-semibold'>One Piece</h1>
            <p className='text-lg'>One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's Weekly Shōnen Jump magazine since July 1997, with its individual chapters compiled into 100 tankōbon volumes as of September 2021. The story follows the adventures of Monkey. D. Luffy.
            </p>
        </div>
    </div>:
     <div className="container h-[100vh] w-[100vw] flex bg-black text-white">
     <div className="left h-[100%] w-[50%] flex justify-center items-center">
         <img src="https://c4.wallpaperflare.com/wallpaper/778/348/985/anime-one-piece-brook-one-piece-franky-one-piece-wallpaper-preview.jpg" alt="Wallpaper" className='h-[400px] w-[400px] shadow-2xl shadow-blue-400'/>
     </div>
     <div className="right h-[100%] w-[50%] flex flex-col justify-center items-cente">
         <h1 className='text-4xl my-6 font-semibold'>One Piece</h1>
         <p className='text-lg'>One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's Weekly Shōnen Jump magazine since July 1997, with its individual chapters compiled into 100 tankōbon volumes as of September 2021. The story follows the adventures of Monkey. D. Luffy.
         </p>
     </div>
 </div>
       }
    </>
  )
}

export default Home