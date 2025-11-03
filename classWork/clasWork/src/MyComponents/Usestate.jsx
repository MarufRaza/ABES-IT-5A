import React from 'react';

function Usestate() {
  let count = 0;

  function changeCount() {
    count++;
    document.getElementById('counter').innerText = `Count: ${count}`;
  }

  return (
    <div>
      <p id="counter">Count: 0</p>
      <button onClick={changeCount}>Click me</button>
    </div>
  );
}

export default Usestate;