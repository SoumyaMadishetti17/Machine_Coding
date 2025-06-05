import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Form = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [data,setData]=useState([])
    const [editId,setEditId]=useState(null)

    const postDataorUpdateData=async()=>{
        const item={
            name:name,
            email:email
        }
        if(editId!==null){
            const res= await axios.put(`https://sample-7737a-default-rtdb.firebaseio.com/users/${editId}.json`,item )
            setEditId(null)
        }else{
            const res=await axios.post('https://sample-7737a-default-rtdb.firebaseio.com/users.json',item)           
            console.log(res.data) 
        }    
        setEmail('')
        setName('')
        getData()           
    }
    const getData=async()=>{
        const res=await axios.get('https://sample-7737a-default-rtdb.firebaseio.com/users.json')
        setData(Object.entries(res.data))
    }
    const delData=async(id)=>{
        const res=await axios.delete(`https://sample-7737a-default-rtdb.firebaseio.com/users/${id}.json`)
        getData()
    }
    const edit=(id)=>{
        setEditId(id)
        const item=data.find((ele)=>ele[0]===id)
        setName(item[1].name)
        setEmail(item[1].email)        
    }
  return (
    <div>
        <h1>Form Validation</h1>
        <div>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" name="name" placeholder="Enter your name" />
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"  name="email" placeholder="Enter your email" />
            <button onClick={()=>postDataorUpdateData()}>{editId?'Upadate Data': 'Post Data'}</button>
        </div>
        <button onClick={()=>getData()}>Get Data</button>
        <div>
            {data.map((ele)=>(<div className='ul' key={ele[0]}>
                <ul >
                    <li><strong>Name :</strong> {ele[1].name}</li>
                    <li><strong>Email :</strong> {ele[1].email}</li>
                </ul>
               <button onClick={()=>delData(ele[0])}>Delete</button>
               <button onClick={()=>edit(ele[0])}>Edit</button>
            </div>))}
        </div>
    </div>
  )
}

export default Form