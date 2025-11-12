import React, { useState, useEffect } from 'react';
import Fashion from './Fashion'; // Assuming you have a Fashion component

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setBooks(data);
      });
  }, []);

  return (
    <div>
      {books.map((f, i) => (
        <Fashion key={i} image={f.image} title={f.title} price={f.price} />
      ))}
    </div>
  );
}

export default App;