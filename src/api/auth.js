import axios from '../plugins/axios';

export default {

    login(data) {
        return axios.post('api/login/', data)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error))
    },

    register(data) {
        return axios.post('api/register/', data)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error))
    },
}