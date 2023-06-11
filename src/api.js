import axios from 'axios';

const interceptors = axios.create({
    baseURL: 'http://localhost:3000/',
});

export default interceptors;