import React from 'react'

const TaskForm = () => {
    return (
        <header className='app-header'>
            <form>
                <input type='text' className='task_input' placeholder='Enter Your Task' />
                <div className="task_form_bottom_line">
                    <button className="tag">Home</button>
                    <button className="tag">Work</button>
                    <button className="tag">Gym</button>
                    <button className="tag">Other</button>
                    <select name="" id="" className="task_status">
                        <option value="todo">To Do</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>
                    <button type='submit' className='task_submit'>+ Add Task</button>
                </div>
            </form>
        </header>
    )
}

export default TaskForm