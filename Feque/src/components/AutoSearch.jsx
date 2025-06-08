import React, { useEffect, useState } from 'react'
import './Auto.css'

const AutoSearch = () => {
    const [data,setData]=useState([])
    const [input,setinput]=useState('')
    const [showres,setShowres]=useState(false)
    const [cache,setCache]=useState({})

    const fetchData=async()=>{
        if(cache[input]){
            console.log('Returned from Cache',input);
            setData(cache[input])
            return;
        }
        try{
            console.log('Api Call',input);
             const res=await fetch('https://dummyjson.com/recipes/search?q='+input)
             const json=await res.json()
             setData(json?.recipes)       
             setCache( {...cache , [input]:json?.recipes})           
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        const debounce=setTimeout(fetchData,300);
        return ()=>clearTimeout(debounce);
    },[input])
    const handleSelect=(name)=>{
        setinput(name)
        setShowres(false)
    }
  return (
    <div>
        <h1>AutoSearch</h1>
        <div className="search-container">
            <input type="text"
                value={input}
                onBlur={()=>setShowres(false)}
                onFocus={()=>setShowres(true)}
                onChange={(e)=>setinput(e.target.value)} 
            />

            {showres && (
                <div className='recipes'>
                    {data.map((ele)=>(
                        <span onMouseDown={()=>handleSelect(ele.name)} key={ele.id}>{ele.name} </span>
                    ))}
                </div>
            )}           
        </div>
    </div>
  )
}

export default AutoSearch