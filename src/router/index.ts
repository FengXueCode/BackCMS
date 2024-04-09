/*
 * @Author: FengXue
 * @Date: 2024-04-08 17:41:43
 * @LastEditors: FengXue
 * @LastEditTime: 2024-04-09 23:44:12
 * @filePath: Do not edit
 */
import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/views/index.vue'
import Banner from '@/views/image/banner.vue'
import StoreBanner from '@/views/image/storeBanner.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Index,
        children: [
        ]
    },
    {
        path: '/image',
        children: [
            {
                path: "/image/banner",
                component: Banner
            },
            {
                path: "/image/store",
                component: StoreBanner
            },
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;


