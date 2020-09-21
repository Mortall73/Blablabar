import Vue from "vue";
import VueRouter from "vue-router";

import adminRoutes from './admin/main';
import clientRoutes from './client/main';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL || 'http://localhost',
    routes: [
        adminRoutes,
        clientRoutes
    ],
});

export default router;