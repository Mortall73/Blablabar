import { RouteConfig } from "vue-router";

import AdminLayout from '../../layouts/admin/AdminLayout.vue'

import PostsPage from '../../layouts/admin/pages/PostsPage.vue';
import PostPage from '../../layouts/admin/pages/PostPage.vue';

const adminRoutes: RouteConfig  = {
    path: "/admin",
    name: "admin",
    component: AdminLayout,
    children: [
        {
            path: 'posts',
            name: 'posts',
            component: PostsPage
        },
        {
            path: 'post/:id',
            name: 'post',
            component: PostPage,
            
        }
    ]
};

export default adminRoutes;