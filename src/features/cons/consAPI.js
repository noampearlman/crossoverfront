import axios from 'axios'

const URL = "http://127.0.0.1:8000/"
const URLGETCONS =`${URL}cons/`
const URLADDCONS =`${URL}addcon/`
// async(2)
export function getCons() {
    
    return new Promise((resolve) =>
        
        axios.get(URLGETCONS)
        .then((res) => resolve({ data: res.data }))
        
        
    );
}