import React, { useState } from 'react';
import TasksBar from './components/tasks';

const App = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [newList, setNewList] = useState([]);

  // Listening to Input Tasks
  const handleInput = (e) => {
    setTask(e.target.value);
  };

  // Adding Tasks to List
  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      setTaskList([...taskList, task]);
      setTask(''); // Clear input
    }
  };

  // Removing Tasks from List
  const handleRemove = (index, isCompleted = false) => {
    return () => {
      if (isCompleted) {
        setNewList(newList.filter((_, i) => i !== index));
      } else {
        setTaskList(taskList.filter((_, i) => i !== index));
      }
    };
  };

  // Handling ticks
  const handleTick = (index) => {
    return () => {
      const completedTask = taskList[index];
      setNewList([...newList, completedTask]); // Add to completed list
      setTaskList(taskList.filter((_, i) => i !== index)); // Remove from pending list
    };
  };

  return (
    <>
     <h1 className='text-3xl text-center bg-secondary text-white h-[5rem]'>Todo List</h1>
      <div className="input h-[50vh] w-full flex items-center justify-center bg-primary">
       
        <div className="task bg-secondary w-[500px] flex justify-between rounded-3xl p-2">
          <input
            type="text"
            placeholder="Enter task"
            className="bg-transparent outline-none text-white w-[calc(100%-50px)] text-2xl p-2"
            value={task}
            onChange={handleInput}
          />
          <button className="bg-btn p-2 text-2xl text-white w-[50px] rounded-full" onClick={addTask}>
            +
          </button>
        </div>
      </div>
      <div className="display h-auto w-full flex">
        {/* Pending Tasks */}
        <div className="pending w-[50%] h-[100%] flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold my-1">Pending</h2>
          <ul className="grid grid-cols-1 gap-2">
            {taskList.map((element, index) => (
              <TasksBar
                key={index}
                element={element}
                index={index}
                handleRemove={handleRemove(index)}
                handleTick={handleTick(index)
                }
                isCrossed={false}
              />
            ))}
          </ul>
        </div>
        {/* Completed Tasks */}
        <div className="completed w-[50%] h-[100%] flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold my-1">Completed</h2>
          <ul className="grid grid-cols-1 gap-2">
            {newList.map((element, index) => (
              <TasksBar
                key={index}
                element={element}
                index={index}
                handleRemove={handleRemove(index, true)}
                isCrossed={true}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
