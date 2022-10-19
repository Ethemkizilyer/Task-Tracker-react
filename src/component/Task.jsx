import React from 'react'
 import { FaTimes } from "react-icons/fa";

const Task = ({task,silTask,degisReminder}) => {
        console.log(task.reminder);
  return (
    <div
      style={{}}
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={(e) => degisReminder(task.id)}
    >
      <div className='card'
        style={{
          border: "1px solid red",
          background: "white",
          textDecoration: task.reminder ? "line-through" : "",
        }}
      >
        <p>
          <span>{task.plan}</span>{" "}
          <span>
            <FaTimes
              style={{ color: "red" }}
              onClick={() => silTask(task.id)}
            />
          </span>
        </p>
        <p>{task.tarih} </p>
      </div>
    </div>
  );
}

export default Task