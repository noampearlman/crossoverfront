import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from '../login/loginSlice';
import './Propadd.css'
import { addPropAsync } from '../properties/propertiesSlice'
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
  }
  const submit = () => {
    dispatch( addPropAsync([{"name":name,"page_Content":content},token]))
    hideModal()
    
  }

  window.onclick = function(event) {
    if (event.target == document.getElementById("propmodal")) {
        hideModal()
    }
  }

  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [content, setContent] = useState("")
  const token = useSelector(selectToken)
  return (
    <div>

      <button onClick={() => showModal()}>Add Prop</button>

      <div  className='propmodal' id="propmodal">
        <div className='propmodalcontent'>
            <label>name:</label>
            {name}
            <br></br>
            <input id='propname' onChange={(e)=>setName(e.target.value)}></input>
            <br></br>
            <label>page content:</label>
            {content}
            <br></br>
            <input  id='propcontent' onChange={(e)=>setContent(e.target.value)}></input>
            <br></br>
            
            <button onClick={()=>submit()} >Submit</button>

        </div>
      </div>

    </div>
  )
}

export default Propadd