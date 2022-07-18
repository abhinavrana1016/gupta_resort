import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
    const [isMobile,setIsMObile] = useState(false)
  return (
    <>
    <nav className='navbar'>
        <h3 className='logo'>Gupta resort</h3>
        <ul className='nav-links'>
            <Link to="/" className='home'>
                <li>Home</li>
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
        <button className='mobile-menu-icon'>
            {isMobile ? ( <i className='fas fa-times'></i>):(<i className='fas fa-bars'></i>)}
        </button>
    </nav>
    </>
  )
}

export default Navbar