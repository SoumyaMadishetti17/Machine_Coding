import React, { useState } from 'react'

const P1 = () => {
    const list=['apple','leechi']
    const [data,setData]=useState(list);
    const [input,setInput]=useState('')
    const add=()=>{
        setData([...data,input])
        setInput('')        
    }
  return (
    <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        <button onClick={add}>Add</button>
        <ul>
            {data.map((ele,i)=>(
                <li key={i}>{ele} </li>
            ))}
        </ul>
    </div>
  )
}

export default P1