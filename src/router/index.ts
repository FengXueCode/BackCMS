/*
 * @Author: FengXue
 * @Date: 2024-04-08 17:41:43
 * @LastEditors: FengXue
 * @LastEditTime: 2024-08-09 11:57:38
 * @filePath: Do not edit
 */
import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/views/index.vue'
import Login from '@/views/login.vue'
import list from "@/static/menu/aside"


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
    name:"index",
    path: '/index',
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


