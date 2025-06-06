import { useState } from 'react'
import DefaultPagination from './DefaultPagination'
import ProCard from './ProCard'
import UseFecthCustom from './UseFecthCustom'

const Pagination = () => {
    const [input,setInput]=useState('')
    const { data, loading, error } = UseFecthCustom('https://dummyjson.com/products?limit=500')
    
    
    const [curr_page, setCurr_page] = useState(0)
    const prods = data?.products || []
    const filterdata=prods.filter((ele)=>{
        return ele.title.toLowerCase().includes(input.toLowerCase())
    })
    const pro_per_page = 10
    const totalData = filterdata.length
    const no_of_pages = Math.ceil(totalData / pro_per_page)
    const start = curr_page * pro_per_page
    const end = start + pro_per_page

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error: {error.message}</h1>

    return (
        <div>
            <h1>Pagination</h1>
            <DefaultPagination 
                curr_page={curr_page} 
                no_of_pages={no_of_pages} 
                setCurr_page={setCurr_page} 
            />
            <div>
                <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder=' Search Product....' />
            </div>
            <div className='container'>
                <ProCard data={filterdata} start={start} end={end} />
            </div>
        </div>
    )
}

export default Pagination