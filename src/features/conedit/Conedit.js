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
    // const [firstEd, setFirstEd] = useState("")
    // const [secondEd, setSecondEd] = useState("")
    // const [descEd, setDescEd] = useState("")
    // const [typeEd, setTypeEd] = useState("")
    // const [dirEd, setDirEd] = useState("")
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
        document.getElementById("conidedit").value = conid
        document.getElementById("confirstedit").value = mydata.first.name
        document.getElementById("consecondedit").value = mydata.second.name
        document.getElementById("condescedit").value = mydata.desc
        document.getElementById("condiredit").value = mydata.dir.name
        document.getElementById("contypeedit").value = mydata.type.name
    }
    const updatedata = () => {
        // setFirstEd(mydata.first.id)
        // setSecondEd(mydata.second.id)
        // setDescEd(mydata.desc)
        // setDirEd(mydata.dir.id)
        // setTypeEd(mydata.type.id)
        // setConid(props.conid)
        // console.log(mydata.first.id)
    }


    const submit = () => {




        dispatch(updConAsync([document.getElementById("conidedit").value, {
            "firstProperty": properties.filter(prop => prop.name == document.getElementById("confirstedit").value)[0].id,
            "secondProperty": properties.filter(prop => prop.name == document.getElementById("consecondedit").value)[0].id,
            "direction": dirs.filter(d => d.name == document.getElementById("condiredit").value)[0].id,
            "type": types.filter(t => t.name == document.getElementById("contypeedit").value)[0].id,
            "desc": document.getElementById("condescedit").value
        }, token]))
        hideModal()

    }

    const show = () => {
        console.log(document.getElementById("conidedit").value)
        console.log({
            "firstProperty": properties.filter(prop => prop.name == document.getElementById("confirstedit").value)[0].id,
            "secondProperty": properties.filter(prop => prop.name == document.getElementById("consecondedit").value)[0].id,
            "direction": dirs.filter(d => d.name == document.getElementById("condiredit").value)[0].id,
            "type": types.filter(t => t.name == document.getElementById("contypeedit").value)[0].id,
            "desc": document.getElementById("condescedit").value
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
                <div id='conidedit'></div>
                <div className='conmodaleditcontent'>
                    <button onClick={() => hideModal()}>x</button>
                    <h4>Edit Connection</h4>
                    <div className='conselboxedit'>

                        {/* {console.log(document.getElementById("confirst"))} */}
                        {/* {document.getElementById("confirst")? console.log(document.getElementById("confirst").value) :console.log("hi")} */}
                        {/* {document.getElementById("confirst").length ?
                         setFirst(properties.filter(prop => prop.name == document.getElementById("confirst").value)):setFirst("")} */}

                        <input list="firstlistedit" id="confirstedit" placeholder='first Property'  ></input>


                        <datalist id="firstlistedit">
                            {properties.map((prop, i) =>
                                <div key={i}>
                                    <option value={prop.name} ></option>
                                </div>)}
                        </datalist>
                    </div>

                    <div className='conselboxmini'>

                        {/* {dir} */}
                        <input list="dirlistedit" id="condiredit" placeholder='Direction' onClick={
                            (e) => {
                                document.getElementById("condiredit").value = "";
                                

                            }
                        }
                            />


                        <datalist id="dirlistedit">
                            {dirs.map((d, i) =>
                                <div key={i}>
                                    <option value={d.name} ></option>
                                </div>)}
                        </datalist>
                    </div>

                    <div className='conselbox'>

                        {/* {second} */}
                        <input list="secondlistedit" id="consecondedit" placeholder='Second Property'  />


                        <datalist id="secondlistedit">
                            {properties.map((prop, i) =>
                                <div key={i}>
                                    <option value={prop.name} ></option>
                                </div>)}
                        </datalist>
                    </div>
                    <br></br>
                    <div className='conselbox'>
                        <textarea id="condescedit" className='condescedit' placeholder='short Description' ></textarea>
                    </div>
                    <br></br>
                    <div className='conselboxmini'>

                        {/* {type} */}
                        <input list="Typelistedit" id="contypeedit" placeholder='Type' onClick={
                            (e) => {
                                document.getElementById("contypeedit").value = "";
                                

                            }
                        }
                            />


                        <datalist id="Typelistedit">
                            {types.map((t, i) =>
                                <div key={i}>
                                    <option value={t.name} ></option>
                                </div>)}
                        </datalist>
                    </div>
                    <div className='conselboxedit'>
                        <button onClick={() => submit()} >Submit</button>
                    </div>
                    <div className='conselboxedit'>
                        <button onClick={() => show()} >show</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Conedit