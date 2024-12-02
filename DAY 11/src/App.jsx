import React, { useState,useEffect } from 'react'

const App = () => {
  const[items,setItems]=useState([]);

 useEffect(() => {
    getData();
 }, [])
 
const getData=async()=>{
  await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken").then((res)=>res.json()).then((data)=>{setItems(data.meals)}).catch((err)=>console.log(err));
}

  return (
   <div className='grid grid-cols-4 p-6 gap-4'>
    {
      items.map(({strMeal,strMealThumb,idMeal})=>{
          return(
            <div key={idMeal}>
              <h1 className='text-2xl font-semibold'>{strMeal}</h1>
              <img src={strMealThumb} alt={strMeal} />
            </div>
          )
      })
    }
   </div>
  )
}

export default App