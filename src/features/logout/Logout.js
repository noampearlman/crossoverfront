import React from 'react'
import { useDispatch}from 'react-redux'
import { useSelector } from 'react-redux'
import { logout, selectUsername} from '../login/loginSlice'
import './Logout.css'
const Logout = () => {
    const dispatch = useDispatch()
    // const token =useSelector(selectToken)
    const username =  useSelector(selectUsername)
  return (
    <div className='logoutbody'> 
      <div style={{display:'inline-block',color:'white',fontSize:'medium'}}>  Hello <strong style={{textDecoration:"bold"}}>{username}</strong> &nbsp;</div>
    
        <button className='logoutbutton' onClick={()=>dispatch(logout())}>Logout</button>
    </div>
  )
}

export default Logout