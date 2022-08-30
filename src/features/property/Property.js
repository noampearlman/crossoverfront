import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Conlist from '../conlist/Conlist'
import Propsearch from '../propsearch/Propsearch'
import { delPropAsync, selectProps } from '../properties/propertiesSlice'
import './Property.css'
import { selectCons } from '../cons/consSlice'
import { selectis_superuser, selectToken } from '../login/loginSlice'
import Propedit from '../propedit/Propedit'
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
  const revealdelete= () => {
    document.getElementById("propdelbut2").style.display = "block";
    document.getElementById("propdelbut1").style.display = "none";
  }
  return (
    <div className='propbody'>
      
      {props.filter((prop) => prop.id === propId).map((prop, i) =>
      
        <div key={i}>
          <div>
        {/* {propId} */}
        {is_superuser ? <div>

          <button id='propdelbut1' className='propdelbut1' onClick={() => revealdelete()}>
              Delete
          </button>
          <button id='propdelbut2' className='propdelbut2' onClick={() => dispatch(delPropAsync([propId, token]))}>
            <a href="/prop">
              Click to delete
            </a>
          </button>

          <Propedit name={prop.name} page_Content={prop.page_Content} ></Propedit>
        </div>


          : null
        }
      </div>
          <div className='proptitle'>
            {prop.name}
          </div>

          
            <hr className='propline' />
            <div className='propsubtitle'>Description</div>
            <div className='propdesc'>{prop.page_Content}</div>
            <hr className='propline' />
            <div className='propsubtitle'>Connections</div>
            {relcons.length ? <Conlist cons={relcons}></Conlist>: null}
            
        </div>)}

      {/* (prop,i)=> <div key={i}>{prop.name}</div> */}
    </div>
  )
}

export default Property
