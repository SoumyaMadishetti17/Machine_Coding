import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TodoAdarsha = ({archives,setarchives}) => {
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
    const toggleTodo=(id)=>{
        setTodos((prev)=>prev.map((ele)=>ele.id===id ? {...ele,completed:!ele.completed}:ele))
    }
    const del=(id)=>{
        setTodos((prev)=>prev.filter((ele)=>ele.id!==id))
    }
    const archive=(id)=>{
        const item= todos.find((ele)=>ele.id===id)
        setarchives((prev)=>[...prev,item])
        setTodos((prev)=>
            prev.filter((ele)=>
                ele.id!==id
        ))
    }
  return (

    <div>
        <div className='todo-flex'>
            <div className='Todo-box'>
                <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Enter Todo Name...' />
                <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <button onClick={add}>Add Todo</button>
            </div>
            <table className='Todo-table' style={{border:'1px solid white'}}>
                <thead>
                    <tr>
                        <th>Name </th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Archive</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((ele)=>(
                        <tr>
                            <td> {ele.text} </td>
                            <td> {ele.Priority} </td>
                            <td> <button onClick={()=>toggleTodo(ele.id)}>{ele.completed ? 'Completed' : 'Pending'}</button>  </td>
                            <td> <button onClick={()=>archive(ele.id)}>Archive</button>  </td>
                            <td> <button onClick={()=>del(ele.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default TodoAdarsha