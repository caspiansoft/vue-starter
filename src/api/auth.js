import axios from 'axios';

export default {

    login(data) {
        return axios.post('api/token/', data)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error))
    },

    register(data) {
        return axios.post('api/register/', data)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error))
    },
}