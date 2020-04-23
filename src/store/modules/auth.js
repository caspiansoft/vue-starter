import api from '../../api'
import {LOGIN_SUCCESS} from "../types";

// initial state
// shape: [{ id, quantity }]
const state = {
    user: null,
    isAuth: false,
};

// getters
const getters = {
    isAuth: state => {
        return state.isAuth
    },
    user: state => {
        return state.user
    }
};


// actions
const actions = {
    // eslint-disable-next-line no-unused-vars
    async login({commit, state}, {email, password}) {
        let loginResponse = await api.auth.login({email, password})
        let loginIsSuccess = !!loginResponse.data.token
        localStorage.setItem('token', loginIsSuccess.data.token)
        commit(LOGIN_SUCCESS, loginResponse.data)
    },
    // TODO: - other auth actions here (register, forgetPassword ...)

}

// mutations
const mutations = {
    [LOGIN_SUCCESS](state, user) {
        state.isAuth = true;
        localStorage.setItem('user', JSON.stringify(user))
    },
    logout() {
        // TODO : - need some improvements
        localStorage.clear()
    }
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}