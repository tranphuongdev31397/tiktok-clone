import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: (param) => queryString.stringify(param),
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (err) => {
        throw err;
    },
);

axiosClient.interceptors.request.use(async (config) => {
    return config;
});
export default axiosClient;
