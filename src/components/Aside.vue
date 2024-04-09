<!--
 * @Author: FengXue
 * @Date: 2023-08-22 02:20:24
 * @LastEditors: FengXue
 * @LastEditTime: 2024-04-09 10:38:46
 * @filePath: Do not edit
-->

<template>
  <div class="aside">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 5px">
      <el-radio-button :label="false">展开 </el-radio-button>
      <el-radio-button :label="true" v-if="!isCollapse">关闭</el-radio-button>
    </el-radio-group> -->
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      :router="true"
    >
      <el-menu-item index="/index/welcome">
        <el-icon><i-ep-CoffeeCup></i-ep-CoffeeCup></el-icon>
        <template #title>欢迎你~</template>
      </el-menu-item>

      <el-sub-menu index="other">
        <template #title>
          <el-icon><i-ep-House></i-ep-House></el-icon>
          <span>综合设置</span>
        </template>
        <el-menu-item index="/index/banner">
          <template #title>首页轮播图</template>
        </el-menu-item>
        <el-menu-item index="/index/notice">
          <template #title>公告设置</template>
        </el-menu-item>
        <el-menu-item index="/index/address">
          <template #title>公司地址管理</template>
        </el-menu-item>
        <el-menu-item index="/index/other">
          <template #title>其他设置</template>
        </el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="/commodity">
        <template #title>
          <el-icon>
            <i-ep-Goods></i-ep-Goods>
          </el-icon>
          <span>商品管理</span>
        </template>
        <el-menu-item index="/index/commodity">
          <template #title>商品管理</template>
        </el-menu-item>
        <el-menu-item index="/index/showList">
          <template #title>查看商品</template>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="/user">
        <template #title>
          <el-icon><i-ep-User></i-ep-User></el-icon>
          <span>用户管理</span>
        </template>
        <el-menu-item index="/index/userList">
          <template #title>用户列表</template>
        </el-menu-item>
        <el-menu-item index="/index/user">
          <template #title>用户权限</template>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="/freight">
        <template #title>
          <el-icon><i-ep-Bicycle></i-ep-Bicycle></el-icon>
          <span>运费管理</span>
        </template>
        <el-menu-item index="/index/freight">
          <template #title>规则管理</template>
        </el-menu-item>
        <el-menu-item index="/index/freightOther">
          <template #title>其它设置</template>
        </el-menu-item>
      </el-sub-menu>

      <el-menu-item index="/index/classify"
        ><template #title>
          <el-icon><i-ep-Grid></i-ep-Grid></el-icon>
          <span>分类管理</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/index/coupon">
        <el-icon><i-ep-Ticket></i-ep-Ticket></el-icon>

        <template #title>
          <span>优惠劵管理</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/index/order">
        <el-icon><i-ep-List></i-ep-List></el-icon>
        <template #title>
          <span>订单管理</span>
        </template>
      </el-menu-item>

      <template #title>
        <el-icon><i-ep-User></i-ep-User></el-icon>
        <span>人员管理</span>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: calc(100vh - 60px);
  overflow-y: auto;
}
.aside {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
