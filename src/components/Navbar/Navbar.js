import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
    <nav className='navbar'>
        <h3 className='logo'>Gupta resort</h3>
        <ul className='nav-links'>
            <Link to="/" className='home'>
                <li>home</li>
            </Link>
            <Link to="/about" className='about'>
                <li>About</li>
            </Link>
            <Link to="/gallery" className='gallery'>
                <li>Gallery</li>
            </Link>
            <Link to="/restaurent" className='restaurent'>
                <li>Restaurent</li>
            </Link>
        </ul>
    </nav>
    </>
  )
}

export default Navbar