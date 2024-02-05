import { createRouter,createWebHistory,createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component:""
    },
]

const router = createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router;


