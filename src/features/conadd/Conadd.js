import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from '../login/loginSlice';
import './Conadd.css'
import { addPropAsync, selectProps } from '../properties/propertiesSlice'
import { addConAsync } from '../cons/consSlice'
import jwt_decode from "jwt-decode";
import { selectDirs } from '../directions/directionsSlice';
import { selectTypes } from '../contypes/contypesSlice';

const Conadd = () => {

    // const [first, setfirst] = useState(second)

    const showModal = () => {
        document.getElementById("conmodaladd").style.display = "block";
        document.getElementById("confirstadd").value = ""
        document.getElementById("consecondadd").value = ""
        document.getElementById("condescadd").value = ""
        document.getElementById("condiradd").value = ""
        document.getElementById("contypeadd").value = ""
        setFirst("")
        setSecond("")
        setDesc("")
        setDir("")
        setType("")
    }
    const hideModal = () => {
        document.getElementById("conmodaladd").style.display = "none";
        document.getElementById("confirstadd").value = ""
        document.getElementById("consecondadd").value = ""
        document.getElementById("condescadd").value = ""
        document.getElementById("condiradd").value = ""
        document.getElementById("contypeadd").value = ""

        setFirst("")
        setSecond("")
        setDesc("")
        setDir("")
        setType("")
    }
    const submit = () => {
        dispatch(addConAsync([{
            "firstProperty": first,
            "secondProperty": second,
            "direction": dir,
            "type": type,
            "desc": desc
        }, token]))
        hideModal()

    }
    
    window.onclick = function (event) {
        if (event.target == document.getElementById("conmodaladd")) {
          hideModal()
        }
      }


    const dispatch = useDispatch()
    const [first, setFirst] = useState("")
    const [second, setSecond] = useState("")
    const [desc, setDesc] = useState("")
    const [type, setType] = useState("")
    const [dir, setDir] = useState("")
    const token = useSelector(selectToken)
    const properties = useSelector(selectProps)
    const dirs = useSelector(selectDirs)
    const types = useSelector(selectTypes)
    //   const token = useSelector(selectToken)
    return (
        <div>

            <button onClick={() => showModal()}>Add Connection</button>

            <div className="conmodaladd" id="conmodaladd">
                <div className='conmodalcontentadd'>
                <button onClick={()=>hideModal()}>x</button>
                    <div className='conselboxadd'>

                        {/* {first} */}
                        <input list="firstlistadd" id="confirstadd" placeholder='first Property' onChange={
                            (e) => properties.filter(prop => prop.name == e.target.value).length > 0 ?
                                setFirst(properties.filter(prop => prop.name == e.target.value)[0].id)
                                :
                                setFirst("")} />


                        <datalist id="firstlistadd">
                            {properties.map((prop, i) =>
                                <div key={i}>
                                    <option value={prop.name} ></option>
                                </div>)}
                        </datalist>
                    </div>

                    <div className='conselboxminiadd'>

                        {/* {dir} */}
                        <input list="dirlistadd" id="condiradd" placeholder='Direction' onClick={
                            (e) => {
                                document.getElementById("condiradd").value = "";
                                setDir("")

                            }
                        }
                            onChange={
                                (e) => dirs.filter(d => d.name == e.target.value).length > 0 ?
                                    setDir(dirs.filter(d => d.name == e.target.value)[0].id)
                                    :
                                    setDir("")} />


                        <datalist id="dirlistadd">
                            {dirs.map((d, i) =>
                                <div key={i}>
                                    <option value={d.name} ></option>
                                </div>)}
                        </datalist>
                    </div>

                    <div className='conselboxadd'>

                        {/* {second} */}
                        <input list="secondlistadd" id="consecondadd" placeholder='Second Property' onChange={
                            (e) => properties.filter(prop => prop.name == e.target.value).length > 0 ?
                                setSecond(properties.filter(prop => prop.name == e.target.value)[0].id)
                                :
                                setSecond("")} />


                        <datalist id="secondlistadd">
                            {properties.map((prop, i) =>
                                <div key={i}>
                                    <option value={prop.name} ></option>
                                </div>)}
                        </datalist>
                    </div>
                    <div className='conselboxadd'>
                        <textarea id="condescadd" className='condescadd' placeholder='short Description' onChange={(e) => setDesc(e.target.value)}></textarea>
                    </div>
                    <br></br>
                    <div className='conselboxminiadd'>

                        {/* {type} */}
                        <input list="Typelistadd" id="contypeadd" placeholder='Type' onClick={
                            (e) => {
                                document.getElementById("contypeadd").value = "";
                                setType("")

                            }
                        }
                            onChange={
                                (e) => types.filter(t => t.name == e.target.value).length > 0 ?
                                    setType(types.filter(t => t.name == e.target.value)[0].id)
                                    :
                                    setType("")} />


                        <datalist id="Typelistadd">
                            {types.map((t, i) =>
                                <div key={i}>
                                    <option value={t.name} ></option>
                                </div>)}
                        </datalist>
                    </div>
                    <div className='conselboxadd'>
                        <button onClick={() => submit()} >Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Conadd