<!--
 * @Author: FengXue
 * @Date: 2023-08-22 02:20:24
 * @LastEditors: FengXue
 * @LastEditTime: 2024-07-08 16:44:02
 * @filePath: Do not edit
-->

<template>
  <div class="aside">
    <el-menu
      :default-active="path"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :router="true"
      @select="handleSelect"
    >
      <div class="menu-title" :class="{ close: !isCollapse }">
        <div class="title" v-if="!isCollapse">三维模型管理系统</div>
        <div class="switch" @click="isCollapse = !isCollapse">
          <img
            v-if="!isCollapse"
            class="icon"
            src="../assets/icon/menu/menu-close.png"
            alt=""
          />
          <img
            v-else
            class="icon"
            src="../assets/icon/menu/menu-open.png"
            alt=""
          />
        </div>
      </div>
      <div v-for="item in aside" :key="item.path">
        <el-menu-item :index="item.path" v-if="item.child.length == 0">
          <el-icon size="24px">
            <component :is="item.icon"></component>
          </el-icon>
          <template #title>
            <span v-if="!isCollapse">
              {{ item.title }}
            </span>

            <span v-else>{{ item.title }}</span>
          </template>
        </el-menu-item>
        <el-sub-menu :index="item.path" v-else>
          <template #title>
            <el-icon size="24px">
              <component :is="item.icon"></component>
            </el-icon>
            <span v-if="!isCollapse">
              {{ item.title }}
            </span>
          </template>
          <el-menu-item :index="e.path" v-for="e in item.child">
            <el-icon size="24px">
              <component :is="e.icon"></component>
            </el-icon>
            <span>
              {{ e.title }}
            </span>
          </el-menu-item>
        </el-sub-menu>
      </div>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import aside from "@/static/menu/aside.js";
import { useMainStore } from "@/stores/index";
import { storeToRefs } from "pinia";
const store = useMainStore();
const { path } = storeToRefs(store);
const isCollapse = ref(true);
const handleSelect = (index: any) => {
  store.setPath(index);
  let tab = aside.find((e) => e.path == index);
  store.addTab(tab);
};
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100vh;
  overflow-y: auto;
}

.aside {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  .menu-title {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10px;
    .title {
      width: 80%;
    }
    .switch {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      .icon {
        width: 24px;
      }
    }
    .close {
      flex-direction: column;
    }
  }
}
</style>
