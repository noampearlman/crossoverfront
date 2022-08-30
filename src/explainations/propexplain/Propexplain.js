import React from 'react'
import './Propexplain.css'


const Propexplain = () => {
    return (
        <div className='propbody'>
            <div>

            </div>

            <div>
                <div className='proptitle'>
                    World lookup page
                </div>
                <hr className='line' />
                <div className='propsubtitle'>The searchbar</div>
                <div className='propdesc'>
                    In the searchbar located at the top right you can write names of franchises
                    and fictional series
                </div>
                <br></br>
                <div className='propdesc'>
                    selecting a world would direct you to its page, that page will feature a Description
                    and a list of its <strong>connections</strong> to other worlds
                
                
                </div>

                {/* <hr className='line' />
                <div className='propsubtitle'>Connections</div>
                <div className='propdesc'>
                    hsdgfhfgs
                
                
                </div> */}


            </div>

            {/* (prop,i)=> <div key={i}>{prop.name}</div> */}
        </div>
    )
}

export default Propexplain