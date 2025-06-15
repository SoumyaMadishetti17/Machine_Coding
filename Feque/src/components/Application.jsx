import React, { useEffect, useState } from 'react'
import './Applica.css'

const Application = () => {
    const [data,setData]=useState([])
    const [filteredData, setFilteredData]=useState([])
    const [currPage,setCurrPage]=useState(0)
    const [input,setinput]=useState('')
    const [sortkey,setSortkey]=useState('')
    const [debInput,setDebInput]=useState('')

    const fetchData=async()=>{
        try{
            const res=await fetch('https://dummyjson.com/products?limit=500')
            const json=await res.json()
            setData(json?.products || [])
            setFilteredData(json?.products)
        }catch(err){
            console.log(err);
        }
    }   
    useEffect(()=>{
        fetchData()
    },[]);

    useEffect(()=>{
        const deb=setTimeout(()=>{
            const filtered=data.filter((ele)=>
                ele.title.toLowerCase().includes(input.toLowerCase())
            )
            setFilteredData(filtered)
            setCurrPage(0)
        },300)
        return ()=>clearTimeout(deb)
    },[input,data])

    useEffect(()=>{
        let temp=data.filter((ele)=>
            ele.title.toLowerCase().includes(input.toLowerCase())
        )
        switch(sortkey){
            case 'PriceHigh':
                temp=temp.sort((a,b)=>a.price-b.price);
                break;
            case 'PriceLow':
                temp.sort((a, b) => a.price - b.price);
                break;
            case 'RatingHigh':
                temp.sort((a, b) => b.rating - a.rating);
                break;
            case 'RatingLow':
                temp.sort((a, b) => a.rating - b.rating);
                break;
            default:
                break;
        }
        setFilteredData(temp)
        setCurrPage(0)
    },[ sortkey,input,data])


    const totalData=filteredData.length;
    const pro_per_page=10
    const no_of_pages= Math.ceil(totalData/pro_per_page);
    const start=currPage*pro_per_page;
    const end=start+pro_per_page;

    const handPage=(n)=>setCurrPage(n)    
    const gotoNext=()=>setCurrPage((prev)=>prev+1)
    const gotoPrev=()=>setCurrPage((prev)=>prev-1)

  return (
    <div>
        <h1>E-Commerce Application</h1>
        <div>
            <input type="text" value={input} onChange={(e)=>{setinput(e.target.value); setCurrPage(0)}} />
        </div>
        <div>
            <select value={sortkey} onChange={(e)=>setSortkey(e.target.value)}>
                <option value="">Sort By</option>
                <option value="PriceHigh">Price (High to Low)</option>
                <option value="PriceLow">Price (Low to High)</option>
                <option value="RatingHigh">Rating (High to Low)</option>
                <option value="RatingLow">Rating (Low to High)</option>
            </select>
        </div>
        <div>
            <button disabled={currPage===0} onClick={()=>gotoPrev()}>◀️</button>
            {[...Array(no_of_pages).keys()].map((n)=>(
                <button key={n} className={currPage===n? 'active':''} onClick={()=>handPage(n)}>{n} </button>
            ))}
            <button disabled={currPage===no_of_pages-1} onClick={()=>gotoNext()}>▶️</button>
        </div>
        <div className="container">
            {filteredData.slice(start,end).map((ele)=>(
                <div className='card' key={ele.id}>
                    <strong>{ele?.title} </strong>
                    <p><strong>Category :</strong>{ele.category} </p>
                    <img src={ele?.thumbnail} alt="" />
                    <p><strong>Price: </strong> {ele ?.price} </p>
                    <p><strong>Rating :</strong>{ele?.rating} </p>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Application