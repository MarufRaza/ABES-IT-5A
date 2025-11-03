import React from 'react'
import './Book.css'
import { useState } from 'react'
const Book = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleRemove = () => {
    setCount(count - 1);
  };

  return (
    <div id='book'>
        <img src="https://th.bing.com/th/id/OIP.pWkEqvYoSt-rEpjuL4s8RwHaHa?w=208&h=208&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
        <h1>Title: Mathematics</h1>
        <h1>Price: 200</h1>
        <div>
          <button onClick={handleAdd}>Add</button>
          <span>{count}</span>
          <button onClick={handleRemove}>Remove</button>
        </div>
    </div>
  )
}

export default Book