import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count,setcount]=useState(0)
    
    const add=()=>{
        setcount(count+1)
    }
    const dec=()=>{
        setcount(count-1)
    }
    const reset=()=>{
        setcount(0)
    }

  return (
    <div>
        <h1>Counter</h1>
        <h2>Count: {count} </h2>
        <button onClick={add}>Add</button>
        <button onClick={dec}>Dec</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter