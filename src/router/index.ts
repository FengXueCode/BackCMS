/*
 * @Author: FengXue
 * @Date: 2024-04-08 17:41:43
 * @LastEditors: FengXue
 * @LastEditTime: 2024-07-08 15:45:31
 * @filePath: Do not edit
 */
import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/views/index.vue'
import Login from '@/views/login.vue'


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Login,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/index',
        component: Index,
        children: [
            {
                path: '/index/index',
                component: () => import('@/views/welcome/index.vue'),
                children: [
                ]
            },
            {
                path: '/index/model',
                component: () => import('@/views/model/modelMS.vue'),
            },
            {
                path: '/index/addModel',
                component: () => import('@/views/model/addModel.vue'),
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;


