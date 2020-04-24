import axios from 'axios'
import {api_url} from '../config/constants'


// Add a request interceptor
let axiosInstance = axios.create();

axiosInstance.defaults.baseURL = api_url;
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

axiosInstance.interceptors.request.use(
    async (config) => {

        let token = await localStorage.getItem('access_token');
        if (token) {
            config.headers.common = {'Authorization': `Token ${token}`}
        }
        // start loading
        return config;
    }
);
axiosInstance.interceptors.response.use(

);

export default axiosInstance;
