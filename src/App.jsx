import React from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todoIcon from './assets/image/goal-svgrepo-com.svg'
import doingIcon from './assets/image/glowing-star-svgrepo-com.svg'
import doneIcon from './assets/image/check-mark-svgrepo-com.svg'
const App = () => {
  return (
    <div className='app'>
      <TaskForm />
      <main className='app-main'>
        <TaskColumn title="ToDo" icon={todoIcon} />
        <TaskColumn title="Doing" icon={doingIcon}/>
        <TaskColumn title="Done" icon={doneIcon}/>
      </main>
    </div>
  )
}

export default App