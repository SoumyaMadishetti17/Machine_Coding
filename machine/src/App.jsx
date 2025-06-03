import './App.css'
import Archive from './components/Archive'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import TodoAdarsha from './components/TodoAdarsha'
import Todos from './components/Todos'
import { Route,Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>        
        <Route path='/' element={<TodoAdarsha/>} />
        <Route path='/archive' element={<Archive/>} />
        
      </Routes>
      
    </>
  )
}

export default App
