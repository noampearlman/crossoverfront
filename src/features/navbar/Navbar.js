import React from 'react'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectLogged } from '../login/loginSlice'
import Login from '../login/Login'
import Logout from '../logout/Logout';
import './Navbar.css'
const Navbar = () => {
  const logged = useSelector(selectLogged)
  return (
    <div className="sticky">
        <nav className='buttonbar'>
          <button className='navbutton'><Link to="/" className='navbuttoncolor'>Home</Link></button>
          
          <button className='navbutton'><Link to="/con" className='navbuttoncolor'>Connector</Link></button>
          <button className='navbutton'><Link to="/prop" className='navbuttoncolor'>Properties</Link></button>
        
        </nav>
          <span>{logged ? <Logout/> : <Login/> }</span>
      
        
    </div>
  )
}

export default Navbar