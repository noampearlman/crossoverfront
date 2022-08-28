import React from 'react'
import { useSelector } from 'react-redux'
import { selectis_superuser, selectToken } from '../login/loginSlice'
import Propsearch from '../propsearch/Propsearch'
import jwt_decode from "jwt-decode";
import Propadd from '../propadd/Propadd';
import './Propspage.css'
const Propspage = () => {
    const token = useSelector(selectToken)
    const is_superuser = useSelector(selectis_superuser)

    
    return (
        <div className='propspagebody'>
            {is_superuser ?
                <div>
                    
                    <Propadd></Propadd>
                </div> :
                null
            }

            <Propsearch />

            
        </div>
    )
}

export default Propspage