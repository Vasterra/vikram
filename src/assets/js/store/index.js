import auth from 'Store/modules/auth.js';
import search from 'Store/modules/search.js';
import rfq from 'Store/modules/rfq.js';
import { createStore } from 'vuex';

export default createStore({
    modules: {
        auth,
        search,
        rfq
    }
})