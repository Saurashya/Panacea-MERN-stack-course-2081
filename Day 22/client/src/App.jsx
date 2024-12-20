import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [pricing, setPricing] = useState(0);
  const [msg, setMsg] = useState({ value: "", state: false });
  const [movies, setMovies] = useState([]);
  const [findId, setFindId] = useState(0);
  const [product, setProduct] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/createProduct", { id: id, name: name, price: pricing });
      if (response.status === 200) {
        setMsg({ value: "Inserted Successfully!", state: true });
      }
    } catch (error) {
      if (error.response && error.response.status === 500) {
        setMsg({ value: "Product already exists!", state: false });
      } else {
        setMsg({ value: "An error occurred!", state: false });
      }
    }
    setTimeout(() => {
      setMsg({ value: "", state: false });
    }, 4000);
  }

  useEffect(() => {
    const fetchData = async () => {
      const movie = await axios.get("http://localhost:4000/viewProduct").then((movie)=>setMovies(movie.data));
      console.log(movie)
    }
    fetchData();
  }, [msg]);

  const handleById = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.get(`http://localhost:4000/viewProductById/${findId}`);
      if (result.data) {
        setProduct(result.data);
      } else {
        setProduct({ID:"Product not found",Name:"Product not found",Price:"Product not found"});
      }
    } catch (error) {
      console.error("Error fetching product by ID:", error);
      setProduct({ID:"Product not found",Name:"Product not found",Price:"Product not found"});
    }
  }

  return (
    <>
      {/* Insert Entries */}
      <div className='h-[100vh] w-[100vw] flex flex-col items-center justify-around'>
        <h1 className='text-5xl font-semibold primary-font'>Product Entry</h1>
        <form method='post' className='flex flex-col h-[50%] w-[50%] text-center items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-lg '>
          ID:
          <input type="number" name="id" id="productId" className='border rounded-lg p-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' onChange={(e) => setId(e.target.value)} />
          Name:
          <input type="text" name="name" id="name" className='border rounded-lg p-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
            onChange={(e) => setName(e.target.value)} />
          Pricing:
          <input type="number" name="pricing" id="pricing" className='border rounded-lg p-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' onChange={(e) => setPricing(e.target.value)} />
          <input type="submit" value="Submit" className='p-2 px-4 bg-black text-white rounded-lg font-semibold' onClick={handleSubmit} />
          <p className={`${msg.state ? "text-green-400" : "text-red-400"} text-xl`}>{msg.value}</p>
        </form>
      </div>

      {/* Find all entries */}
      <div className='h-[100vh] w-[100vw] flex flex-col items-center justify-around'>
        <h1 className='text-5xl font-semibold primary-font'>Product View</h1>
        <ol>
          {
            movies.map((movie, index) => {
              return <li key={index}>ID: {movie.ID} Name: {movie.Name} Pricing: {movie.Price}</li>
            })
          }
        </ol>
      </div>

      {/* Find by ID */}
      <div className='h-[100vh] w-[100vw] flex flex-col items-center justify-around'>
        <h1 className='text-5xl font-semibold primary-font'>Product View by ID</h1>
        <form method='get' className='flex flex-col h-[50%] w-[50%] text-center items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-lg' onSubmit={handleById}>
        <input type="number" name="findId" id="findId" className='border rounded-lg p-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' onChange={(e) => setFindId(Number(e.target.value))} />
          <button type="submit">Submit</button>
          <h1>ID:{product.ID} <br />  Name: {product.Name} <br /> Price: {product.Price}</h1>
        </form>
      </div>
    </>
  )
}

export default App