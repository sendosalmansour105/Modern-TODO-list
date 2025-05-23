import React from 'react'
import './TaskColumn.css'
import todo from '../assets/image/goal-svgrepo-com.svg'
import TaskCard from './TaskCard'

const TaskColumn = ({ title, icon, tasks, status,handleDelete }) => {

  return (
    <section className="task-column">
      <h2 className='task_column_heading'>
        <img src={icon} alt="" className='task_column_icon' />{title}</h2>

      {
        tasks.map((task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
        )
      }

    </section>
  )
}

export default TaskColumn