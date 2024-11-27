import {React,useState} from 'react'
import TasksBar from "./components/tasks"

const App = () => {
  const[task,setTask]=useState("");
  const[taskList,setTaskList]=useState([]);

  //Listening to Input Tasks
  const handleInput=(e)=>{
      setTask(e.target.value);
  }

//Adding Tasks to List

  const addTask=(e)=>{
    e.preventDefault();
    if(task.trim() !== ""){
      setTaskList([...taskList,task]);
      setTask(" ");
    }
  }

  //Removing Tasks from List
  const handleRemove=(index)=>{
    return ()=>{
      let list =taskList.filter((_,i)=>i!==index);
      setTaskList(list);
    }
  }

  return (
<>
    <div className="input h-[50vh] w-full flex items-center justify-center bg-primary ">
      <div className="task bg-secondary w-[500px] flex justify-between rounded-3xl p-2">
        <input type="text" placeholder='Enter task' className='bg-transparent outline-none text-white w-[calc(100%-50px)] text-2xl p-2' onChange={handleInput}/>
        <button className='bg-btn p-2 text-2xl text-white w-[50px] rounded-full' onClick={addTask} >+</button>
      </div>
    </div>
    <div className="display h-[50vh] w-full flex flex-col items-center justify-center">
        <ul>
          {
            taskList.map((element,index)=>{
              return(
                  <TasksBar element={element} index={index} handleRemove={handleRemove}/>
              )
            })
          }
        </ul>
    </div>
</>
  )
}

export default App