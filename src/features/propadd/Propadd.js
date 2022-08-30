import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from '../login/loginSlice';
import './Propadd.css'
import { addPropAsync } from '../properties/propertiesSlice'

import jwt_decode from "jwt-decode";

const Propadd = () => {

  // const [first, setfirst] = useState(second)

  const showModal = () => {
    document.getElementById("propmodal").style.display = "block";
  }
  const hideModal = () => {
    document.getElementById("propmodal").style.display = "none";
    document.getElementById("propname").value = ""
    document.getElementById("propcontent").value = ""
    setName("")
    setContent("")
    // console.log((jwt_decode(token).exp)*1000 )
    // console.log((new Date().getTime() + 1) )
  }
  const submit = () => {

    if(document.getElementById("propname").value!==""){
    dispatch(addPropAsync([{ "name": name, "page_Content": content }, token]))
    hideModal()
    }
  }



  window.onclick = function (event) {
    if (event.target == document.getElementById("propmodal")) {
      hideModal()
    }
  }


  

  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [content, setContent] = useState("")
    const token = useSelector(selectToken)
  return (
    <div >

      <button onClick={() => showModal()}>Add Prop</button>

      <div className='propmodal' id="propmodal">
        <div className='propmodalcontent'>
          <button onClick={()=>hideModal()}>x</button>
          <label>name:</label>
          <br></br>
          <input id='propname' onChange={(e) => setName(e.target.value)}></input>
          <br></br>
          <label>page content:</label>
          <br></br>
          <textarea id='propcontent' className='propcontent' onChange={(e) => setContent(e.target.value)}></textarea>
          <br></br>

          <button onClick={() => submit()} >Submit</button>

        </div>
      </div>

    </div>
  )
}

export default Propadd