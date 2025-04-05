import React from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
const App = () => {
  return (
    <div className='app'>
    <TaskForm />
      <main className='app-main'>
        <section className="task-column">section 1</section>
        <section className="task-column">section 1</section>
        <section className="task-column">section 1</section>
      </main>
    </div>
  )
}

export default App