import React from 'react';

const Tasks = ({ index, element, handleRemove, handleTick,isCrossed}) => {
  return (
    !isCrossed?<div className="bg-red-400 w-[400px] h-[4rem] flex justify-between items-center p-4 text-2xl text-white rounded-2xl my-1">
    <input type="checkbox" className='w-6 h-6' onClick={() => handleTick(index)} />
    <li className="list-none">{element}</li>
    <button
      onClick={() => handleRemove(index)}
      className="bg-btn p-2 rounded-lg text-sm"
    >
      Remove
    </button>
  </div>
  :
  <div className="bg-green-400 w-[400px] h-[4rem] flex justify-between items-center p-4 text-2xl text-white rounded-2xl my-1">
    <li className="list-none"><s>{element}</s></li>
    <button
      onClick={() => handleRemove(index)}
      className="bg-btn p-2 rounded-lg text-sm"
    >
      Remove
    </button>
  </div>
  );
};

export default Tasks;
