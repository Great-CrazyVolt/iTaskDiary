import React, { useContext, useEffect, useState, useRef } from 'react'
import { Link } from "react-router-dom";
import TaskContext from '../context/TaskContext'

const NavBar = () => {
  const linkRef = useRef(null)
  
  const { userRole, signout } = useContext(TaskContext)
  const [role, setRole] = useState('')

  const toggleNavBar = () => {

    const match =  document.getElementsByClassName("navBar")
    for (let i = 0; i < match.length; i++) {
      match[i].classList.toggle('hidden')
    }
  }

  const logOut = (e) => {
    e.preventDefault()
    linkRef.current.click();
    signout()
  }

  useEffect(() => {
    setRole(userRole)
  }, [userRole])

  return (
    <div>
        <Link to="/signIn" className='hidden' ref={linkRef}> Enter </Link>
      <nav className="p-2 bg-gray-800">
        <div className="grid sm:grid-cols-8 text-white">
          
          <div className="sm:col-start-1 ">
            <Link type='button' className='px-6 py-2.5 rounded hover:bg-gray-900 text-white font-medium
              text-md' to="/"> iTaskDiary </Link>
          </div>

          <div className="block lg:hidden col-end-5 flex items-center">
            <button onClick={toggleNavBar} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
            </button>
          </div>
          {/* <div id="nav"> */}

          {role === 'admin' &&
      
            <div className="sm:col-start-2 col-start-1 navBar">
              <Link type='button' className='px-6 py-2.5 rounded hover:bg-gray-900 text-white font-medium \
                text-md' to="addTask" >Add Task</Link>
            </div>
            
          }

          {(role === 'admin' || role === 'guest') &&
            <div className={`sm:col-start-${role !== 'admin'? '2': '3'} col-start-1 navBar`}>
              <Link type='button' className='px-6 py-2.5 rounded hover:bg-gray-900 text-white font-medium \
                text-md' to="viewTasks" > View Task </Link>
            </div>
          }

          {role === ''? 
          <>
            <div className="sm:col-start-7 col-start-1 navBar">
              <Link type='button' className='px-4 sm:px-6 py-1.5 sm:py-2.5 ml-5 sm:mb-0 mb-2 sm:m-0 uppercase rounded bg-sky-600 hover:bg-sky-700 text-white font-medium \
                text-md' to="signIn"> Sign In </Link>
            </div>  

            <div className="sm:col-start-8 col-start-1 navBar">
              <Link type='button' className='px-4 sm:px-6 py-1.5 sm:py-2.5 ml-5 sm:mb-0 mb-1 sm:m-0 uppercase rounded bg-red-600 hover:bg-red-600 text-white font-medium \
                text-md' to="signUp"> Sign Up </Link>
            </div>
            </>
            
            : <div className="sm:col-start-8 col-start-1 navBar">
              <Link type='button' className='px-4 sm:px-6 py-1.5 sm:py-2.5 ml-5 sm:mb-0 mb-1 sm:m-0 uppercase rounded bg-red-600 hover:bg-red-600 text-white font-medium \
                text-md' to="signUp" onClick={logOut}> Sign Out </Link>
            </div>
          }


          {/* </div> */}
        </div>
      </nav>
    </div>
  )
}

export default NavBar
