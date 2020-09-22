import { RouteConfig } from "vue-router";

import ClientLayout from '../../layouts/client/ClientLayout.vue';
import RegistrationPage from '../../layouts/client/pages/RegistrationPage.vue';
import AuthPage from '../../layouts/client/pages/AuthPage.vue';
import UiKitPage from '../../layouts/client/pages/UiKitPage.vue';

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
        },
        {
            path: 'uikit',
            name: 'uikit',
            component: UiKitPage,
        }
    ]
};

export default clientRoutes;