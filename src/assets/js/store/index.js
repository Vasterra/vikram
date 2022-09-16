import auth from 'Store/modules/auth.js';
import search from 'Store/modules/search.js';
import { createStore } from 'vuex';

export default createStore({
    modules: {
        auth,
        search
    }
})