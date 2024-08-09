<!--
 * @Author: FengXue
 * @Date: 2023-08-15 10:42:23
 * @LastEditors: FengXue
 * @LastEditTime: 2024-07-08 16:20:08
 * @filePath: Do not edit
-->
<template>
  <el-menu class="head" mode="horizontal" router :ellipsis="false">
    <!-- <el-menu-item :index="nav.logo.path"> -->
    <!--   <img class="logo" :src="nav.logo.img" alt=" logo" /> -->
    <!-- </el-menu-item> -->
    <div class="flex-grow" />
    <div v-for="item in nav.url" :key="item.path">
      <el-menu-item :index="item.path" v-if="item.child.length == 0">
        {{ item.title }}
      </el-menu-item>
      <el-sub-menu :index="item.path" v-else>
        <template #title>{{ item.title }}</template>
        <el-menu-item :index="item.path" v-for="e in item.child">
          {{ e.title }}
        </el-menu-item>
      </el-sub-menu>
    </div>
  </el-menu>
</template>

<script lang="ts" setup>
// import logo from "@/assets/logo3.png";
import nav from "@/static/menu/nav.js";
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
