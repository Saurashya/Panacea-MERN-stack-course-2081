import React from 'react'
import { Saurashya} from '../App'
import { useContext } from 'react'

const component3 = () => {
  const user= useContext(Saurashya)
  return (
    <div>component3
      <h1>I am : {user.name}</h1>
      <h1>My age is : {user.age}</h1>
    </div>
  )
}

export default component3