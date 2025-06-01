import React, { useRef, useState } from 'react'

const Todos = () => {
    const [input,setInput]=useState('')
    const [data,setData]=useState([])
    const [editId,seteditId]=useState(null)
    const ipRef=useRef(null)

    const addorUpdate=()=>{
        if(editId!==null){
            setData((prev)=>prev.map((ele)=>ele.id===editId? {...ele,text:input}:ele))
            seteditId(null)
            setInput('')
        }else{
            const item={
                id:Math.random(),
                text:input,
                completed:false
            }
            setData((prev)=>[...prev,item])
            setInput('')
        }
        
    }
    const del=(id)=>{
        setData((prev)=>prev.filter((ele)=>ele.id!==id))
    }
    const toggle=(id)=>{
        setData((prev)=>
            prev.map((ele)=>
                ele.id===id? {...ele,completed:!ele.completed}:ele
        ))
    }
    const edit=(id)=>{
        seteditId(id)
        const todo=data.find((ele)=>ele.id===id)
        setInput(todo.text)
        setTimeout(()=>{
            ipRef.current?.focus()
        },0)
    }
  return (
    <div>
        <h1>Todo App</h1>
        <div>
            <input ref={ipRef} value={input} onChange={(e)=>setInput(e.target.value)} type="text" />
            <button onClick={()=>addorUpdate()}>{editId?'Update Todo' : 'Add Todo'}</button>
        </div>
        <ul>
            {data.map((ele)=>(
                <li>
                    <input type="checkbox" checked={ele.completed} onChange={()=>toggle(ele.id)} />
                    <span className={ele.completed?'completed':''}>{ele.text} </span>
                    <button onClick={()=>del(ele.id)}>Delete</button>
                    <button onClick={()=>edit(ele.id)}>Edit Todo</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todos