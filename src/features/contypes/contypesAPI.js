import axios from 'axios'

const URL = "http://127.0.0.1:8000/"
const URLGETTYPES =`${URL}types/`
// const URLADDTYPE =`${URL}addtype/`
// const URLDELTYPE =`${URL}deltype/`
// async(2)
export function getTypes() {
    
    return new Promise((resolve) =>
        
        axios.get(URLGETTYPES)
        .then((res) => resolve({ data: res.data }))
        
        
    );
}
// export function addtype(data) {
//     return new Promise((resolve) =>

//         axios.post(URLADDTYPE, data[0], {
//             headers: {
//                 'Authorization': `Bearer ${data[1]}`
//             }
//         })

//             .then((res) => resolve({ data: res.data }))


//     );
// }
// export function deltype(data) {
//     return new Promise((resolve) =>

//         axios.delete(`${URLDELTYPE}${data[0]}`, {
//             headers: {
//                 'Authorization': `Bearer ${data[1]}`
//             }
//         })

//             .then((res) => resolve({ data: res.data }))


//     );
// }
