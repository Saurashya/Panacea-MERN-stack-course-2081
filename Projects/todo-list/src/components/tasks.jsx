import React from 'react'

const tasks = ({index,element,handleRemove}) => {
  return (
<>
            <div  key={index} className='bg-[#434469] w-[400px] flex justify-between items-center p-4 text-2xl text-white rounded-2xl my-2'>
                  <li>{element}</li>
                  <button onClick={handleRemove(index)} className='bg-orange-400 p-2 rounded-lg'>Remove</button>
              </div>
</>
  )
}

export default tasks