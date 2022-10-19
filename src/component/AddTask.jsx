import React from 'react'
import { useState } from "react";

const AddTask = ({addTask}) => {

const [plan,setplan]=useState("")
const [tarih, settarih] = useState("");
const [reminder,setreminder]=useState(false)


const handleSubmit =(e)=> {
    e.preventDefault();
    if(!plan){
        alert("please Enter Text");
        
    }else{
    addTask({ plan, tarih, reminder });
    setplan("");
    settarih("");
    setreminder(false)}
}


  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div class="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={plan}
          onChange={(e) => setplan(e.target.value)}
        />
      </div>

      <div class="form-control">
        <label>Day / Time</label>
        <input
          type="datetime-local"
          placeholder="Add Day & Time"
          value={tarih}
          onChange={(e) => settarih(e.target.value)}
        />
      </div>

      <input type="submit" value="SAVE TASK" className="btn btn-success" />
    </form>
  );
}

export default AddTask