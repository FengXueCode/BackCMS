/*
 * @Author: FengXue
 * @Date: 2024-04-08 17:41:43
 * @LastEditors: FengXue
 * @LastEditTime: 2024-04-09 09:23:09
 * @filePath: Do not edit
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.mount('#app')