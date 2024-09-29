import axios from 'axios';

let baseURL = "http://localhost:8080"

export default axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json' 
    },
    withCredentials: false
});