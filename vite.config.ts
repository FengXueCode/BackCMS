/*
 * @Author: FengXue
 * @Date: 2024-04-08 17:41:43
 * @LastEditors: FengXue
 * @LastEditTime: 2024-07-08 14:31:32
 * @filePath: Do not edit
 */
import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
// 设置别名指向src
const pathSrc = path.resolve(__dirname, 'src')
export default defineConfig({
  resolve: {
    alias: {
      '@': pathSrc,
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "pinia", "vue-router"],
      dirs: ["./src/stores"],
      resolvers: [
        //自动导入ElementPlus 相关函数
        ElementPlusResolver(),

      ],
    }),
    Components({
      //自定义组件位置

      resolvers: [
        // 自动导入ElementPlus组件
        ElementPlusResolver(),

      ],

    }),

  ],
})
