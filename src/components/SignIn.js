import React, {useContext, useState, useRef, useEffect} from 'react'
import TaskContext from '../context/TaskContext'
import { Link } from "react-router-dom";


const SignUp = () => {
    const linkRef = useRef(null)

    const { loginUser } = useContext(TaskContext)
    const [authentication, setAuthentication] = useState({email: '', password: ''})

    const onChange  = (e) => {
        setAuthentication({...authentication, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setAuthentication({email: '', password: ''})

        const err = await loginUser(authentication)
        checkError(err)
    }

    const checkError = (err) => {

        if(err !== undefined){
            alert(err.message)
            return
        }

        else{
            alert("Loged in Successfully")
            linkRef.current.click()
        }
    }
    
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <Link to="/viewTasks" className='hidden' ref={linkRef}> Enter </Link>

                <div className=" px-5 my-5 sm:mx-auto mt-10 sm:max-w-prose ">
                    <div className="border border-solid border-gray-300 shadow-lg rounded-md ">
                        <div className="grid grid-cols-6 gap-6 m-6 sm:p-5 ">
                            
                            <div className='col-start-2 col-end-6'>
                                <p className='p-2 rounded text-center bg-sky-600 bg-blue-600 uppercase text-white font-medium  
                                    leading-tight'> Sign In </p>
                            </div>

                            <div className="col-span-6 sm:col-start-2 sm:col-end-6">
                                <label className='form-label text-gray-700 text-base font-medium'> Email </label>
                                
                                <input type="text" className='block w-full px-3 py-1.5 border border-gray-300
                                    rounded-md focus:text-gray-700 focus:bg-white focus:border-blue-700 
                                    focus:outline-cyan-500' name="email" value={authentication.email} onChange={onChange}/>
                            </div>

                            <div className="col-span-6 sm:col-start-2 sm:col-end-6">
                                <label className='form-label text-gray-700 text-base font-medium'> Password </label>
                                
                                <input type="password" className='block w-full px-3 py-1.5 border border-gray-300
                                    rounded-md focus:text-gray-700 focus:bg-white focus:border-blue-700 
                                    focus:outline-cyan-500' name="password" value={authentication.password} onChange={onChange}/>
                            </div>

                            <div className='col-start-2 col-span-4 sm:col-start-3 sm:col-span-2 flex justify-center '>
                                <button type="submit" className="px-6 py-2.5 bg-sky-600 text-white font-medium text-xs 
                                    leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg 
                                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 
                                    active:shadow-lg transition duration-150 ease-in-out ">Log In </button>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp
