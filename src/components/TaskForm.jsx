import React from 'react'
import './TaskForm.css'
import Tag from './Tag'
const TaskForm = () => {
    return (
        <header className='app-header'>
            <form>
                <input type='text' className='task_input  ' placeholder='Enter Your Task' />
                <div className="task_form_bottom_line">
                    <div>
                        <Tag tagName="Home"/>
                        <Tag tagName="Work"/>
                        <Tag tagName="Gym"/>
                        <Tag tagName="Other"/>
                    </div>
                    <div>
                        <select name="" id="" className="task_status">
                            <option value="todo">To Do</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>
                        <button type='submit' className='task_submit'>+ Add Task</button>
                    </div>
                </div>
            </form>
        </header>
    )
}

export default TaskForm