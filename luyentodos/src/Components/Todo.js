import React from 'react'

import {  FaTrashAlt,FaPen} from "react-icons/fa";
const Todo = (props) => {
  const {task,toggleComplete,DeleteToDo,EditTodo}=props
    // const {task}=props
  return (
    <div className="Todo">
   <p onClick={()=>toggleComplete(task.id)} className={`${task.completed ? 'completed':""}`}>{task.task}</p>
     
      <div >
        <FaTrashAlt onClick={()=>DeleteToDo(task.id)}/>
        <FaPen onClick={()=>EditTodo(task.id)} />
        </div>
    </div>
  )
}

export default Todo
