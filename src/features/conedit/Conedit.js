import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from '../login/loginSlice';
import './Conedit.css'
import { addPropAsync, selectProps } from '../properties/propertiesSlice'
import { addConAsync, updConAsync } from '../cons/consSlice'
import jwt_decode from "jwt-decode";
import { selectDirs } from '../directions/directionsSlice';
import { selectTypes } from '../contypes/contypesSlice';

const Conedit = (props) => {

    const mydata = props.data
    const conid = props.conid

    const dispatch = useDispatch()
    const [firstEd, setFirstEd] = useState("")
    const [secondEd, setSecondEd] = useState("")
    const [descEd, setDescEd] = useState("")
    const [typeEd, setTypeEd] = useState("")
    const [dirEd, setDirEd] = useState("")
    // const [conid, setConid] = useState("")

    // useEffect(() => {
    //     console.log("hi")
    // }, [firstEd])

    const token = useSelector(selectToken)
    const properties = useSelector(selectProps)
    const dirs = useSelector(selectDirs)
    const types = useSelector(selectTypes)

    const showModald = () => {
        document.getElementById("conmodaledit").style.display = "block";
    }
    const hideModal = () => {
        document.getElementById("conmodaledit").style.display = "none";
    }

    const getdata = () => {
        document.getElementById("conid").value = conid
        document.getElementById("confirst").value = mydata.first.name
        document.getElementById("consecond").value = mydata.second.name
        document.getElementById("condesc").value = mydata.desc
        document.getElementById("condir").value = mydata.dir.name
        document.getElementById("contype").value = mydata.type.name
    }
    const updatedata = () => {
        setFirstEd(mydata.first.id)
        setSecondEd(mydata.second.id)
        setDescEd(mydata.desc)
        setDirEd(mydata.dir.id)
        setTypeEd(mydata.type.id)
        // setConid(props.conid)
        // console.log(mydata.first.id)
    }


    const submit = () => {




        dispatch(updConAsync([document.getElementById("conid").value, {
            "firstProperty": properties.filter(prop => prop.name == document.getElementById("confirst").value)[0].id,
            "secondProperty": properties.filter(prop => prop.name == document.getElementById("consecond").value)[0].id,
            "direction": dirs.filter(d => d.name == document.getElementById("condir").value)[0].id,
            "type": types.filter(t => t.name == document.getElementById("contype").value)[0].id,
            "desc": document.getElementById("condesc").value
        }, token]))
        hideModal()

    }

    const show = () => {
        console.log(document.getElementById("conid").value)
        console.log({
            "firstProperty": properties.filter(prop => prop.name == document.getElementById("confirst").value)[0].id,
            "secondProperty": properties.filter(prop => prop.name == document.getElementById("consecond").value)[0].id,
            "direction": dirs.filter(d => d.name == document.getElementById("condir").value)[0].id,
            "type": types.filter(t => t.name == document.getElementById("contype").value)[0].id,
            "desc": document.getElementById("condesc").value
        })

    }




    window.onclick = function (event) {
        if (event.target == document.getElementById("conmodaledit")) {
            hideModal()
        }
    }





    //   const token = useSelector(selectToken)
    return (
        <div className='coneditbody'>

            <button className='conedit' onClick={() => {
                showModald()
                getdata()
                updatedata()
            }}>Edit</button>
            {/* {conid} */}
            {/* {console.log(props.data.first.id)} */}
            {/* {props.data.firstproperty.name} */}
            <div className="conmodaledit" id="conmodaledit">
                <div id='conid'></div>
                <div className='conmodaleditcontent'>
                    <button onClick={() => hideModal()}>x</button>

                    <div className='conselbox'>

                        {/* {console.log(document.getElementById("confirst"))} */}
                        {/* {document.getElementById("confirst")? console.log(document.getElementById("confirst").value) :console.log("hi")} */}
                        {/* {document.getElementById("confirst").length ?
                         setFirst(properties.filter(prop => prop.name == document.getElementById("confirst").value)):setFirst("")} */}

                        <input list="firstlist" id="confirst" placeholder='first Property' onChange={
                            (e) => properties.filter(prop => prop.name == e.target.value).length > 0 ?
                                setFirstEd(properties.filter(prop => prop.name == e.target.value)[0].id)
                                :
                                setFirstEd("")} ></input>


                        <datalist id="firstlist">
                            {properties.map((prop, i) =>
                                <div key={i}>
                                    <option value={prop.name} ></option>
                                </div>)}
                        </datalist>
                    </div>

                    <div className='conselboxmini'>

                        {/* {dir} */}
                        <input list="dirlist" id="condir" placeholder='Direction' onClick={
                            (e) => {
                                document.getElementById("condir").value = "";
                                setDirEd("")

                            }
                        }
                            onChange={
                                (e) => dirs.filter(d => d.name == e.target.value).length > 0 ?
                                    setDirEd(dirs.filter(d => d.name == e.target.value)[0].id)
                                    :
                                    setDirEd("")} />


                        <datalist id="dirlist">
                            {dirs.map((d, i) =>
                                <div key={i}>
                                    <option value={d.name} ></option>
                                </div>)}
                        </datalist>
                    </div>

                    <div className='conselbox'>

                        {/* {second} */}
                        <input list="secondlist" id="consecond" placeholder='Second Property' onChange={
                            (e) => properties.filter(prop => prop.name == e.target.value).length > 0 ?
                                setSecondEd(properties.filter(prop => prop.name == e.target.value)[0].id)
                                :
                                setSecondEd("")} />


                        <datalist id="secondlist">
                            {properties.map((prop, i) =>
                                <div key={i}>
                                    <option value={prop.name} ></option>
                                </div>)}
                        </datalist>
                    </div>
                    <div className='conselbox'>
                        <textarea id="condesc" className='condesc' placeholder='short Description' onChange={(e) => setDescEd(e.target.value)}></textarea>
                    </div>
                    <br></br>
                    <div className='conselboxmini'>

                        {/* {type} */}
                        <input list="Typelist" id="contype" placeholder='Type' onClick={
                            (e) => {
                                document.getElementById("contype").value = "";
                                setTypeEd("")

                            }
                        }
                            onChange={
                                (e) => types.filter(t => t.name == e.target.value).length > 0 ?
                                    setTypeEd(types.filter(t => t.name == e.target.value)[0].id)
                                    :
                                    setTypeEd("")} />


                        <datalist id="Typelist">
                            {types.map((t, i) =>
                                <div key={i}>
                                    <option value={t.name} ></option>
                                </div>)}
                        </datalist>
                    </div>
                    <div className='conselbox'>
                        <button onClick={() => submit()} >Submit</button>
                    </div>
                    <div className='conselbox'>
                        <button onClick={() => show()} >show</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Conedit