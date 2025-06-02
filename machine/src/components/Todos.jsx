import React, { useState } from 'react'

const Todos = () => {
    const [input,setInput]=useState('')
    const [todos,setTodos]=useState([])
    const [editId,setEditId]=useState(null)

    const addorUpdate=()=>{
        if(editId!==null){
            setTodos((prev)=>prev.map((ele)=>ele.id===editId? {...ele,text:input}:ele))
            setEditId(null)
            setInput('')
        }else{
            const item={
                id:Math.random(),
                text:input,
                completed:false
            }
            setTodos((prev)=>[...prev,item])
            setInput('')
        }
    }
    const del=(id)=>{
        setTodos((prev)=>prev.filter((ele)=>ele.id!==id))
    }
    const toggleComplete=(id)=>{
        setTodos((prev)=>prev.map((ele)=>ele.id===id ? {...ele,completed:!ele.completed}:ele))        
    }
    const editTodo=(id)=>{
        setEditId(id)
        const todo=todos.find((ele)=>ele.id===id)
        setInput(todo.text)
    }
  return (
    <div>
        <h1>Todo App</h1>
        <div>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
            <button onClick={addorUpdate}>{editId ?'Update Todo': 'Add Todo'}</button>
        </div>
        <div>
            {todos.map((ele)=>(
                <li>
                    <input type="checkbox" checked={ele.completed} onChange={()=>toggleComplete(ele.id)} />
                    <span className={ele.completed ? 'completed':''}>{ele.text} </span>
                    <button onClick={()=>del(ele.id)}>Delete</button>
                    <button onClick={()=>editTodo(ele.id)}>Edit Todo</button>
                </li>
            ))}
        </div>
    </div>
  )
}

export default Todos