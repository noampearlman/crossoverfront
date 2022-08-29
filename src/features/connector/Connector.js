import React, { useEffect, useState } from 'react'
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
  const [relcons, setRelcons] = useState(cons)

useEffect(() => {
  setRelcons(cons)
  
}, [cons])




  const findPath = () => {
    var avail = properties.filter(prop => prop.id !== first).map(prop => prop.id)
    // console.log(avail)
    var knowns = [[first, null, 0]]
    // console.log(knowns)
    var depth = 0

    for (var i = 0; i < 10; i++) {
      // console.log(i)
      // console.log(!knowns.map(k=>[k[0],k[1]]).filter(known => known.indexOf(second) !== -1).length > 0)
      // console.log(second)
      // console.log("hello second")
      if (!knowns.map(k=>[k[0],k[1]]).filter(known => known.indexOf(second) !== -1).length > 0) {
        var thisdata = findCon(knowns, avail, depth)
        knowns = thisdata.knowns
        avail = thisdata.avail
        depth = thisdata.depth + 1
        // console.log("----")
        // console.log(avail)
        // console.log(knowns)
        // console.log(depth)
      }
      else{
        i=10
        // console.log("hellooooo")
      }

      
    }
    if (!knowns.map(k=>[k[0],k[1]]).filter(known => known.indexOf(second) !== -1).length > 0) {
      setRelcons([])
        return
    }
    // console.log("----")
    // console.log(avail)
    // console.log(knowns)
    // console.log(depth)

    var proplist = [second]

    for (var i = 0; i < depth; i++) {

      // console.log(proplist)
      // console.log(knowns)
      // console.log(knowns.filter(known => known[0] === proplist[0]))
      proplist.unshift(knowns.filter(known => known[0] === proplist[0])[0][1])
      // console.log(knowns.filter(known => known[0] === proplist[0])[0][1])
      // console.log(proplist)
    }

    var mycons = []

    for (var i = 0; i < depth; i++) {


      
      mycons.push(
        cons.filter(con => con.firstProperty === proplist[i] || con.secondProperty === proplist[i])
          .filter(con => con.firstProperty === proplist[i + 1] || con.secondProperty === proplist[i + 1])[0]
      )

    }
    setRelcons(mycons)


  }

  const findCon = (knowns, avail, depth) => {

    // "origins" is an array that contains the ids of the "known" worlds in the current "depth"
    const origins = knowns.filter(known => known[2] === depth).map(known => known[0])
    var relcons = []
    origins.map(ori => cons.filter((con) => con.firstProperty === ori || con.secondProperty === ori).map(con=> relcons.push(   con)  ))



    relcons?.map(con => {
      if (avail.includes(con.firstProperty)) {
        avail = avail.filter(a => a !== con.firstProperty)
        knowns.push([con.firstProperty, con.secondProperty, depth + 1])
      }
      else {
      }
      if (avail.includes(con.secondProperty)) {
        avail = avail.filter(a => a !== con.secondProperty)
        knowns.push([con.secondProperty, con.firstProperty, depth + 1])
      }
      else {
      }


    })


    return { knowns, avail, depth }

  }

  return (
    <div className='cnctrbody'>


      {is_superuser ?
        <div>
          <Conadd></Conadd>
        </div> :
        null
      }

      <div className='cnctrwrapper'>
        {/* {first} {second} */}
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
            <button onClick={() => findPath()}>submit</button>
          </div>

        </div>
        <Conlist   cons={relcons}></Conlist>
      </div>
    </div>
  )
}

export default Connector