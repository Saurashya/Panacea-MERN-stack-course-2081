import React from 'react'
import Heading from './components/Heading'
import Button from './components/Button'

const App = () => {



  return (
   <div>
      <Heading name="Saurashya" className="text-blue-500"/>
      <Heading name="Luffy" className="text-red-500"/>
      <Heading name="Zoro" className="text-green-500"/>
      <Button name="Submit"/>
      <Button name="Submit NOW"/>
   </div>
  )




}

export default App

