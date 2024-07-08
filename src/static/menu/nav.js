/*
 * @Author: FengXue
 * @Date: 2024-07-08 08:59:44
 * @LastEditors: FengXue
 * @LastEditTime: 2024-07-08 16:20:42
 * @filePath: Do not edit
 */

import { createPinia } from "pinia";
import { useMainStore } from "@/stores/index";
import { storeToRefs } from "pinia";
const pinia = createPinia();
const store = useMainStore(pinia);
const { userName } = storeToRefs(store);
const nav = {
  logo: {
    img: "",
    path: "/index/index"
  },
  url: [
    {
      title: userName.value,
      path: '/',
      icon: '',
      child: [
        {
          title: '退出',
          path: '/login',
          icon: '',
          child: []
        },
      ]
    },
  ]
}
export default nav