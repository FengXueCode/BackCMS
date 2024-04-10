<!--
 * @Author: FengXue
 * @Date: 2023-08-22 14:36:30
 * @LastEditors: FengXue
 * @LastEditTime: 2024-04-09 17:39:34
 * @filePath: Do not edit
-->
<template>
  <div class="init">
    <div class="title">首页轮播图</div>
    <el-divider direction="horizontal" content-position="left"></el-divider>

    <el-upload
      v-model:file-list="fileList"
      :action="url"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      accept=".jpg,.png"
      :data="{ type: 1 }"
      :on-success="getSuccess"
      :before-upload="beforeUpload"
    >
      <el-icon>
        <Plus />
      </el-icon>
    </el-upload>
    <div class="tip">仅支持.jpg,.png格式图片,建议尺寸350px*160px</div>
    <el-dialog v-model="dialogVisible">
      <img
        w-full
        :src="dialogImageUrl"
        alt="Preview Image"
        style="width: 100%"
      />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Plus } from "@element-plus/icons-vue";
import type { UploadProps, UploadUserFile } from "element-plus";
import Axios from "@/request/index";
const fileList = ref([]);
import { useRouter } from "vue-router";
import Qs from "qs";
const url = import.meta.env.VITE_BASE_URL + "/cms/saveBanner";

const getSuccess = (res) => {};
//预览图片
const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const beforeUpload = (file: any) => {
  if (file.size > 1024 * 1024 * 10) {
    ElMessage.error("图片大小不能超过10M");
    return false;
  }
};
const handleRemove: UploadProps["onRemove"] = (uploadFile) => {
  Axios({
    url: "/cms/delBannerById",
    Headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    params: {
      bannerId: uploadFile.bannerId,
    },
  }).then((res) => {
    ElMessage.success("删除成功");
  });
};

const handlePictureCardPreview: UploadProps["onPreview"] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!;
  dialogVisible.value = true;
};

onMounted(() => {
  /**获取所有轮播图 */
  Axios({
    url: "/cms/findBanner",
    params: {
      type: 1,
    },
  }).then((res) => {
    res.data.forEach((element) => {
      element.url = element.path;
    });
    fileList.value = res.data;
  });
});
</script>
<style lang="scss" scoped></style>
