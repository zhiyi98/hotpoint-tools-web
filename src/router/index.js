import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: import('../components/home/Home.vue')
    },
    {
        path: '/search',
        name: 'search',
        component: import('../components/home/SearchPage.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})