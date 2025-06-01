import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)

    const add=()=>{
        setCount((prev)=>prev+1)
    }
    const dec=()=>{
        setCount((prev)=>prev-1)
    }
    const reset=()=>{
        setCount((prev)=>prev=0)
    }
  return (
    <div>
        <h1>Counter App</h1>
        <h2>Count: {count} </h2>
        <div>
            <button onClick={add}>Add </button>
            <button onClick={dec}>Dec </button>
            <button onClick={reset}>Reset </button>
        </div>
    </div>
  )
}

export default Counter