import axios from 'axios';

export const getDummyUsers = ()=>{
    return axios.get("https://jsonplaceholder.typicode.com/users");
}