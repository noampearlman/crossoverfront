import React from 'react'
import { useSelector } from 'react-redux'
import { selectProps } from '../properties/propertiesSlice'
import './Conlist.css'

const Conlist = (props) => {
    const cons = props.cons
    const properties = useSelector(selectProps)

  return (
    <div>
        {cons.length ? 
        <div className='conlistwrapper'>
            {cons.map((con,i)=>
            <div key={i}>
                {con.firstProperty} | {con.secondProperty} | {con.desc} 


            </div>)}
            
        </div>
        :null}
    </div>
  )
}

export default Conlist