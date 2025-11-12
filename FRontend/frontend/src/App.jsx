import React,{useState,useEffect} from 'react';
import Fashion from './component/Fashion';

function App() {
  const [fa1,setFa1]=useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>{
      setFa1(data);
    })
  },[])
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
      <h1 style={{ width: '100%', textAlign: 'center', marginBottom: '20px' }}>FASHION SHOW</h1>
      {
        fa1.map((f,i)=>(
          <Fashion key={i} image={f.image} title={f.title} price={f.price}/>
        ))
      }
    </div>
  );
}

export default App;