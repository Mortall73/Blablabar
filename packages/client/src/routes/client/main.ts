import { RouteConfig } from "vue-router";

import ClientLayout from '../../layouts/client/ClientLayout.vue';
import RegistrationPage from '../../layouts/client/pages/RegistrationPage.vue';
import AuthPage from '../../layouts/client/pages/AuthPage.vue';
import UiKitPage from '../../layouts/client/pages/UiKitPage.vue';
import ProfilePage from '../../layouts/client/pages/ProfilePage.vue';

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
				},
				{
					path: 'profile',
					name: 'profile',
					component: ProfilePage,
			}
    ]
};

export default clientRoutes;