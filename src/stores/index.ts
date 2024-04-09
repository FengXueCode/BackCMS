/*
 * @Author: FengXue
 * @Date: 2024-04-09 09:26:49
 * @LastEditors: FengXue
 * @LastEditTime: 2024-04-09 16:53:15
 * @filePath: Do not edit
 */
import { defineStore } from "pinia";

export const useMainStore = defineStore("main", () => {
  const userName = ref("admin")
  const path = ref("/")
  function setPath(val: string) {
    path.value = val
  }
  persist: {
    enabled: true
  }
  return {
    userName,
    path,
    setPath
  }
})