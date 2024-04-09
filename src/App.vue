<!--
 * @Author: FengXue
 * @Date: 2024-04-08 17:41:43
 * @LastEditors: FengXue
 * @LastEditTime: 2024-04-09 10:38:34
 * @filePath: Do not edit
-->
<template>
  <div class="main">
    <header class="header">
      <Nav></Nav>
    </header>
    <div class="container">
      <aside class="aside">
        <Aside></Aside>
      </aside>
      <section class="content">
        <div class="tags"></div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
.main {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;

  .container {
    display: flex;
    width: 100%;
    height: calc(100vh - 60px);
    box-sizing: border-box;

    .content {
      width: calc(100vw - 200px);
      box-sizing: border-box;
      .tags {
        width: calc(100vw - 200px);
        box-sizing: border-box;
        height: 40px;
        overflow-x: auto;
        border-bottom: 1px solid var(--el-border-color);
      }
    }
  }
}
</style>
