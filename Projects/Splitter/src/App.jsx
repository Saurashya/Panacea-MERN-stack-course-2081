import React, { useEffect, useState } from 'react';
import { BsFillPeopleFill } from "react-icons/bs";

const style = {
  btnStyling: "bg-[#00474b] p-2 rounded-lg text-sm font-semibold text-white"
};

const App = () => {
  const [tip, setTip] = useState(0);
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(1);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculatedTipAmount = ((bill * tip) / 100) / people;
    setTipAmount(calculatedTipAmount);
    setTotal((bill / people) + calculatedTipAmount);
  }, [tip, bill, people]);

  return (
    <>
      <div className='min-h-screen min-w-screen flex flex-col items-center bg-primary justify-evenly'>
        <h1 className='text-4xl tracking-[12px] uppercase text-[#00474b]'>Spli<br />tter</h1>
        <div className="splitter-card h-[50%] w-[50%] grid grid-cols-2 p-2 bg-white rounded-xl">
          <div className="values grid grid-rows-3 bg-white">
            <div className="bill flex flex-col p-2">
              <h2>Bill</h2>
              <div className="bill-input bg-gray-200 flex justify-between items-center p-2 rounded-lg">
                <span className='text-gray-400'>$</span>
                <input 
                  type="number" 
                  placeholder='0' 
                  className='outline-none bg-transparent w-auto text-right p-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' 
                  onChange={(e) => setBill(Number(e.target.value))} 
                />
              </div>
            </div>
            <div className="tip p-2 flex flex-col gap-2">
              <h1>Select Tip %</h1>
              <div className="tip-btns grid grid-cols-3 gap-3">
                {
                  [5, 10, 15, 25, 50].map((percentage, i) => (
                    <button 
                      key={i} 
                      className={style.btnStyling} 
                      onClick={() => setTip(percentage)}
                    >
                      {percentage}%
                    </button>
                  ))
                }
                <input 
                  type="number" 
                  placeholder='Custom' 
                  className='outline-none bg-gray-200 text-center p-2 rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' 
                  onChange={(e) => setTip(Number(e.target.value))} 
                />
              </div>
            </div>
            <div className="people p-2 flex flex-col justify-center items-start">
              <h2>Number of People</h2>
              <div className="people-input bg-gray-200 flex justify-between items-center p-2 rounded-lg">
                <span className='text-gray-400'><BsFillPeopleFill /></span>
                <input 
                  type="number" 
                  placeholder='1' 
                  className='outline-none bg-transparent w-auto text-right p-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' 
                  onChange={(e) => setPeople(Number(e.target.value) || 1)} 
                />
              </div>
            </div>
          </div>
          <div className="result bg-white flex justify-center items-center">
            <div className="result-container bg-secondary h-[90%] w-[95%] rounded-xl grid grid-rows-3 text-teal-400 text-xl">
              <div className="tip-amount px-4 py-4 flex justify-between">
                <h2>Tip Amount <br /> /per person</h2>
                <h2 className='text-3xl'>${tipAmount.toFixed(2)}</h2>
              </div>
              <div className="total px-4 py-2 flex justify-between">
                <h2>Total Amount <br /> /per person</h2>
                <h2 className='text-3xl'>${total.toFixed(2)}</h2>
              </div>
              <div className="btn flex justify-center flex-wrap">
                <button 
                  className="bg-btn text-white w-[70%] h-[40%] p-2 rounded-lg uppercase" 
                  onClick={() => {
                    setTip(0);
                    setBill(0);
                    setPeople(1);
                    setTipAmount(0);
                    setTotal(0);
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;