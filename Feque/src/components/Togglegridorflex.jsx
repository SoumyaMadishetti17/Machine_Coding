import React, { useEffect, useState } from 'react'

const Togglegridorflex = () => {
    const [data,setData]=useState([])
    const [vtype,setvtype]=useState(false)

    const fetchData=async()=>{
        try{
            const res=await fetch('https://dummyjson.com/products')
            const json=await res.json()
            setData(json?.products)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    const toggleView=()=>{
        
        setvtype((prev)=>!prev)
        console.log(vtype);
    }
  return (
    <div>
        <br />
        <h1>Toggle View Flex or Grid</h1><br /><br />
        <button onClick={toggleView}>{vtype? 'View Flex':'View Grid'} </button><br /><br />
        <h2> {vtype? 'View Flex':'View Grid'} </h2>
        <div  className={"container "+(vtype? 'flex':'grid')}>
            {data.map((ele)=>(
                <div className='card' key={ele.id}>
                    <p>{ele.title} </p>
                    <img src={ele.thumbnail} alt="image" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Togglegridorflex