import React, {useContext} from 'react'
import AddTask from './AddTask'
import NavBar from './NavBar'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Task from './Task';
import SignUp from './SignUp';
import SignIn from './SignIn';
import TaskContext from '../context/TaskContext'
import HomePage from './HomePage';

const Home = () => {
    const { userRole } = useContext(TaskContext)
    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <Routes>

                    <Route path="/" element={<HomePage />} />
                    <Route path="addTask" element={<AddTask />} />
                    {userRole !== '' &&
                        <Route path="viewTasks" element={<Task />} />
                    }
                    <Route path="signUp" element={<SignUp />} />
                    <Route path="signIn" element={<SignIn />} />
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Home
