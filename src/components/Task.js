import React, {useContext} from 'react'
import TaskContext from '../context/TaskContext'
import Footer from './Footer'
import TaskItems from './TaskItems'

const Task = () => {
    
    const {Task} = useContext(TaskContext)
    return (
        <div>
            {Task.map((task, index) => {
                return <TaskItems key={task.id} Task={task} index={index} />
            })}        
            <Footer/>
        </div>
    )
}

export default Task
