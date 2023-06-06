import axios from 'axios';

const interceptors = axios.create({
    baseURL: 'http://localhost:3000/',
});

interceptors.interceptors.request.use((config) => {
    config.headers['Access-Control-Allow-Origin'] = 'http://localhost:5173'; // здесь нужно указать корректный origin для вашего frontend
    config.headers['Access-Control-Allow-Headers'] = 'Content-Type';
    return config;
});

export default interceptors;