import axios from 'axios'

const URL = "http://127.0.0.1:8000/token/"
// async(2)
export function signin(cred) {
    
    return new Promise((resolve) =>
        
        axios.post(URL, { username: cred[0], password: cred[1]})
        .then((res) => resolve({ data: res.data }))
        
        
    );
}