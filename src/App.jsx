import React, { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todoIcon from './assets/image/goal-svgrepo-com.svg'
import doingIcon from './assets/image/glowing-star-svgrepo-com.svg'
import doneIcon from './assets/image/check-mark-svgrepo-com.svg'

const App = () => {
  const [tasks, setTasks] = useState([])

const handleDelete =(taskIndex) =>{
 const newTasks = tasks.filter((task , index) => index !== taskIndex)
 setTasks(newTasks)
}

  return (
    <div className='app'>
      <TaskForm setTasks={setTasks} />
      <main className='app-main'>
        <TaskColumn
          title="ToDo"
          icon={todoIcon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete} />

        <TaskColumn
          title="Doing"
          icon={doingIcon}
          tasks={tasks}
          status="doing" 
          handleDelete={handleDelete} />
        <TaskColumn
          title="Done"
          icon={doneIcon}
          tasks={tasks}
          status="done" 
          handleDelete={handleDelete} />
      </main>
    </div>
  )
}

export default App