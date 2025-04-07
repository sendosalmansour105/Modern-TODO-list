import React, { useState } from 'react'
import './TaskForm.css'
import Tag from './Tag'
const TaskForm = ({setTasks}) => {
    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: [],
    })
    const handleChange = (e) => {
        // const name = e.target.name;
        // const value = e.target.value
        // console.log(name, value);
        const { name, value } = e.target;
        setTaskData(prev => {
            return { ...prev, [name]: value }
        })
    }
    const selectTag = (tag) => {
        if (taskData.tags.some(item => item === tag)) {
            const filterTags = taskData.tags.filter(item => item !== tag)
            setTaskData((prev) => {
                return { ...prev, tags: filterTags }
            })
        }
        else {
            setTaskData((prev) => {
                return { ...prev, tags: [...prev.tags, tag] }
            })
        }

    }
    const checkTag = (tag) => {
        return taskData.tags.some(item => item === tag)
    }
    // console.log(taskData.tags);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(taskData);
        setTasks((prev) =>{
            return [...prev , taskData]
        })
        setTaskData({
            task: "",
            status: "todo",
            tags: [],
        })
    }


    // const [task, setTask] = useState("")
    // const [status, setStatus] = useState("todo")
    // const handleTaskChange = (e) => {
    //     setTask(e.target.value)
    // }
    // const handleStatusChange = (e) => {
    //     setStatus(e.target.value)
    // }
    // console.log(task , status);
    return (
        <header className='app-header'>
            <form onSubmit={handleSubmit}>
                <input type='text'
                value={taskData.task}
                 className='task_input'
                    placeholder='Enter Your Task'
                    name='task'
                    onChange={handleChange} />
                <div className="task_form_bottom_line">
                    <div>
                        <Tag tagName="Home" selectTag={selectTag}
                            selected={checkTag("Home")} />
                        <Tag tagName="Work" selectTag={selectTag}
                            selected={checkTag("Work")} />
                        <Tag tagName="Gym" selectTag={selectTag}
                            selected={checkTag("Gym")} />
                        <Tag tagName="Other" selectTag={selectTag}
                            selected={checkTag("Other")} />
                    </div>
                    <div>
                        <select value={taskData.status} name="status" id="" className="task_status"
                            onChange={handleChange}>
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