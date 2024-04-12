/*
 * @Author: FengXue
 * @Date: 2024-04-08 17:41:43
 * @LastEditors: FengXue
 * @LastEditTime: 2024-04-12 16:22:34
 * @filePath: Do not edit
 */
import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/views/index.vue'
import Banner from '@/views/image/banner.vue'
import StoreBanner from '@/views/image/storeBanner.vue'
import Delivery from '@/views/list/delivery.vue'
import Area from '@/views/list/area.vue'
import UserAudit from '@/views/jurisdiction/userAudit.vue'

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
    },
    {
        path: "/list",
        children: [
            {
                path: "/list/delivery",
                component: Delivery
            },
            {
                path: "/list/area",
                component: Area
            },
        ]
    },
    {
        path: "/jurisdiction",
        children: [
            {
                path: "/jurisdiction/userAudit",
                component: UserAudit
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;


