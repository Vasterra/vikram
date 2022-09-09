import { createApp } from 'vue';
import { createWebHistory, createRouter } from "vue-router";
import routes from 'Routes/index.js';
import store from 'Store/index.js';
import middleware from '@grafikri/vue-middleware';

import App from './assets/js/App.vue';

const app = createApp(App);
const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(middleware({store}))

app.use(router);
app.use(store);

app.mount('#app')