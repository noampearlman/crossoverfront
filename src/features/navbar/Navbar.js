import React from 'react'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectLogged } from '../login/loginSlice'
import Login from '../login/Login'
import Logout from '../logout/Logout';
import style from './Navbar.module.css'
const Navbar = () => {
  const logged = useSelector(selectLogged)
  return (
    <div className={style.sticky}>
        <nav className={style.buttonbar}>
          <button className={style.but}><Link to="/" className={style.butcolor}>Home</Link></button>
          
          <button className={style.but}><Link to="/con" className={style.butcolor}>Connector</Link></button>
          <button className={style.but}><Link to="/prop" className={style.butcolor}>Worlds</Link></button>
        
        </nav>
          <span>{logged ? <Logout/> : <Login/> }</span>
      
        
    </div>
  )
}

export default Navbar