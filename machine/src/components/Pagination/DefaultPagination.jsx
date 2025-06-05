import React from 'react'

const DefaultPagination = ({curr_page,no_of_pages,setCurr_page}) => {
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
        <div>
            <button disabled={curr_page===0} onClick={()=>gotoPrev()}>◀️</button>
            {[...Array(no_of_pages).keys()].map((n)=>(
                <button key={n} className={curr_page===n ? 'active':''} onClick={()=>handleSelect(n)}>{n}</button>
            ))}
            <button disabled={curr_page===(no_of_pages-1)} onClick={()=>gotoNext()}>▶️</button>
        </div>
    </div>
  )
}

export default DefaultPagination