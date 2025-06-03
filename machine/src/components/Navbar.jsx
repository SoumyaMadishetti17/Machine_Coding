import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const nav=useNavigate()

  return (
    <div>
        <nav>
            <div onClick={()=>nav('/')}>Home</div>
            <div onClick={()=>nav('/archive')}>Archive</div>
        </nav>
    </div>
  )
}

export default Navbar