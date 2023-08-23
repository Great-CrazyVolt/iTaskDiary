import './App.css';
import React, { useEffect } from 'react'
import Home from './components/Home';
import TaskState from './context/TaskState';


function App() {
  
  return (
    <div >
      <TaskState>
        <Home/>
      </TaskState>    
    </div>
  );
}

export default App;
