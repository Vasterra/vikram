export default {
    state: {
        api_token: null,
        isAuthorized: false
    },
    getters: {
        getUserToken(state) {
            return state.api_token;
        },
        isAuthorized(state) {
            return state.isAuthorized;
        }
    },
    mutations: {
        SET_USER_TOKEN(state, token) {
            state.api_token = token;
        },
        SET_AUTHORIZED(state) {
            state.isAuthorized = localStorage.getItem('api_token') ? true : false;
        }
    },
    actions: {
        setUserToken({commit}, token) {
            commit('SET_USER_TOKEN', token);
        },
        setAuthorized({commit}) {
            commit('SET_AUTHORIZED');
        }
    }
}