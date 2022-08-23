import axios from 'axios'

const URL = "http://127.0.0.1:8000/props/"
// async(2)
export function getProps() {
    
    return new Promise((resolve) =>
        
        axios.get(URL)
        .then((res) => resolve({ data: res.data }))
        
        
    );
}