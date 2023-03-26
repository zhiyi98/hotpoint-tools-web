import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/components/home/Home.vue')
    },
    {
        path: '/search',
        name: 'Search',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/components/home/SearchPage.vue')
    },
    {
        path: '/explore',
        name: 'explore',
        meta: {
            title: '探索',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/components/explore/Explore.vue')
    },
    {
        path: '/notice',
        name: 'Notice',
        meta: {
            title: '通知',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/components/notice/Notice.vue')
    },
    {
        path: '/user',
        name: 'User',
        meta: {
            title: '用户中心',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/components/user/User.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
});