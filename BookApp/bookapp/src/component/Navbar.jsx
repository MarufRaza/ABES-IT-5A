import React from 'react'
import './Navbar.css'

function Navbar({ onNavigate }) {
  const handleClick = (view) => (e) => {
    e.preventDefault()
    if (typeof onNavigate === 'function') onNavigate(view)
  }

  return (
    <div id='nav'>
      <ul className='nav-list'>
        <li><a href="#" onClick={handleClick('home')}>Home</a></li>
        <li><a href="#" onClick={handleClick('login')}>Login</a></li>
        <li><a href="#" onClick={handleClick('registration')}>Registration</a></li>
        <li>About</li>
      </ul>
    </div>
  )
}

export default Navbar