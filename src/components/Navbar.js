import React, { useState } from "react"
import { links} from "./data"
import { Link } from "react-router-dom"
const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <header>
        <div className='logo'>
          <h1>Gupta Resort</h1>
        </div>
        <nav className={`${show ? "mobile-nav" : "list"}`}>
          <ul>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                 
                  <Link to ={url}>{text}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
<div className='toggleBtn'>
          <button onClick={() => setShow(!show)}>{show ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
        </div>
      </header>
    </>
  )
}

export default Navbar
