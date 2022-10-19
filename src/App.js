import './App.css';
import AddTask from './component/AddTask'
import Button from './component/Button'
import { useState,useEffect } from "react";
import Tasks from './component/Tasks';


const getLocalStorage = () => {
  let tasks = localStorage.getItem("tasks");
  if (tasks) {
    return JSON.parse(localStorage.getItem("tasks"));
  } else {
    return [];
  }
};

function App() {

  const [tasks, setTasks] = useState(getLocalStorage());
const [ac,kapa]= useState(false)


  
  const silTask=(id)=> {
    setTasks(tasks.filter(task=>task.id!==id))
  }

  const degisReminder =(id)=> {
   
    setTasks(tasks.map((task)=> task.id===id ? {...task,reminder:!task.reminder} : task))
  
  }

  const addTask =(task)=> {
    const id =Math.floor(Math.random()*1000);

    const newTask ={id,...task}
    setTasks([...tasks,newTask]); 
     console.log(newTask);
     console.log(tasks)
     console.log(task)
  }

console.log(tasks.length);



  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);



  return (
    <div className="App container">
      <div>
        <h2>TASK TRACKER</h2>
        <Button
          title={ac ? "CLOSE" : "OPEN"}
          color={ac ? "red" : "green "}
          onClick={() => kapa(!ac)}
        />
      </div>
      {ac && <AddTask addTask={addTask} tasks={tasks} />}
      {tasks.length ? (
        <Tasks
          tasks={tasks}
          degisReminder={degisReminder}
          silTask={silTask}
        />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
