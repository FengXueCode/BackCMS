/*
 * @Author: FengXue
 * @Date: 2024-04-09 09:26:49
 * @LastEditors: FengXue
 * @LastEditTime: 2024-08-09 11:59:40
 * @filePath: Do not edit
 */
import { defineStore } from "pinia";
export const useMainStore = defineStore("main", () => {
  //用户名
  const userName = ref("admin")
  //当前路由
  const path = ref("/")
  function setPath(val: string) {
    path.value = val
  }
  //tab列表
  const tabList = ref([
    {
      title: "欢迎",
      path: "/index/index"
    }
  ])
  function addTab(val: any) {
    console.log(val);

    let index = tabList.value.findIndex((item: any) => {
      return item.path === val.path
    })
    if (index === -1) {
      tabList.value.push(val)
    }
  }
  function removeTab(val: any) {
    tabList.value = tabList.value.filter((item: any) => {
      return item.path !== val
    })

  }

  return {
    userName,
    path,
    setPath,
    tabList,
    addTab,
    removeTab
  }
},
  {
    //持久化
    persist: {
      enabled: true
    }
  }

)