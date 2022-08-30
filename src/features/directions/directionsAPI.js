import axios from 'axios'

const URL = "http://127.0.0.1:8000/"
const URLGETDIRS =`${URL}dirs/`
// const URLADDDIR =`${URL}adddir/`
// const URLDELDIR =`${URL}deldir/`
// async(2)
export function getDirs() {
    
    return new Promise((resolve) =>
        
        axios.get(URLGETDIRS)
        .then((res) => resolve({ data: res.data }))
        
        
    );
}
// export function addDir(data) {
//     return new Promise((resolve) =>

//         axios.post(URLADDDIR, data[0], {
//             headers: {
//                 'Authorization': `Bearer ${data[1]}`
//             }
//         })

//             .then((res) => resolve({ data: res.data }))


//     );
// }
// export function delDir(data) {
//     return new Promise((resolve) =>

//         axios.delete(`${URLDELDIR}${data[0]}`, {
//             headers: {
//                 'Authorization': `Bearer ${data[1]}`
//             }
//         })

//             .then((res) => resolve({ data: res.data }))


//     );
// }
