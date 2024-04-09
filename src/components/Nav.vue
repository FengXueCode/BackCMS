<!--
 * @Author: FengXue
 * @Date: 2023-08-15 10:42:23
 * @LastEditors: FengXue
 * @LastEditTime: 2024-04-09 10:38:15
 * @filePath: Do not edit
-->
<template>
  <el-menu class="head" mode="horizontal" :ellipsis="false">
    <el-menu-item index="0">
      <img class="logo" src="" alt=" logo" />
    </el-menu-item>
    <div class="flex-grow" />
    <el-sub-menu index="2">
      <template #title>{{ userName }}</template>
      <el-menu-item index="2-1">退出</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
// import logo from "@/assets/logo3.png";
import { useMainStore } from "@/stores/index";
import { storeToRefs } from "pinia";
const store = useMainStore();
const { userName } = storeToRefs(store);
</script>

<style lang="scss">
.head {
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  padding: 0 10px 0 10px;
  border-bottom: 1px solid var(--el-border-color);
  .logo {
    display: flex;
    align-items: center;
    height: 90%;
    .img {
      width: 190px;
      height: 50%;
    }
  }
  .flex-grow {
    flex-grow: 1;
  }
}
</style>
