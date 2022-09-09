export default {
    state: {
        user_token: null,
        isAuthorized: false
    },
    getters: {
        getUserToken(state) {
            return state.user_token;
        },
        isAuthorized(state) {
            return state.isAuthorized;
        }
    },
    mutations: {
        SET_USER_TOKEN(state, token) {
            state.user_token = token;
        },
        SET_AUTHORIZED(state) {
            state.isAuthorized = localStorage.getItem('user_token');
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