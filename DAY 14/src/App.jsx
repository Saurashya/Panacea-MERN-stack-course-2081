import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,incrementByAmount,reset} from './counterSlice'

const App = () => {
  const [amount,setAmount]=useState(0)
  const value=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch();
  return (
    <>
      <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center">
          <button onClick={()=>dispatch(increment())}>+</button>
          <h1>{value}</h1>
          <button onClick={()=>dispatch(decrement())}>-</button>
          <input type="number" onChange={(e)=>setAmount(e.target.value)}/>
          <button onClick={()=>dispatch(incrementByAmount(Number(amount)))}>Add by increment</button>
          <button onClick={()=>dispatch(reset())}>Reset</button>
      </div>
    </>
  )
}

export default App