import { RouteConfig } from "vue-router";

import ClientLayout from '../../layouts/client/ClientLayout.vue';
import RegistrationPage from '../../layouts/client/pages/RegistrationPage.vue';
import AuthPage from '../../layouts/client/pages/AuthPage.vue';

const clientRoutes: RouteConfig  = {
    path: "/",
    name: "mainPage",
    component: ClientLayout,
    children: [
        {
            path: 'registration',
            name: 'registration',
            component: RegistrationPage,
        },
        {
            path: 'signin',
            name: 'signin',
            component: AuthPage,
        }
    ]
};

export default clientRoutes;