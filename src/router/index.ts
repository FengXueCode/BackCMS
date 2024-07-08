/*
 * @Author: FengXue
 * @Date: 2024-04-08 17:41:43
 * @LastEditors: FengXue
 * @LastEditTime: 2024-07-08 10:32:15
 * @filePath: Do not edit
 */
import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/views/index.vue'


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Index,
        children: [
        ]
    },


]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;


