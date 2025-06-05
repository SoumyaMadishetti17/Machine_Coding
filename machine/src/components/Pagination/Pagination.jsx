import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import DefaultPagination from './DefaultPagination'
import ProCard from './ProCard'
import UseFecthCustom from './UseFecthCustom'

const Pagination = () => {
    const {data,loading,error}=UseFecthCustom('https://dummyjson.com/products?limit=500')
    
    const prods=data?.products || [];
    const pro_per_page=10;
    const totalData=prods.length;
    const no_of_pages=Math.ceil(totalData/pro_per_page)
    const [curr_page,setCurr_page]=useState(0)
    const start=curr_page*pro_per_page
    const end=start+pro_per_page   

    if(loading) <h1>Loading..... </h1>
    if(error) <h1>Error..... </h1>
  return (
    <div>
        <h1>Pagination</h1>
        <div >
            <DefaultPagination curr_page={curr_page} no_of_pages={no_of_pages} setCurr_page={setCurr_page} />
            <div className='container'>                
                <ProCard  data={data} start={start} end={end} />
            </div>
        </div>
    </div>
  )
}

export default Pagination