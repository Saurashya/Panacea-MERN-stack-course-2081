import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='bg-orange-600 p-5 text-2xl text-white font-semibold rounded-xl'>{name}</button>
    </div>
  )
}

export default Button