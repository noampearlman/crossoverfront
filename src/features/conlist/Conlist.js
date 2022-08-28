import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { delConAsync } from '../cons/consSlice'
import { selectis_staff, selectis_superuser, selectToken } from '../login/loginSlice'
import { selectProps } from '../properties/propertiesSlice'
import './Conlist.css'

const Conlist = (props) => {
  const cons = props.cons
  const properties = useSelector(selectProps)
  const dispatch = useDispatch()
  const token =useSelector(selectToken)
  const is_superuser = useSelector(selectis_superuser)
  return (
    <div>
      {cons.length ?
        <div className='conlistwrapper'>
          <div className='conlistrow'>
            <div className='conslothead conslotp'>First World</div>
            <div className='conslothead conslotmini'>Direction</div>
            <div className='conslothead conslotp'>Second World</div>
            <div className='conslothead conslotd'>Description</div>
            <div className='conslothead conslotmini'>Type</div>
            {is_superuser ? <div className='conslothead conslotmini'>Admin control</div> : null}

          </div>
          {cons.map((con, i) =>
            <div className='conlistrow' key={i}>
              <div className='conslot conslotp'>
                <Link className='conlink' to={`/prop/${con.firstProperty}`}>
                  {properties.filter(prop => prop.id === con.firstProperty)[0].name}
                </Link>

              </div>
              <div className='conslot conslotmini'>
                {con.direction}
              </div>
              <div className='conslot conslotp'>
                <Link className='conlink' to={`/prop/${con.secondProperty}`}>
                  {properties.filter(prop => prop.id === con.secondProperty)[0].name}
                </Link>
              </div>
              <div className='conslot conslotd'>
                {con.desc}
              </div>
              <div className='conslot conslotmini'>
                {con.type}
              </div>
              {is_superuser ?
                <div className='conslot conslotmini'>

                  <button>edit</button>
                  <button onClick={()=>dispatch(delConAsync([con.id,token]))} >delete</button>

                </div> : null}



              {/* {properties.filter((prop) => prop.id ==  con.firstProperty ).map((prop, i) =>
                <div key={i}>
                  {prop.name}
                </div>)} */}
            </div>)}

        </div>
        : null}
    </div>
  )
}

export default Conlist