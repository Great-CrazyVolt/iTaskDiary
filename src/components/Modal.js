import React, {useRef, useEffect, useState, useContext} from 'react'
import TaskContext from '../context/TaskContext'

{/* <main className="antialiased bg-gray-200 text-gray-900 font-sans overflow-x-hidden">
                <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
                    <div className="bg-black opacity-25 w-full h-full absolute z-10 inset-0"></div> */}

const Modal = ({editButton, handleEdit, task, id}) => {
    const { updateTask } = useContext(TaskContext)
    
    const [presentTask, setPresentTask] = useState({sna: task.sna, dbs: task.dbs, kbs: task.kbs, se: task.se, ob: task.ob})
    
    const onChange = (e) => {
        setPresentTask({...presentTask, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        updateTask(presentTask, id)
        handleEdit()
    }
    return (
        <div>
            
            <div id="authentication-modal" className={`${!editButton && 'hidden'} flex overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0 `}>
                <div className="relative px-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        
                        <div className="flex justify-end p-2">
                            <button onClick={() => handleEdit()} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                            </button>
                        </div>
                        
                        <form onSubmit={onSubmit} className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">System And Network Administration</label>
                                <input type="text" name="sna" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={presentTask.sna} onChange={onChange} required/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Database System</label>
                                <input type="text" name="dbs" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={presentTask.dbs} onChange={onChange} required/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Knowledge Base System</label>
                                <input type="text" name="kbs" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={presentTask.kbs} onChange={onChange} required/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Software Engineering</label>
                                <input type="text" name="se" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={presentTask.se} onChange={onChange} required/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Organizational Behaviour</label>
                                <input type="text" name="ob" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={presentTask.ob} onChange={onChange} required/>
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase">Update</button>
                            
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Modal
