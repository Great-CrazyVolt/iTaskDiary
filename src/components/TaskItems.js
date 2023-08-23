import React, {useContext, useState} from 'react'
// import {Link} from 'react-router-dom'
import TaskContext from '../context/TaskContext'
import { ref } from 'firebase/storage';
import { storage } from '../firebase'
import Modal from './Modal';

const TaskItems = ({Task, index}) => {
  const { deleteDocument, userRole } = useContext(TaskContext)

  const {updatedAt, createdAt, task ,url} = Task

  const [editButton, setEditButton] = useState(false)
  
  const handleEdit = () => {
    // console.log("Edit Current File")
    setEditButton(!editButton)
  }

  return (
    <div>
      
      <div className="px-5 flex justify-center mt-10 mb-5">
        <div className="border border-solid border-gray-300 block p-10 rounded-lg shadow-lg max-w-2xl sm:w-7/12 ">
                
        {editButton && <Modal editButton={editButton} handleEdit={handleEdit} task={task} id={Task.id}/>}
          <>
            {userRole === 'admin' && 
              <div className="relative">
                <button onClick={() => deleteDocument(Task.id)} className=' absolute inset-x-full -top-10 px-1.5 py-1 rounded-lg text-red-500 outline-none'><i className="fas fa-trash-alt fa-lg"></i> </button>
                <button onClick={() => handleEdit()} className=' absolute right-1 -top-10 px-1.5 py-1 rounded-lg text-sky-500 outline-none'><i className="far fa-edit fa-lg"></i> </button>
              </div>
            }
          
            <div className=" bg-orange-500 p-1.5 rounded-md mb-5">
              <h1 className='flex justify-center text-white font-medium text-xl'> Weak {index + 1} </h1>
            </div>

            <div className="grid grid-cols-4 gap-1 sm:gap-4 ">
              
              {/* <div className="col-span-2 font-medium text-xl flex justify-center text-rose-600">
                <h1> Subjects </h1>
              </div>
              
              <div className="col-span-2 font-medium text-xl flex justify-center text-rose-600">
                <h1> Description </h1>
              </div> */}

              {/* <span className='bg-cyan-400 font-medium px-2 py-2 rounded mr-2'> Assignment </span>  */}
              
              <div className=" col-span-4 sm:col-span-2 font-bold sm:font-medium text-lg sm:text-base text-sky-500 sm:text-black	">
                <h1>Database System</h1>
                <button onClick={() => handleEdit()} className=' absolute right-0 -top-10 px-1.5 py-1 rounded-lg text-sky-500 outline-none'><i className="las la-pencil-alt la-2x"></i> </button>
              </div>
              
              <div className="col-span-4 sm:col-span-2 sm:mb-1 sm:text-base font-semibold text-lg mb-3 ">
                <h1> {task.dbs} </h1>
              </div>

              <div className="col-span-4 sm:col-span-2 font-bold sm:font-medium text-lg sm:text-base text-sky-500 sm:text-black	">
                <h1>System and Network Administration</h1>
              </div>
              
              <div className="col-span-4 sm:col-span-2 sm:mb-1 sm:text-base font-semibold text-lg mb-3">
                <h1> {task.sna} </h1>
              </div>

              <div className="col-span-4 sm:col-span-2 font-bold sm:font-medium text-lg sm:text-base text-sky-500 sm:text-black	">
                <h1>Software Engineering </h1>
              </div>
              
              <div className="col-span-4 sm:col-span-2 sm:mb-1 sm:text-base font-semibold text-lg mb-3">
                <h1> {task.se} </h1>
              </div>

              <div className="col-span-4 sm:col-span-2 font-bold sm:font-medium text-lg sm:text-base text-sky-500 sm:text-black	">
                <h1>Knowledge Base System</h1>
              </div>
              
              <div className="col-span-4 sm:col-span-2 sm:mb-1 sm:text-base font-semibold text-lg mb-3 ">
                <h1> {task.kbs} </h1>
              </div>

              <div className="col-span-4 sm:col-span-2 font-bold sm:font-medium text-lg sm:text-base text-sky-500 sm:text-black	">
                <h1>Organizational Behaviour</h1>
              </div>
              
              <div className="col-span-4 sm:col-span-2 sm:mb-1 sm:text-base font-semibold text-lg mb-3">
                <h1> {task.ob} </h1>
              </div>
              
              <div className="col-span-4 sm:col-span-2 font-bold text-xl sm:text-base text-red-700 ">
                <h1>Attachments <i className="fas fa-paperclip"></i></h1>
              </div>
              
              <div className=" col-span-4 sm:col-span-2 sm:mb-1 mb-3 p-1 text-white sm:text-base text-lg rounded bg-gray-800">
                {url.length ===0 ? <li>No Document to Show</li>
                : url.map((fileUrl, index) => {
                  
                    return  <li key={index} className=' underline decoration-sky-500 underline-offset-2 decoration-1  '>
                              <a target='_blank' href={fileUrl}> {ref(storage, url[index]).name}  </a>
                            </li>   
                })}
              </div>

              <div className="col-span-6 sm:col-span-2">
                <h1 className='bg-cyan-500 p-2 flex justify-center mt-3 text-white font-medium text-sm rounded'>{(createdAt.toDate()).toDateString()} {(createdAt.toDate()).toLocaleTimeString('en-US')} </h1>
              </div>

            <div className="col-span-6 sm:col-end-5 sm:col-span-2">
              <h1 className='bg-rose-600 p-2 flex justify-center mt-3 text-white font-medium text-sm rounded'> {(updatedAt.toDate()).toDateString()} {(updatedAt.toDate()).toLocaleTimeString('en-US')}</h1>
            </div>
              
            </div>
          </>
        
        </div>
      </div>
    </div>
  )
}

export default TaskItems
