import axios from 'axios'

const URL = "http://127.0.0.1:8000/cons/"
// async(2)
export function getCons() {
    
    return new Promise((resolve) =>
        
        axios.get(URL)
        .then((res) => resolve({ data: res.data }))
        
        
    );
}