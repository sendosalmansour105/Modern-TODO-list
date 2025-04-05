import React from 'react'
import './TaskColumn.css'
import todo from '../assets/image/goal-svgrepo-com.svg'
const TaskColumn = (props) => {
  return (
    <section className="task-column">
        <h2 className='task_column_heading'>
            <img src={props.icon} alt="" className='task_column_icon' />{props.title}</h2>
    </section>
  )
}

export default TaskColumn