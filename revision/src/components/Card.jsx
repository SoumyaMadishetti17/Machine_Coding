import React from 'react'

const Card = (props) => {
    const {image,name,age}=props.data;
  return (
    <div>
        <h3>{name} </h3>
        <p>Age: {age} years old</p>
        <img src={image} alt="" />
    </div>
  )
}

export default Card