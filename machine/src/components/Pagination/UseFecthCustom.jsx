import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const UseFecthCustom = (url) => {
    const [loading,setloading]=useState(true)
    const [error,seterror]=useState(null)
    const [data,setData]=useState(null)   

    useEffect(()=>{
        let isMounted=true;
        const fetchData=async()=>{
            try{    
                const res=await fetch(url)  
                if(!res.ok) {
                    throw new Error('HTTp request failed', res.status)
                }      
                const json=await res.json()
                if(isMounted) setData(json)               
                setloading(false)            
            }catch(error){
                if(isMounted) seterror(error)                
                setloading(false)            
            }finally{
                if(isMounted) setloading(false)
            }       
        }
        fetchData();
        return ()=>{ isMounted=false; }
    },[url])
  return {data,loading,error};
}

export default UseFecthCustom