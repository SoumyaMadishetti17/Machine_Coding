import React from 'react'

const ProCard = ({data,start,end}) => {
  return (
    < >
        {data.slice(start,end).map((ele)=>(
            <div key={ele.id} className='card'>
                <p>{ele?.title} </p>
                <img src={ele?.thumbnail} alt="img" />
            </div>
        ))}        
    </>
  )
}

export default ProCard