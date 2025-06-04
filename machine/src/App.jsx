import { useState } from 'react'
import './App.css'
import Archive from './components/Archive'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import TodoAdarsha from './components/TodoAdarsha'
import Todos from './components/Todos'
import { Route,Routes } from 'react-router-dom'
import AutoSearchBar from './components/AutoSearchBar'

function App() {
  const [archives,setarchives]=useState([])

  return (
    <>
      {/* <Navbar/>
      <Routes>        
        <Route path='/' element={<TodoAdarsha archives={archives} setarchives={setarchives} />} />
        <Route path='/archive' element={<Archive archives={archives} />} />
        
      </Routes> */}
      <AutoSearchBar/>
    </>
  )
}

export default App
