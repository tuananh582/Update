import React,{useState} from 'react'

const TodoForm = (props) => {
    const {addTodo}=props
    const [Value,SetValue]=useState("")
    const HandleChange=(e)=>{
        SetValue(e.target.value)
    }
    const HandleSubmit=(e)=>{
        e.preventDefault()
        addTodo(Value)
        SetValue("")
    }
  return (
    <div>
      <form className="TodoForm" onSubmit={HandleSubmit} >
    <input type="text" className="todo-input" onChange={HandleChange} placeholder='what is the task today ' value={Value}  />
    <button type='submit' className="todo-btn">Add Task </button>
      </form>
    </div>
  )
}

export default TodoForm
