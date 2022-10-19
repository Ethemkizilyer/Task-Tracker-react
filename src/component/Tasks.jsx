import React from 'react'
import Task from './Task'

const Tasks = ({tasks,silTask,degisReminder}) => {
  return (
    <div>
        {tasks.map((task)=>(
            <Task key={task.id}  task={task} degisReminder={degisReminder} silTask={silTask}/>
        ))}
    </div>
  )
}

export default Tasks