<!--
 * @Author: FengXue
 * @Date: 2023-08-22 14:40:35
 * @LastEditors: FengXue
 * @LastEditTime: 2024-07-08 15:23:53
 * @filePath: Do not edit
-->
<template>
  <div class="init">
    <view class="login">
      <div class="title">xx管理平台</div>
      <el-form class="input" :model="login" :rules="rules" ref="form">
        <el-form-item label="账号" prop="account">
          <el-input v-model="login.account"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="login.password" type="password"></el-input>
        </el-form-item>
      </el-form>
      <div class="tip"></div>
      <el-button type="primary" size="default" @click="onSubmit(form)"
        >登录</el-button
      >
    </view>
  </div>
</template>

<script setup lang="ts">
import Axios from "@/request";
import { ElMessage, FormInstance, FormRules } from "element-plus";
import { useRouter } from "vue-router";
import { reactive } from "vue";
import { useMainStore } from "@/stores/index";
// import { Base64 } from "js-base64";
const store = useMainStore();
const router = useRouter();
interface Login {
  account: string;
  password: string;
}
const login = reactive({
  account: "",
  password: "",
});
const form = ref<FormInstance>();
const rules = reactive<FormRules<Login>>({
  account: [{ required: true, message: "账号不能为空", trigger: "blur" }],
  password: [{ required: true, message: "密码不能为空", trigger: "blur" }],
});
const onSubmit = (formEl: FormInstance | undefined) => {
  if (!formEl) return;

  formEl.validate((valid) => {
    if (valid) {
      router.push("/index/index");
    }
  });
};
</script>
<style lang="scss" scoped>
.init {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("@/assets/img/bg/bg.jpg");
  background-size: 100% 100%;
  .title {
    font-size: 20px;
  }
  .login {
    background: white;
    width: 300px;
    height: 300px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .logo {
      width: 100px;
      height: 100px;
      margin: 0;
    }
  }
}
</style>
