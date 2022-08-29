import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCons } from '../cons/consSlice'
import { selectProps } from '../properties/propertiesSlice'

const Mytest = () => {
    const numbers = [[1, 2], [1, 2]]
    numbers.push([1, 2])
    // console.log(numbers)
    const [first, setFirst] = useState(12)
    const [second, setSecond] = useState(4)

    const properties = useSelector(selectProps)

    const cons = useSelector(selectCons)



    const findPath = () => {
        var avail = properties.filter(prop => prop.id !== first).map(prop => prop.id)
        // console.log(avail)
        var knowns = [[first,null, 0]]
        // console.log(knowns)
        var depth = 0

        for (var i=0; i < 10; i++) {
            // console.log(knowns.filter(known => known.indexOf(4) != -1).length > 0)

            if (!knowns.filter(known => known.indexOf(second) !== -1).length > 0) {
                var data = findCon(knowns, avail, depth)
                knowns = data.knowns
                avail = data.avail
                depth++
                // console.log("----")
                // console.log(avail)
                // console.log(knowns)
                // console.log(depth)
            }
        }
        // console.log("----")
        // console.log(avail)
        // console.log(knowns)
        // console.log(depth)

        var proplist = [second]

        for (var i=0; i < depth; i++) {
            proplist.unshift( knowns.filter(known=>known[0]===proplist[0])[0][1])
            console.log(proplist)
        }

        var relcons = []

        for (var i=0; i < depth; i++) {
            console.log(proplist[i])
            console.log(proplist[i+1])
            relcons.push(
                cons.filter(con=>con.firstProperty === proplist[i] || con.secondProperty === proplist[i] )
                .filter(con=>con.firstProperty === proplist[i+1] || con.secondProperty === proplist[i+1] )
                )
            console.log(relcons)
                
        }

        
    }

    const findCon = (knowns, avail, depth) => {

        // "origins" is an array that contains the ids of the "known" worlds in the current "depth"
        const origins = knowns.filter(known => known[2] === depth).map(known => known[0])

        // get a list of all connection of origin
        const relcons = origins.map(ori => cons.filter((con) => con.firstProperty === ori || con.secondProperty === ori))[0]

        // setAvail(avail.filter(a=>a!==6))


        relcons?.map(con => {
            if (avail.includes(con.firstProperty)) {
                avail = avail.filter(a => a !== con.firstProperty)
                knowns.push([con.firstProperty,con.secondProperty, depth + 1])
                // temp.push(con.firstProperty)
            }
            else {
            }
            if (avail.includes(con.secondProperty)) {
                avail = avail.filter(a => a !== con.secondProperty)
                knowns.push([con.secondProperty,con.firstProperty, depth + 1])
                // temp.push(con.secondProperty)
            }
            else {
            }


        })


        return { knowns, avail, depth }

    }




    return (
        <div>
            {/* {numbers} */}
            available
            {/* {avail.map((a, i) => <div key={i}>
                {a}
            </div>)}
            <br></br>
            known
            {knowns.map((k, i) => <div key={i}>
                id:{k[0]}, depth:{k[1]}
            </div>)} */}
            <br></br>
            {/* {console.log(knowns)} */}
            <button onClick={() => findPath()} >check</button>
            {/* {numbers} */}
        </div>
    )
}

export default Mytest