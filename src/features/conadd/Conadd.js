import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from '../login/loginSlice';
import './Conadd.css'
import { addPropAsync, selectProps } from '../properties/propertiesSlice'
import {addConAsync} from '../cons/consSlice'
import jwt_decode from "jwt-decode";

const Conadd = () => {

    // const [first, setfirst] = useState(second)

    const showModal = () => {
        document.getElementById("conmodal").style.display = "block";
    }
    const hideModal = () => {
        document.getElementById("conmodal").style.display = "none";
        document.getElementById("confirst").value = ""
        document.getElementById("consecond").value = ""
        document.getElementById("condesc").value = ""

        setFirst("")
        setSecond("")
        setDesc("")
    }
    const submit = () => {
        dispatch( addConAsync([{
            "firstProperty":first,
            "secondProperty":second,
            "direction":dir,
            "type":type,
            "desc":desc
          },token]))
        hideModal()

    }

    window.onclick = function (event) {
        if (event.target == document.getElementById("conmodal")) {
            hideModal()
        }
    }

    const dispatch = useDispatch()
    const [first, setFirst] = useState("")
    const [second, setSecond] = useState("")
    const [desc, setDesc] = useState("")
    const [type, setType] = useState("1")
    const [dir, setDir] = useState("1")
    const token = useSelector(selectToken)
    const properties = useSelector(selectProps)
    //   const token = useSelector(selectToken)
    return (
        <div>

            <button onClick={() => showModal()}>Add Connection</button>

            <div className="conmodal" id="conmodal">
                <div className='conmodalcontent'>
                    <div className='conselbox'>

                        {/* {first} */}
                        <input list="firstlist" id="confirst" placeholder='first Property' onChange={
                            (e) => properties.filter(prop => prop.name == e.target.value).length > 0 ?
                                setFirst(properties.filter(prop => prop.name == e.target.value)[0].id)
                                :
                                setFirst("")} />


                        <datalist id="firstlist">
                            {properties.map((prop, i) =>
                                <div key={i}>
                                    <option value={prop.name} ></option>
                                </div>)}
                        </datalist>
                    </div>
                    <div className='conselbox'>

                        {/* {second} */}
                        <input list="secondlist" id="consecond" placeholder='Second Property' onChange={
                            (e) => properties.filter(prop => prop.name == e.target.value).length > 0 ?
                                setSecond(properties.filter(prop => prop.name == e.target.value)[0].id)
                                :
                                setSecond("")} />


                        <datalist id="secondlist">
                            {properties.map((prop, i) =>
                                <div key={i}>
                                    <option value={prop.name} ></option>
                                </div>)}
                        </datalist>
                    </div>
                    <div className='conselbox'>
                        <textarea id="condesc" className='condesc' placeholder='short Description' onChange={(e)=>setDesc(e.target.value)}></textarea>
                    </div>
                    <br></br>
                    <div className='conselbox'>
                        <button onClick={() => submit()} >Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Conadd