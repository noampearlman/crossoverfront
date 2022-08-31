import React, { useState } from 'react'
import { useDispatch}from 'react-redux'
// import { useSelector } from 'react-redux'
// import { login } from '../user/userSlice'
// import { signin } from './loginAPI'
import {  autologin, signInAsync } from './loginSlice'
import './Login.css'
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    // const token =useSelector(selectToken)
    const dispatch = useDispatch()
    // dispatch(autologin())

  return (
    <div className='loginbody'>
        {/* {username} {password} */}
        <div>
            <input className='logininput' placeholder='username' onChange={(e)=>(setUsername(e.target.value))}/>
        
            <input className='logininput' placeholder='password' type="password" onChange={(e)=>(setPassword(e.target.value))}/>
         
            <button className='loginbutton' onClick={()=>dispatch(signInAsync([username,password]))}>Login</button>
            {/* <button className='loginbutton'>Sign Up</button> */}
        </div>  
    </div>
  )
}

export default Login