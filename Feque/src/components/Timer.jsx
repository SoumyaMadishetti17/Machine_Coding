import React, { useEffect, useState } from 'react'

const formatTime = (totalSeconds) => {
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const secs = String(totalSeconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };
const Timer = () => {
    const [seconds,setSeconds]=useState(0)
    const [isRunning,setIsRunning]=useState(false)

    useEffect(()=>{
        let id;
        if(isRunning){
            id=setInterval(()=>{
                setSeconds((prev)=>prev+1)
            },300)
        }
        return ()=> clearInterval(id);        
    },[isRunning])
    const handPause=()=>{
        setIsRunning((prev)=>!prev);        
    }
    const handReset=()=>{
        setSeconds(0)        
    }
  return (
    <div>
        <h1>Timer</h1>
        <h2>Time: {formatTime (seconds)}  </h2>
        <button onClick={handPause}>{isRunning?'Pause':'Start'}</button>
        <button onClick={handReset}>Reset</button>
    </div>
  )
}

export default Timer