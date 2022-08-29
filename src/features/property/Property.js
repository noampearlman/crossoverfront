import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Conlist from '../conlist/Conlist'
import Propsearch from '../propsearch/Propsearch'
import { delPropAsync, selectProps } from '../properties/propertiesSlice'
import './Property.css'
import { selectCons } from '../cons/consSlice'
import { selectis_superuser, selectToken } from '../login/loginSlice'
const Property = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const propId = Number(params.propId)
  const props = useSelector(selectProps)

  const token = useSelector(selectToken)
  const is_superuser = useSelector(selectis_superuser)

  const cons = useSelector(selectCons)
  const relcons = cons.filter((con) => con.firstProperty === propId || con.secondProperty === propId)
  //   console.log(relcons)
  return (
    <div className='propbody'>
      <div>
{propId}
        {is_superuser ? <div>

          <button onClick={() => dispatch(delPropAsync([propId, token]))} href="/prop">
            <a href="/prop">
              Delete
            </a>
          </button>
        </div>


          : null
        }
      </div>
      {props.filter((prop) => prop.id === propId).map((prop, i) =>
        <div key={i}>
          <div className='proptitle'>
            {prop.name}
          </div>
          <hr className='line' />
          <div >
            <div className='propsubtitle'>Description</div>
            <div className='propdesc'>{prop.page_Content}</div>
            <hr className='line' />
            <div className='propsubtitle'>Connections</div>
            <Conlist cons={relcons}></Conlist>
          </div>
        </div>)}

      {/* (prop,i)=> <div key={i}>{prop.name}</div> */}
    </div>
  )
}

export default Property
