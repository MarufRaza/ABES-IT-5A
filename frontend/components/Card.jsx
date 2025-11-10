import React from 'react'
import './card.css'
const Card = () => {
  return (
    <div id="adi">

        <img src="https://www.google.com/imgres?q=imqges%20crtn&imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F57%2F3d%2F37%2F573d374adc049516cde892b908dfd481.jpg&imgrefurl=https%3A%2F%2Fin.pinterest.com%2Fpin%2Fcartoon-images-free-download-on-freepik--8725793022768067%2F&docid=kVMdiiBxKxCGuM&tbnid=IHn6RyDTkP5rEM&vet=12ahUKEwjui7yZv8iQAxWPWXADHSKoEWQQM3oECBAQAA..i&w=736&h=736&hcb=2&ved=2ahUKEwjui7yZv8iQAxWPWXADHSKoEWQQM3oECBAQAA" alt="" height={100} width={100} />
      <h1>{props.name}</h1>
      <h3>{props.age}</h3>
    </div>
  )
}

export default Card

