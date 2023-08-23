import React, { useContext, useState, useRef } from 'react'
import TaskContext from '../context/TaskContext'
import Footer from './Footer'

const AddTask = () => {
    const {addTask, uploadFile, url, progress} = useContext(TaskContext)

    const fileInput = useRef(null);
    
    const [task, setTask] = useState({sna: '', dbs: '', se: '', kbs: '', ob: ''})
    
    const onChange = (e) => {
        setTask({...task, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const file = [...fileInput.current.files]
        
        const promises = []
        file.forEach( async (element) => {
            promises.push(uploadFile(element))
        })

        Promise.all(promises).then((fileURLS)=>{
            //Once all the promises are resolved, you will get the urls in a array.
            addTask(task, fileURLS)
            setTask({sna: '', dbs: '', se: '', kbs: '', ob: ''})

        })        
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div className="sm:container px-5 my-5 sm:mx-auto sm:mt-10">
                <div className="border border-solid border-gray-300 shadow-lg rounded-md">
                    <div className="grid grid-cols-6 gap-6 m-6 sm:p-5">
                        
                        <div className='col-start-2 col-end-6 '>
                            <p className='p-2 rounded text-center bg-sky-500 text-white sm:text-xl font-bold'> Add New Task </p>
                        </div>
                        
                        <div className="col-span-6 sm:col-start-2 sm:col-end-6 ">
                            <label className='form-label text-gray-700 text-base font-medium'> SNA </label>
                            
                            <input type="text" className='block w-full px-3 py-1.5 border border-gray-300
                                rounded-md focus:text-gray-700 focus:bg-white focus:border-blue-700 
                                focus:outline-cyan-500' name="sna" value={task.sna} onChange={onChange}/>
                        </div>

                        <div className="col-span-6 sm:col-start-2 sm:col-end-6 ">
                            <label className='form-label text-gray-700 text-base font-medium'> Database System </label>
                            
                            <input type="text" className='block w-full px-3 py-1.5 border border-gray-300 
                                rounded-md focus:text-gray-700 focus:bg-white focus:border-blue-700 
                                focus:outline-cyan-500' name='dbs' value={task.dbs} onChange={onChange} />
                        </div>

                        <div className="col-span-6 sm:col-start-2 sm:col-end-6 ">
                            <label className='form-label text-gray-700 text-base font-medium'> Knowledge Base System </label>
                            
                            <input type="text" className='block w-full px-3 py-1.5 border border-gray-300
                                rounded-md focus:text-gray-700 focus:bg-white focus:border-blue-700 
                                focus:outline-cyan-500' name='kbs' value={task.kbs} onChange={onChange} />
                        
                        </div>

                        <div className="col-span-6 sm:col-start-2 sm:col-end-6 ">
                            <label className='form-label text-gray-700 text-base font-medium'> Software Engineering </label>
                            
                            <input type="text" className='block w-full px-3 py-1.5 border border-gray-300
                            rounded-md focus:text-gray-700 focus:bg-white focus:border-blue-700 
                            focus:outline-cyan-500 ' name="se" value={task.se} onChange={onChange}/>
                        
                        </div>

                        <div className="col-span-6 sm:col-start-2 sm:col-end-6 ">
                            <label className='form-label text-gray-700 text-base font-medium'> Organizational Behaviour </label>
                            
                            <input type="text" className='block w-full px-3 py-1.5 border border-gray-300
                                rounded-md focus:text-gray-700 focus:bg-white focus:border-blue-700 
                                focus:outline-cyan-500' name='ob' value={task.ob} onChange={onChange} />
                        
                        </div>
                        {/* <div className="col-span-6 sm:col-span-3">
                            <label className='form-label text-gray-700 text-base font-medium'> Country </label>
                            <select name="" id="" className='block w-full px-3 py-1.5 border border-gray-300 rounded-md focus:text-gray-700 focus:bg-white focus:border-blue-700 focus:outline-cyan-500  '>
                                <option value=""> Pakistan </option>
                                <option value=""> United kingdom </option>
                            </select>
                        </div> */}

                        

                        {/* <div className='col-start-3 col-span-3'>
                        
                        <label for="price" className="block text-sm font-medium text-gray-700">Price</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                
                                <input type="text" name="price" id="price" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00"/>
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                <label for="currency" className="sr-only">Currency</label>
                                <select id="currency" name="currency" className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                                    <option>USD</option>
                                    <option>CAD</option>
                                    <option>EUR</option>
                                </select>
                                </div>
                            </div>
                        </div> */}

                    
                        <input type="file" className="col-span-6 sm:col-start-2 sm:col-end-6
                            block w-full text-sm text-gray-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100
                        "multiple={true} ref={fileInput}/>

                        {/* <div className="col-span-2 sm:col-start-4 sm:col-end-5
                            bg-blue-600 text-white rounded flex justify-center">
                            <button type='button' onClick={handleFileUpload}> Upload </button>
                        </div> */}
                    </div>
                    
                    <div className='flex justify-center mb-7'>
                            <button type="submit" className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs 
                                leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg 
                                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 
                                active:shadow-lg transition duration-150 ease-in-out"> Submit </button>
                    </div>
                    {/* <div className='flex justify-center mb-7'>
                            <button type="button" className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs 
                                leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg 
                                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 
                                active:shadow-lg transition duration-150 ease-in-out" onClick={handleFileUpload}> Upload </button>
                    </div> */}
                </div>
            </div>
            </form>
        </div>

    //     <table className='flex justify-around mt-5 mb-5'>
    //     <tr>
    //         <td className=''> <label className='form-label text-gray-700 text-lg font-medium'>Making a Container </label>   </td>
    //         <input type="text" className='block w-full px-3 py-1 border border-solid border-gray-500 rounded-md focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
    //     </tr>
    //     <tr>
    //         <td className=''> <label className='form-label text-gray-700 text-lg font-medium'>Making a Container</label> </td>
    //     </tr>
    // </table>

        // flex justify-center form-label text-gray-700 text-lg font-medium
    
    //     <div className="flex justify-center">
    //     <div className="mb-3 xl:w-96">
    //       <label for="exampleText0" className="form-label inline-block mb-2 text-gray-700" >Text input </label>
    //       <input
    //         type="text"
    //         className="block w-full px-3 py-1.5 font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    //         id="exampleText0"
    //         placeholder="Text input"
    //       />
    //     </div>
    //   </div>
    )
}

export default AddTask
