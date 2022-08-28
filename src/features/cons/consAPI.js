import axios from 'axios'

const URL = "http://127.0.0.1:8000/"
const URLGETCONS =`${URL}cons/`
const URLADDCON =`${URL}addcon/`
const URLDELCON =`${URL}delcon/`
// async(2)
export function getCons() {
    
    return new Promise((resolve) =>
        
        axios.get(URLGETCONS)
        .then((res) => resolve({ data: res.data }))
        
        
    );
}
export function addCon(data) {
    // const token = useSelector(selectToken)
    return new Promise((resolve) =>

        axios.post(URLADDCON, data[0], {
            headers: {
                'Authorization': `Bearer ${data[1]}`
            }
        })

            .then((res) => resolve({ data: res.data }))


    );
}
export function delCon(data) {
    // const token = useSelector(selectToken)
    return new Promise((resolve) =>

        axios.delete(`${URLDELCON}${data[0]}`, {
            headers: {
                'Authorization': `Bearer ${data[1]}`
            }
        })

            .then((res) => resolve({ data: res.data }))


    );
}
