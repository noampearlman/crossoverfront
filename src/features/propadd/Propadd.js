import React, { useState } from 'react'
import './Propadd.css'
const Propadd = () => {

  // const [first, setfirst] = useState(second)



  const showModal = () => {
    document.getElementById("propmodal").style.display = "block";
  }

  window.onclick = function(event) {
    if (event.target == document.getElementById("propmodal")) {
      document.getElementById("propmodal").style.display = "none";
    }
  }


  return (
    <div>

      <button onClick={() => showModal()}>Add Prop</button>

      <div  className='propmodal' id="propmodal">
        <div className='propmodalcontent'>
            <label>name:</label>
            <input></input>
            <br></br>
            <label>page content:</label>
            <input></input>
            <br></br>
            
            <button >Add Prop</button>

        </div>
      </div>

    </div>
  )
}

export default Propadd