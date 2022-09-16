export default {
    state: {
        showSearchOptions: false,
    },
    getters: {
        showSearchOptions(state) {
            return state.showSearchOptions;
        },
    },
    mutations: {
        SHOW_SEARCH_OPTIONS(state) {
            state.showSearchOptions = true;
        },
        HIDE_SEARCH_OPTIONS(state) {
            state.showSearchOptions = false;
        },
    },
    actions: {
        showSearchOptions({commit}) {
            commit('SHOW_SEARCH_OPTIONS');
        },
        hideSearchOptions({commit}) {
            commit('HIDE_SEARCH_OPTIONS');
        }
    }
}