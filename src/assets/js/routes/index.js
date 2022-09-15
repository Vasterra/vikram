import Login from 'Views/Login.vue'
import Home from 'Views/Home.vue'
import Rfq from 'Views/Rfq.vue'
import Result from 'Views/Result.vue'

import user from 'Middleware/user.js';
import guest from 'Middleware/guest.js';

export default [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            middleware: [user],
        },
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            middleware: [guest],
        },
    },
    {
        path: '/rfq',
        name: 'Rfq',
        component: Rfq,
        meta: {
            middleware: [guest],
        },
    },
    {
        path: '/result',
        name: 'Result',
        component: Result,
        meta: {
            middleware: [guest],
        },
    }
]