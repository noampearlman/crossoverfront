import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Conlist from '../conlist/Conlist'
import Propsearch from '../propsearch/Propsearch'
import { selectProps } from '../propsearch/propsearchSlice'
import './Property.css'
const Property = () => {

  const params = useParams()
  const propId = Number(params.propId)
  const props = useSelector(selectProps)
  return (
    <div className='propbody'>
      {props.filter((prop) => prop.id == propId).map((prop, i) =>
        <div key={i}>
          <div className='proptitle'>
            {prop.name}
          </div>
          <hr className='line'/>
          <div >
            <div className='propsubtitle'>Description</div>
            <div className='propdesc'>{prop.page_Content}</div>
            <hr className='line'/>
            <div className='propsubtitle'>connections</div>
            <Conlist></Conlist>
          </div>
        </div>)}

      {/* (prop,i)=> <div key={i}>{prop.name}</div> */}
    </div>
  )
}

export default Property