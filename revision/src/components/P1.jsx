import React, { useState } from 'react'

const P1 = () => {
    const [name,setName]=useState(true)
    const togle=()=>{
        setName((prev)=>!prev)
    }
  return (
    <div>
        <h1>{name ? 'SoumyaDewaraj':'Devraj'} </h1>
        <button onClick={togle}>Change</button>
    </div>
  )
}

export default P1