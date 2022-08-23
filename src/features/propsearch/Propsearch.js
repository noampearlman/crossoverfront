import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getPropsAsync, selectProps } from './propsearchSlice'
import { Link,Outlet } from "react-router-dom";
import './propsearch.css'
const Propsearch = () => {
  const [search, setSearch] = useState("")
  const dispatch = useDispatch()
  // const [properties, setProperties] = useState([])
  const properties = useSelector(selectProps)
  const [focused, setFocused] = useState(false)

  function waitClear() {
    setTimeout(function () {
      setSearch("")
    }, 200);
}
  return (
    <div>

      <div className='psearchwrap' tabIndex={0} onClick={(e)=>setSearch(e.target.value)}  onBlur={() => waitClear()}>
        <input id="search" className='psearchbar' placeholder='search' onChange={(e) => setSearch(e.target.value.toLowerCase())}>
        </input>
        {search ?
          <div>{properties.filter((prop) => prop.name.toLowerCase().includes(search)).map((prop, i) =>


            <div key={i}>
              <Link className='searchop' to={`/prop/${prop.id}`}>
                {prop.name}

              </Link>
            </div>


          )}</div> : <div></div>}


      </div>
      <br/>
      <Outlet></Outlet>
    </div>
  )
}

export default Propsearch