import Vue from 'vue'
import VueRouter from 'vue-router'

import { Components } from './components';

Vue.use(VueRouter)

export const routes = [
    { path: '/', name: 'home', component: Components.Home },
    { path: '/about', name: 'about', component: Components.About },
    { path: '/contact', name: 'contact', component: Components.Contact },
    { path: '/portfolio', name: 'portfolio', component: Components.Portfolio },
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;
