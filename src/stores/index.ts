/*
 * @Author: FengXue
 * @Date: 2024-04-09 09:26:49
 * @LastEditors: FengXue
 * @LastEditTime: 2024-04-09 09:29:30
 * @filePath: Do not edit
 */
import { defineStore } from "pinia";

export const useMainStore = defineStore("counter", () => {
  const userName = ref("admin")
  return {
    userName
  }
})