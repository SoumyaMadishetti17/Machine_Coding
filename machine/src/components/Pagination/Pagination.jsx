import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Pagination = () => {
    const [data,setData]=useState([])

    const getData=async()=>{
        try {
            const res=await fetch('https://dummyjson.com/products?limit=500')
            const json=await res.json()
            setData(json?.products)
        } catch (error) {
            console.log(error);
        }        
    }

    useEffect(()=>{
        getData()
    },[])

    const totalData=data.length;
    const pro_per_page=10;
    const no_of_pages=Math.ceil(totalData/pro_per_page)
    const [curr_page,setCurr_page]=useState(0)
    const start=curr_page*pro_per_page
    const end=start+pro_per_page   

    const handleSelect=(n)=>{
        setCurr_page(n)        
    }
    const gotoPrev=()=>{
        setCurr_page((prev)=>prev-1)        
    }
    const gotoNext=()=>{
        setCurr_page((prev)=>prev+1)        
    }
  return (
    <div>
        <h1>Pagination</h1>
        <div >
            <div>
                <button disabled={curr_page===0} onClick={()=>gotoPrev()}>◀️</button>
                {[...Array(no_of_pages).keys()].map((n)=>(
                    <button key={n} className={curr_page===n ? 'active':''} onClick={()=>handleSelect(n)}>{n}</button>
                ))}
                <button disabled={curr_page===(no_of_pages-1)} onClick={()=>gotoNext()}>▶️</button>
            </div>
            <div className='container'>
                {data.slice(start,end).map((ele)=>(
                    <div key={ele.id} className='card'>
                        <p>{ele?.title} </p>
                        <img src={ele?.thumbnail} alt="img" />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Pagination