import React, { useState, useEffect } from 'react';
import rock from './assets/rock.png';
import paper from './assets/paper.png';
import scissor from './assets/scissor.png';

const App = () => {
  const [computer, setComputer] = useState(null);
  const [userChoice, setUserChoice] = useState(null);
  const [isPlay, setIsPlay] = useState(false);
  const [result, setResult] = useState('');

  const style = {
    btn_styling:
      'rounded-full hover:outline hover:outline-4 focus:outline-none focus:border-[7px] focus:border-white-500 focus:shadow-xl focus:shadow-blue-400',
    btn_img_height: 'h-[220px] w-[200px]',
  };

  // Handle winner determination using useEffect
  useEffect(() => {
    if (computer !== null && userChoice !== null) {
      if (computer === userChoice) {
        setResult('It’s a Tie!');
      } else if (
        (userChoice === 1 && computer === 3) ||
        (userChoice === 2 && computer === 1) ||
        (userChoice === 3 && computer === 2)
      ) {
        setResult('You Win!');
      } else {
        setResult('Computer Wins!');
      }
    }
  }, [computer, userChoice]);

  const handleComputer = () => {
    const random = Math.floor(Math.random() * 3) + 1; // Random number between 1 and 3
    setComputer(random);
  };

  const handlePlay = () => {
    if (userChoice === null) {
      alert('Please select an option first!');
      return;
    }
    setIsPlay(true);
    handleComputer();
  };

  return (
    <div className="w-screen h-screen grid grid-cols-2 grid-rows-2">
      {/* Computer's Choice */}
      <div className="computer bg-red-400 flex justify-center items-center">
        {isPlay ? (
          computer === 1 ? (
            <img src={rock} alt="rock" className="h-[220px] w-[200px]" />
          ) : computer === 2 ? (
            <img src={paper} alt="paper" className="h-[220px] w-[200px]" />
          ) : (
            <img src={scissor} alt="scissor" className="h-[220px] w-[200px]" />
          )
        ) : (
          <h1>Computer is Picking...</h1>
        )}
      </div>

      {/* Player's Choice */}
      <div className="player bg-black flex justify-center items-center">
        {!isPlay ? (
          <div className="flex justify-between items-center gap-4">
            <button
              className={style.btn_styling}
              onClick={() => setUserChoice(1)}
            >
              <img src={rock} alt="rock" className={style.btn_img_height} />
            </button>
            <button
              className={style.btn_styling}
              onClick={() => setUserChoice(2)}
            >
              <img src={paper} alt="paper" className={style.btn_img_height} />
            </button>
            <button
              className={style.btn_styling}
              onClick={() => setUserChoice(3)}
            >
              <img src={scissor} alt="scissor" className={style.btn_img_height} />
            </button>
          </div>
        ) : userChoice === 1 ? (
          <img src={rock} alt="rock" className="h-[220px] w-[200px]" />
        ) : userChoice === 2 ? (
          <img src={paper} alt="paper" className="h-[220px] w-[200px]" />
        ) : (
          <img src={scissor} alt="scissor" className="h-[220px] w-[200px]" />
        )}
      </div>

      {/* Result */}
      <div className="result bg-green-400 col-span-2 flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-bold">{result}</h1>
        <button
          className="outline-none px-6 py-3 bg-blue-500 text-white font-bold rounded"
          onClick={handlePlay}
        >
          Play
        </button>
        {isPlay && (
          <button
            className="outline-none px-6 py-3 bg-red-500 text-white font-bold rounded"
            onClick={() => {
              setIsPlay(false);
              setResult('');
              setUserChoice(null);
              setComputer(null);
            }}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
