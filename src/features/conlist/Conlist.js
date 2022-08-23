import React from 'react'
import { useSelector } from 'react-redux'
import { selectCons } from './conlistSlice'

const Conlist = () => {
    const cons = useSelector(selectCons)
  return (
    <div>
        {cons.length ? 
        <div>
            {cons[0].desc}


        </div>
        :null}
    </div>
  )
}

export default Conlist