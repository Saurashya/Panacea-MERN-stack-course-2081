import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("...Loading");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/sendValue", { user: value });

      const response = await axios.get("http://localhost:3000/getValue");
      console.log(response.data);
      setResult(response.data);
    } catch (error) {
      console.error("Error during the request:", error);
      setResult("Error occurred");
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
      <h1>{result}</h1>
    </div>
  );
};

export default App;
