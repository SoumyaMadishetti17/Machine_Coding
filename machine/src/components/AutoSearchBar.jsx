import React, { useEffect, useState } from 'react'

const AutoSearchBar = () => {
    const [input,setInput]=useState('')
    const [data,setData]=useState([])
    const [showres,setshowres]=useState(false)
    const [cache,setCache]=useState({})

    const getData=async()=>{          
        if(cache[input]){
            console.log('Returned from cache',input);
            setData(cache[input])   
            return;         
        }
        try{
            console.log('Api Call', input);
            const res=await fetch('https://dummyjson.com/recipes/search?q='+input)
            const json=await res.json();
            setData(json?.recipes)
            setCache((prev)=>({...prev,[input]:json?.recipes}))
        }catch(err){
            console.log(err);
        }            
    }
    useEffect(()=>{
        const debounce = setTimeout(getData,300)
        return () =>clearTimeout(debounce)
    },[input])
    const handSelect=(name)=>{
        setInput(name)
        setshowres(false)        
    }
  return (
    <div className='main-div'>
        <h1>AutoSearchBar</h1>
        <input value={input}
            onChange={(e)=>setInput(e.target.value)}
            onFocus={()=>setshowres((prev)=>!prev)}
            onBlur={()=>setTimeout(()=>setshowres(false),200)  }
            type="text"
            placeholder='Search recipe ....'
            aria-label='Search recipe'
        />
        {showres && (
            <div className='diver'>
                {data.map((ele)=>(
                    <li key={ele.id}
                        onMouseDown={()=>handSelect(ele.name)}
                    >{ele.name} </li>
                ))}
            </div>
        ) }        
    </div>
  )
}

export default AutoSearchBar
// onBlur on the input triggers first and starts a setTimeout(() => setshowres(false), 200)

// Then onClick on the <li> fires.

// But React batches these, and sometimes the dropdown gets hidden before the onClick executes properly.