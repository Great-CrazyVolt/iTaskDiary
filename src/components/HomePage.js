import React from 'react'
import {Link} from 'react-router-dom'
import iNoteBook5 from '../pictures/iNoteBook5.gif'

const HomePage = () => {
    return (
        <div className='relative'>
            <div className="grid grid-cols-2 gap-2 absolute inset-0 flex items-center justify-center mt-10">
                <div className="col-span-2 sm:col-span-1">
                    <div className='mx-10 sm:mx-20 space-y-4 mt-10 sm:mt-16'>
                    
                        <h2  className="text-2xl sm:text-4xl font-bold text-black " style={{'fontFamily': 'Trebuchet MS '}} 
                            >Welcome to CrazyVolt - <span className='text-sky-600'>iTaskDiary</span> Web App</h2>

                        <p className=' text-xl font-semibold text-slate-600'>This application is for managing tasks which you get from School/College/University</p>

                        <Link type='button' className=' px-4 sm:px-20 py-1.5 sm:py-2.5 uppercase rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium
                            text-md' to="signUp"> Get Started Now </Link>
                    </div>
                </div>
                
                <div className="col-span-2 sm:col-start-2 flex justify-center mt">
                    <img className='w-9/12 rounded' src={iNoteBook5} alt="iNoteBook" />
                </div>
            </div>
        </div>
    )
}

export default HomePage
