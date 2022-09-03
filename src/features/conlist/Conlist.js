import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Conedit from '../conedit/Conedit'
import { delConAsync, selectCons } from '../cons/consSlice'
import { selectTypes } from '../contypes/contypesSlice'
import { selectDirs } from '../directions/directionsSlice'
import { selectis_staff, selectis_superuser, selectToken } from '../login/loginSlice'
import { selectProps } from '../properties/propertiesSlice'
import './Conlist.css'

const Conlist = (props) => {

  const params = useParams()
  const propId = Number(params.propId)
  const cons = props.cons
  const properties = useSelector(selectProps)
  const dirs = useSelector(selectDirs)
  const types = useSelector(selectTypes)
  // console.log(types)

  const dispatch = useDispatch()
  const token =useSelector(selectToken)
  // console.log(token)
  const is_superuser = useSelector(selectis_superuser)


  return (
    <div className='conlistbody'>

      {cons.length ?
        <div className='conlistwrapper'>
          <div className='conlistrow'>
            <div className='conslothead conslotp'>First World</div>
            <div className='conslothead conslotmini'>Direction</div>
            <div className='conslothead conslotp'>Second World</div>
            <div className='conslothead conslotd'>Description</div>
            <div className='conslothead conslotmini'>Type</div>
            {is_superuser ? <div className='conslothead conslotadmin'>Admin control</div> : null}

          </div>
          {cons.map((con, i) =>
            <div className='conlistrow' key={i}>
              {/* {con.id} */}
              <div className='conslot conslotp'>


                {propId === con.firstProperty ?
                 properties.filter(prop => prop.id === con.firstProperty)[0].name
                 :
                 <Link className='conlink' to={`/prop/${con.firstProperty}`}>
                  {properties.filter(prop => prop.id === con.firstProperty)[0].name}
                </Link>
                 }
             
              </div>
              {dirs.length ? <div className='conslot conslotmini tooltip'>
                {dirs.filter(dir=>dir.id ===con.direction)[0].name}
                <span className="tooltiptext">{dirs.filter(dir=>dir.id ===con.direction)[0].desc}</span>
              </div> : null}
              
              <div className='conslot conslotp'>


                {propId === con.secondProperty ?
                 properties.filter(prop => prop.id === con.secondProperty)[0].name
                 :
                 <Link className='conlink' to={`/prop/${con.secondProperty}`}>
                  {properties.filter(prop => prop.id === con.secondProperty)[0].name}
                </Link>
                 }
              </div>
              <div className='conslot conslotd'>
                {con.desc}
              </div>
              {types.length ? 
              <div className='conslot conslotmini tooltip'>
                {types.filter(type=>type.id === con.type)[0].name}
              
                <span className="tooltiptext">{types.filter(type=>type.id === con.type)[0].desc}</span>
              </div>: null}
              

              {is_superuser ?
                <div className='conslot conslotadmin'>
                  
                  {dirs.length && types.length ?
                  
                  <Conedit conid={con.id} data={{
                    "first":properties.filter(prop => prop.id === con.firstProperty)[0],
                    "second":properties.filter(prop => prop.id === con.secondProperty)[0],
                    "desc":con.desc,
                    "dir":dirs.filter(dir=>dir.id ===con.direction)[0],
                    "type":types.filter(type=>type.id === con.type)[0]
                    }}>

                    {/* { console.log(myprops.filter(prop => prop.id === con.firstProperty)[0])} */}
                    </Conedit>
                    
                  : null}
                  
                  
                  
                  <button className='condelete' onClick={()=>dispatch(delConAsync([con.id,token]))} >delete</button>

                </div> : null}

            </div>)}

        </div>
        : <div>
          No connection found :/
        </div>}
        
      
    </div>
  )
}

export default Conlist