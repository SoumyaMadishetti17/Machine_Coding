import React, { useState } from 'react'

const TodoAdarsha = () => {
    const [input,setInput]=useState('')
    const [priority,setPriority]=useState('Low')
    const [todos,setTodos]=useState([])
    const add=()=>{
        const item={
            id:Math.random(),
            text:input,
            Priority:priority,
            completed:false
        }
        setTodos((prev)=>[...prev,item])
        setInput('')
        setPriority('Low')
    }
  return (
    <div>
        <div>
            <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Enter Todo Name...' />
            <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <button onClick={add}>Add Todo</button>
        </div>
        <ul>
            {todos.map((ele)=>(
                <li>
                    <input type="checkbox" />
                    <span>{ele.text} </span>
                    <span>{ele.Priority} </span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoAdarsha