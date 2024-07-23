import React from 'react'
import './App.css'
import { useState } from 'react'

function App() {

  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState(" ");

  function handleChange(e){
    setNewTodo(e.target.value);
  }

  function addTask(){

    const newTask = {
      id: todo.length === 0? 1 : todo[todo.length-1].id + 1,
      taskName: newTodo,
      completed: false
    }

    setTodo([...todo, newTask]);
  }


function deleteTask(id){
  // setTodo(todo.filter((task) => {
  //   if(task === taskName){
  //     return false;
  //   }else{
  //     return true;
  //   }
  // }))

  setTodo(todo.filter((task) => task.id === id ? false : true))
}

function toggleComplete(id) {
  setTodo(todo.map(task => 
    task.id === id ? { ...task, completed: !task.completed } : task
  ));
}


  return (    
    <>
      <div className="todo">

        <b><h1>TO DO LIST PAGE</h1></b>

          <input onChange={handleChange}/>
          <button onClick={addTask}>Add Task</button>
        </div>

        <div className="list">
          <h1>LIST OF ALL TASKS</h1>
        {
          todo.map((task) => (
            <div 
              key={task.id} 
              style={{ 
                backgroundColor: task.completed ? 'rgba(144, 238, 144, 9.7)' : 'transparent', 
                width: '50%',
                height: '100px',
                marginLeft: '400px',
                borderRadius: '40px', 
                marginBottom: '10px' 
              }}
            >
              <h1>{task.taskName}</h1>
              <button className='completebtn' onClick={() => toggleComplete(task.id)}>
                {task.completed ? 'Completed' : 'Mark as Complete'}
              </button>
              <button className='deletebtn' onClick={() => deleteTask(task.id)}>x</button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
