import React from 'react'
import './card.css'
const Card = ({ name, age, imageUrl }) => {
  return (
    <div id="adi">
        <img src={imageUrl || "https://i.pinimg.com/736x/57/3d/37/573d374adc049516cde892b908dfd481.jpg"} alt="" height={100} width={100} />
      <h1>{name}</h1>
      <h3>{age}</h3>
    </div>
  )
}

export default Card

