import React, { useRef, useState } from 'react'

const StopWatch = () => {
    const [count,setcount]=useState(0)
    const timeref=useRef(null) // reference to setInterval ID

    const start=()=>{
        timeref.current=setInterval(()=>{
            setcount((prev)=>prev+1)
        },200)
    }
    const pause=()=>{
        clearInterval(timeref.current)
        timeref.current=null
    }
    const reset=()=>{
        pause()
        setcount(0)
    }
  return (
    <div>
        <h1>StopWatch</h1>
        <h2>Time: {count} secs</h2>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>

    </div>
  )
}

export default StopWatch