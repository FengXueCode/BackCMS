<!--
 * @Author: FengXue
 * @Date: 2024-04-09 15:04:48
 * @LastEditors: FengXue
 * @LastEditTime: 2024-07-08 17:14:40
 * @filePath: Do not edit
-->
<template>
  <div class="main">
    <aside class="aside">
      <Aside></Aside>
    </aside>
    <section class="container">
      <header class="header">
        <Nav></Nav>
      </header>
      <section class="content">
        <div class="main-container">
          <el-tabs
            v-model="path"
            type="card"
            closable
            @tabClick="changeTab"
            @tabRemove="removeTab"
          >
            <el-tab-pane
              v-for="item in tabList"
              :key="item.path"
              :label="item.title"
              :name="item.path"
            >
              <router-view></router-view>
            </el-tab-pane>
          </el-tabs>
        </div>
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
const store = useMainStore();
const { tabList, path } = storeToRefs(store);
// 切换tab
const router = useRouter();
const changeTab = (tab: any) => {
  store.setPath(tab.props.name);
  router.push(tab.props.name);
};
//删除tab
const removeTab = (tab: any) => {
  store.removeTab(tab);
  if (tabList.value.length === 0) {
    store.addTab({
      title: "欢迎",
      path: "/index/index",
    });
    router.push("/");
  }
};
//监听路由变化切换tab
watch(
  () => router.currentRoute.value.path,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      activeTab.value = newVal;
    }
  }
);
</script>
<style lang="scss" scoped>
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
  .aside {
    height: 100%;
  }
  .container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    // width: calc(100vw - 200px);
    height: 100vh;
    box-sizing: border-box;
    .content {
      width: 100%;
      height: calc(100vh - 60px);
      box-sizing: border-box;
      padding: 5px;
      background: #ecf5ff;
      .main-container {
        width: 100%;
        height: 100%;
        background: white;
      }
    }
  }
}
</style>
