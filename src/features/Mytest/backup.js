import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCons } from '../cons/consSlice'
import { selectProps } from '../properties/propertiesSlice'

const Mytest = () => {
    const numbers = [1, 2, 3, 4, 5, 6]
    numbers.unshift(70)
    const [first, setFirst] = useState(12)
    const [second, setSecond] = useState(4)
    const [depth, setDepth] = useState(0)
    const [submit, setSubmit] = useState(false)
    const properties = useSelector(selectProps)


    const [avail, setAvail] = useState([])

    useEffect(() => {
        setAvail(properties.filter(prop => prop.id !== first).map(prop => prop.id));
    }, [properties]);


    const [knowns, setKnowns] = useState([[first, 0]])
    const cons = useSelector(selectCons)

    const testline = () => {
        console.log(avail)
        console.log(knowns)
    }
    // useEffect(() => {
    //     if(!knowns.filter(known=>known.indexOf(4) != -1).length>0){
    //         console.log("hi from effect")
    //         // findCon()
    //         // setDepth(depth + 1)
    //     }
    // }, [depth]);
    
    const findPath = () => {
        // console.log(avail)
        console.log(knowns.filter(known => known.indexOf(4) != -1).length > 0)
        // setInterval(() => {
        //     findCon()
        //   }, 1000);

          findCon()
            // setTimeout(function () {
            //     findCon()
            //   }, 2000);
          
        
        // if(knowns.filter(known=>known.indexOf(1) != -1).length>0){
        //     console.log("hello")
        // }
        
        console.log(knowns)
    }

    const findCon = () => {

        // "origins" is an array that contains the ids of the "known" worlds in the current "depth"
        const origins = knowns.filter(known => known[1] === depth).map(known => known[0])

        // get a list of all connection of origin
        const relcons = origins.map(ori => cons.filter((con) => con.firstProperty === ori || con.secondProperty === ori))[0]

        // setAvail(avail.filter(a=>a!==6))
        var temp = avail

        relcons?.map(con => {
            if (avail.includes(con.firstProperty)) {
                temp = temp.filter(a => a !== con.firstProperty)
                setKnowns(oldknowns => [...oldknowns, [con.firstProperty, depth + 1]])
                // temp.push(con.firstProperty)
            }
            else {
            }
            if (avail.includes(con.secondProperty)) {
                temp = temp.filter(a => a !== con.secondProperty)
                setKnowns(oldknowns => [...oldknowns, [con.secondProperty, depth + 1]])
                // temp.push(con.secondProperty)
            }
            else {
            }


        })
        setAvail(temp)
        setDepth(depth + 1)
        // relcons.map(con =>
        //     avail.includes(con.firstProperty) ?
        //         setAvail(avail.filter(a => a !== con.firstProperty)) :
        //         avail.includes(con.secondProperty ?
        //             setAvail(avail.filter(a => a !== con.secondProperty)) :
        //             console.log("doesnt")))

        // console.log(properties)
        // console.log(relcons)
        // console.log(avail)

    }




    return (
        <div>
            available
            {avail.map((a, i) => <div key={i}>
                {a}
            </div>)}
            <br></br>
            known
            {knowns.map((k, i) => <div key={i}>
                id:{k[0]}, depth:{k[1]}
            </div>)}
            <br></br>
            {/* {console.log(knowns)} */}
            <button onClick={() => findPath()} >check</button>
            <button onClick={() => testline()} >testline</button>
            {/* {numbers} */}
        </div>
    )
}

export default backup