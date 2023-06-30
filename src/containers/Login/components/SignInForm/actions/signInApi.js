import axios from 'axios';


const path = 'http://212.22.94.194:3030';

export const login = (query) => {
    return axios.post(`${path}/api/users/login`, query);
};
