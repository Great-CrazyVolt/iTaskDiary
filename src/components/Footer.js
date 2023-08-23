import React from 'react'
import fiverr from './pictures/fiverr.png'
const Footer = () => {
    return (
    <div>
      <footer className="text-center bg-gray-100">
        <div className="sm:grid sm:grid-cols-3 sm:gap-2 p-5">
          <div className="flex justify-center sm:col-start-1 ">
            
            <a href="#!" className="mr-6 sm:mr-9 text-gray-700 hover:text-red-500 hover:text-xl">
              <i className="fab fa-google"></i>
            </a>

            <a href="https://www.facebook.com/profile.php?id=100004724505124" target='_blank' className="mr-6 sm:mr-9 text-gray-700 hover:text-red-500 hover:text-xl">
              <i className="fab fa-facebook-f"></i>
            </a>
            
            <a href="https:///www.instagram.com/__crazyvolt" target='_blank' className="mr-6 sm:mr-9 text-gray-700 hover:text-red-500 hover:text-xl">
              <i className="fab fa-instagram"></i>
            </a>
            
            <a href="#!" className="mr-6 sm:mr-9 text-gray-700 hover:text-red-500 hover:text-xl">
              <i className="fab fa-twitter"></i>
            </a>
            
            <a href="#!" className="mr-6 sm:mr-9 text-gray-800 hover:text-red-500 hover:text-xl">
              <i className="fab fa-github"></i>
            </a>
            
            <a href="mailto:anas.krazy@gmail.com? subject=Need Help" target='_blank' className="text-gray-600 hover:text-red-500 hover:text-xl">
              <i className="fab fa-linkedin-in"></i>
            </a>
            
          </div>

          <div className="mt-3 sm:mt-0 sm:col-start-3">
            <h1 className='text-gray-800 font-semibold'>© 2022 
            <span className="text-gray-800 font-bold" href="https://tailwind-elements.com/"> CrazyVolt. </span>
             All rights reserved </h1> 
          </div>
        </div>
      </footer>
    </div>
    )
}

export default Footer
