import React from 'react'
import './navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">LOGO</div>
      <ul className="nav-items">
        <li className="nav-item"><a href="#">Home</a></li>
        <li className="nav-item"><a href="#">About</a></li>
        <li className="nav-item"><a href="#">Project</a></li>
        <li className="nav-item"><a href="#">Team</a></li>
        <li className="nav-item"><a href="#">Contact</a></li>
      </ul>
    </div>
  )
}
