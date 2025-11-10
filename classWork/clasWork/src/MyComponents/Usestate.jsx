import React, { useRef } from 'react';

function Usestate() {
  const count = useRef(0);
  const counter = useRef();
  const button = useRef();

  function handleClick() {
    count.current++;
    counter.current.textContent = 'Count: ' + count.current;

    if (count.current % 2 === 1) {
      button.current.style.backgroundColor = 'green';
      button.current.textContent = 'Green';
    } else {
      button.current.style.backgroundColor = 'red';
      button.current.textContent = 'Red';
    }
  }

  return (
    <div>
      <p ref={counter}>Count: 0</p>
      <button ref={button} onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Usestate;