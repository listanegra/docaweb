import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Login from '@/views/Login.vue'
import Cadastro from '@/views/Cadastro.vue'
import Home from '@/views/Home.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        name: 'login',
        path: '/',
        component: Login
    },
    {
        name: 'cadastro',
        path: '/cadastro',
        component: Cadastro
    },
    {
        name: 'home',
        path: '/home',
        component: Home
    }
];

const router = new VueRouter({
    routes
});

export default router;
