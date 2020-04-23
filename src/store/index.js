import auth from "./modules/auth";
import actions from "./actions";
import mutations from "./mutations";
import Vuex from "vuex";

const state = {
    // some root states here
    loading: false,
};
const store = new Vuex.Store({
    state,
    actions,
    mutations,
    modules: {
        auth: auth,
    }
});

export default store
