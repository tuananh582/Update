import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './TodoForm'
import Todo from './Todo';
import EditToDoForm from './EditToDoForm';
const TodoWrapper = () => {
    const [Todos,SetToDos]=useState([])
    const addTodo=todo=>{
        SetToDos([...Todos,{id:uuidv4(),task:todo,completed:false,isEdting:false}])
        console.log(Todos)
    }
    const toggleComplete=id=>{
      SetToDos(Todos.map(todo=>todo.id===id?{...todo,completed:!todo.completed}:todo))
    }
    const DeleteToDo =id=>{
      SetToDos(Todos.filter(todo=>todo.id!==id))
    }
    const EditTodo=id=>{
      SetToDos(Todos.map(todo=>todo.id===id ?{
        ...todo,isEdting:!todo.isEdting}:todo
      ))
    }
    const EditTask =(task,id)=>{
      SetToDos(Todos.map(todo=>todo.id===id?{
        ...todo,task,isEdting:!todo.isEdting}:todo
      ))
    }
  return (
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>
        <TodoForm  addTodo={addTodo}/>

    
      
        {Todos.map((todo,index)=>(
          todo.isEdting ? (
            <EditToDoForm EditTodo={EditTask} task = {todo} />
          ):(

            <Todo task={todo} key={index} toggleComplete={toggleComplete} DeleteToDo={DeleteToDo} EditTodo={EditTodo} />
          )

        ))}
    </div>
  )
}

export default TodoWrapper
