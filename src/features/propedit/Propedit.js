import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectToken } from '../login/loginSlice';
import { updPropAsync } from '../properties/propertiesSlice';
import './Propedit.css'

const Propedit = (props) => {
    const dispatch = useDispatch()
    const params = useParams()
    const propId = Number(params.propId)
    const token = useSelector(selectToken)

    const showModal = () => {
        document.getElementById("propmodaledit").style.display = "block";
    }

    const hideModal = () => {
        document.getElementById("propmodaledit").style.display = "none";
        document.getElementById("propnameedit").value = ""
        document.getElementById("propcontentedit").value = ""
        // console.log((jwt_decode(token).exp)*1000 )
        // console.log((new Date().getTime() + 1) )
    }
    const submit = () => {

        if (document.getElementById("propnameedit").value !== "") {
            console.log(propId)
            dispatch(updPropAsync([propId, 
                {
                    "name": document.getElementById("propnameedit").value,
                    "page_Content": document.getElementById("propcontentedit").value
                }, token]))
            console.log(propId)
            hideModal()
        }
    }

    const getdata = () => {
        document.getElementById("propnameedit").value = props.name
        document.getElementById("propcontentedit").value = props.page_Content
        
    }

    window.onclick = function (event) {
        if (event.target == document.getElementById("propmodaledit")) {
            hideModal()
        }
    }



    return (
        <div >

            <button className='propeditbut' onClick={() => {
                showModal()
                getdata()
            }
            }>Edit</button>

            <div className='propmodaledit' id="propmodaledit">
                <div className='propmodalcontentedit'>
                    <button onClick={() => hideModal()}>x</button>
                    <h4>Edit World</h4>
                    <input placeholder='name' id='propnameedit'></input>
                    <br></br>
                    <br></br>
                    <textarea placeholder='page content' id='propcontentedit' className='propcontentedit'></textarea>
                    <br></br>

                    <button onClick={() => submit()} >Submit</button>

                </div>
            </div>

        </div>
    )
}

export default Propedit