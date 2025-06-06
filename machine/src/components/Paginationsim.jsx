import React, { useEffect, useState } from 'react'

const Paginationsim = () => {
    const [data,setData]=useState([])
    const [input,setInput]=useState('')

    const fetchData=async()=>{
        try{
            const res=await fetch('https://dummyjson.com/products?limit=500')
            const json=await res.json()
            setData(json?.products);        
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])
    const [curr_page,setCurr_page]=useState(0)
    const products=data.filter((ele)=>{
        return ele.title.toLowerCase().includes(input.toLowerCase())
    })
    const pro_per_page=10;
    const totaldata=products.length;
    const no_of_pages=Math.ceil(totaldata/pro_per_page)
    const start=curr_page*pro_per_page;
    const end=start+pro_per_page;

    const handPage=(n)=>{
        setCurr_page(n);
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
        <div>
            <button disabled={curr_page===0} onClick={()=>gotoPrev()}>◀️</button>
            {[...Array(no_of_pages).keys()].map((n)=>(
                <button key={n} className={curr_page===n?'active':''} onClick={()=>handPage(n)}>{n} </button>
            ))}
            <button disabled={curr_page===(no_of_pages-1)} onClick={()=>gotoNext()}>▶️ </button>
        </div>
        <div>
            <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Search product ......' />
        </div>
        <div className='container'>
            {products.slice(start,end).map((ele)=>(
                <div key={ele.id} className='card'>
                    <strong>{ele?.title} </strong>
                    <img src={ele?.thumbnail} alt="image" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Paginationsim