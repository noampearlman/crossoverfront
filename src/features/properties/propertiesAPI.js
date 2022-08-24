import axios from 'axios'

const URL = "http://127.0.0.1:8000/"
const URLGETPROPS = `${URL}props/`
const URLADDPROP = `${URL}addprop/`
// async(2)
export function getProps() {
    
    return new Promise((resolve) =>
        
        axios.get(URLGETPROPS)
        .then((res) => resolve({ data: res.data }))
        
        
    );
}export function addProp(data) {
    // const token = useSelector(selectToken)
    return new Promise((resolve) =>

        axios.post(URLADDPROP, data[0], {
            headers: {
                'Authorization': `Bearer ${data[1]}`
            }
        })

            .then((res) => resolve({ data: res.data }))


    );
}