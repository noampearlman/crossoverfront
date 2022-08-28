import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Conadd from '../conadd/Conadd'
import Conlist from '../conlist/Conlist'
import { selectCons } from '../cons/consSlice'
import { selectis_superuser } from '../login/loginSlice'
import { selectProps } from '../properties/propertiesSlice'
import './Connector.css'

const Connector = () => {
  const is_superuser = useSelector(selectis_superuser)
  const [first, setFirst] = useState("")
  const [second, setSecond] = useState("")

  const properties = useSelector(selectProps)
  const cons = useSelector(selectCons)
  const relcons = cons
  return (
    <div className='cnctrbody'>
      {is_superuser ?
        <div>
          <Conadd></Conadd>
        </div> :
        null
      }

      <div className='cnctrwrapper'>
        <div className='cnctroptions'>
          {/* first Property */}
          <div>
            <input list="firstlist" id="confirst" placeholder='first Property' onChange={
              (e) => properties.filter(prop => prop.name === e.target.value).length > 0 ?
                setFirst(properties.filter(prop => prop.name === e.target.value)[0].id)
                :
                setFirst("")} />


            <datalist id="firstlist">
              {properties.map((prop, i) =>
                <div key={i}>
                  <option value={prop.name} ></option>
                </div>)}
            </datalist>
          </div>
          {/* Second Property */}
          <div>
            <input list="secondlist" id="consecond" placeholder='Second Property' onChange={
              (e) => properties.filter(prop => prop.name === e.target.value).length > 0 ?
                setSecond(properties.filter(prop => prop.name === e.target.value)[0].id)
                :
                setSecond("")} />


            <datalist id="secondlist">
              {properties.map((prop, i) =>
                <div key={i}>
                  <option value={prop.name} ></option>
                </div>)}
            </datalist>
          </div>
          {/* Submit button */}
          <div>
            <button>submit</button>
          </div>

        </div>
        <Conlist cons={relcons}></Conlist>
      </div>
    </div>
  )
}

export default Connector