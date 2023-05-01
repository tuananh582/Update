import React,{useState} from 'react'

const EditToDoForm  = (props) => {
    const {EditTodo,task}=props
    const [Value,SetValue]=useState("")
    const HandleChange=(e)=>{
        SetValue(e.target.value)
    }
    const HandleSubmit=(e)=>{
        e.preventDefault()
        EditTodo(Value,task.id)
        SetValue("")
    }
  return (
    <div>
      <form className="TodoForm" onSubmit={HandleSubmit} >
    <input type="text" className="todo-input" onChange={HandleChange} placeholder='Update Task' value={Value}  />
    <button type='submit' className="todo-btn">Update Task </button>
      </form>
    </div>
  )
}

export default EditToDoForm
