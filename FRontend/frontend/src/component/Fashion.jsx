import React from 'react';
import './fashion.css'; 

function Fashion(props) {
  return (
    <div className="card">
      <img src={props.image} alt="fashion" />
      <h4>Title: {props.title}</h4>
      <h4>Price: ${props.price}</h4>
    </div>
  );
}

export default Fashion;