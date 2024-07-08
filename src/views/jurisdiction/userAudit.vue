<!--
 * @Author: FengXue
 * @Date: 2024-04-09 23:50:32
 * @LastEditors: FengXue
 * @LastEditTime: 2024-04-10 22:08:37
 * @filePath: Do not edit
-->
<template>
  <div class="init">
    <div class="title">用户审核</div>
    <el-divider direction="horizontal" content-position="left"></el-divider>
    <div class="function-nav">
      <el-select
        v-model="filters.status"
        placeholder="认证状态"
        clearable
        style="width: 150px; margin-right: 10px"
        @change="getList"
      >
        <el-option label="认证中" value="1"> </el-option>
        <el-option label="已认证" value="2"> </el-option>
        <el-option label="已驳回" value="-1"> </el-option>
      </el-select>

      <el-popconfirm
        :title="'是否确认通过' + checkList.length + '项数据?'"
        confirmButtonText="确认"
        cancelButtonText="取消"
        confirmButtonType="primary"
        cancelButtonType="text"
        icon="el-icon-question"
        iconColor="#f90"
        hideIcon="false"
        @confirm="handleBatchPass"
      >
        <template #reference>
          <el-button type="primary" size="default" @click=""
            >批量通过</el-button
          >
        </template>
      </el-popconfirm>

      <el-popconfirm
        :title="'是否确认驳回' + checkList.length + '项数据?'"
        confirmButtonText="确认"
        cancelButtonText="取消"
        confirmButtonType="primary"
        cancelButtonType="text"
        icon="el-icon-question"
        iconColor="#f90"
        hideIcon="false"
        @confirm="handleBatchRefuse"
      >
        <template #reference>
          <el-button type="danger" size="default" @click="">批量驳回</el-button>
        </template>
      </el-popconfirm>
    </div>
    <div class="init-main">
      <el-scrollbar>
        <el-table
          :data="tableData"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            type="selection"
            width="55"
            :selectable="handleDisable"
          ></el-table-column>
          <el-table-column label="序号" width="80" align="center">
            <template #default="scope">
              {{ scope.$index + 1 }}
            </template>
          </el-table-column>

          <el-table-column
            prop="userId"
            label="用户编号"
            width="auto"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="nickName"
            label="用户昵称"
            width="auto"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="deliveryName"
            label="学生证"
            width="auto"
            align="center"
          >
            <template #default="scope">
              <el-image
                style="width: 100px; height: 100px"
                @click="showImg(scope.row, true)"
                :src="scope.row.studentCard"
                fit="cover"
              ></el-image>
            </template> </el-table-column
          ><el-table-column
            prop="deliveryName"
            label="手持照"
            width="auto"
            align="center"
          >
            <template #default="scope">
              <el-image
                style="width: 100px; height: 100px"
                @click="showImg(scope.row, false)"
                :src="scope.row.inHand"
                fit="cover"
              ></el-image>
            </template> </el-table-column
          ><el-table-column
            prop="deliveryName"
            label="认证状态"
            width="auto"
            align="center"
          >
            <template #default="scope">
              <span v-if="scope.row.studentVerification == 0" class="red"
                >未认证</span
              >
              <span v-if="scope.row.studentVerification == 1" class="yellow"
                >审核中</span
              >
              <span v-if="scope.row.studentVerification == 2" class="green"
                >已认证</span
              >
              <span v-if="scope.row.studentVerification == -1" class="green"
                >已驳回</span
              >
            </template>
          </el-table-column>
          <el-table-column prop="" label="操作" width="200" align="center">
            <template #default="scope">
              <div class="group" v-if="scope.row.studentVerification == 1">
                <el-button
                  type="primary"
                  size="mini"
                  @click="handlePass(scope.row)"
                  >通过</el-button
                >
                <el-popconfirm
                  :title="'是否确认删除?'"
                  confirmButtonText="确认"
                  cancelButtonText="取消"
                  confirmButtonType="primary"
                  cancelButtonType="text"
                  icon="el-icon-question"
                  iconColor="#f90"
                  hideIcon="false"
                  @confirm="handleRefuse(scope.row)"
                >
                  <template #reference>
                    <el-button type="danger" size="mini" @click=""
                      >驳回</el-button
                    >
                  </template>
                </el-popconfirm>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-scrollbar>
      <el-dialog v-model="dialogVisible">
        <img
          w-full
          :src="dialogImageUrl"
          alt="Preview Image"
          style="width: 100%"
        />
      </el-dialog>
    </div>

    <!-- 分页 -->
    <div class="pagination">
      <el-pagination
        v-model:current-page="page.pageNum"
        v-model:page-size="page.pageSize"
        :page-sizes="[10, 20, 30, 40, 50]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <!-- 编辑 -->
    <el-dialog
      title="新增配送点"
      v-model="isEdit"
      width="50%"
      :show-close="false"
      :close-on-click-modal="false"
    >
      <el-form
        :model="delivery"
        ref="deliveryForm"
        :rules="rules"
        label-width="100px"
        :inline="false"
        size="normal"
      >
        <el-form-item label="配送点名称" prop="deliveryName">
          <el-input v-model="delivery.deliveryName" clearable></el-input>
        </el-form-item>
        <el-form-item label="" size="normal">
          <el-button @click="isEdit = false">取消</el-button>
          <el-button type="primary" @click="submitForm(deliveryForm)"
            >保存</el-button
          >
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ElMessage, FormInstance, FormRules } from "element-plus";
import { onMounted, reactive } from "vue";
import Axios from "../../request";
onMounted(() => {
  getList();
});
//显示图片
const dialogVisible = ref(false);
const dialogImageUrl = ref("");
const showImg = (row: any, flag: boolean) => {
  dialogVisible.value = true;
  if (flag) {
    dialogImageUrl.value = row.studentCard;
  } else {
    dialogImageUrl.value = row.inHand;
  }
};
const tableData = ref([]); //表格数据
const checkList = ref([]); //已选择数据
const page = ref({
  pageNum: 1,
  pageSize: 20,
  total: 0,
});
const filters = reactive({
  status: "",
});
const handleSizeChange = (val: number) => {
  page.value.pageSize = val;
  getList();
};
const handleCurrentChange = (val: number) => {
  page.value.pageNum = val;
  getList();
};
const getList = () => {
  Axios({
    url: import.meta.env.VITE_BASE_URL + "/user/findByStatus",
    params: { ...page.value, ...filters },
  }).then((res) => {
    tableData.value = res.data.records;
    page.value.total = res.data.total;
  });
};
interface Delivery {
  deliveryId: string;
  deliveryName: string;
}
const delivery = ref<Delivery>({
  deliveryId: "",
  deliveryName: "",
});
const deliveryForm = ref<FormInstance>();
//规则校验
const rules = reactive<FormRules<Delivery>>({
  deliveryName: [
    { required: true, message: "请输入配送点名称", trigger: "blur" },
  ],
});
//监听选择
const handleSelectionChange = (val: any) => {
  checkList.value = val;
};
const isEdit = ref(false);
//新增

const handleDisable = (row: any) => {
  return row.studentVerification == 1 ? true : false;
};
const handleBatchPass = () => {
  if (checkList.value.length == 0) {
    ElMessage.warning("请选择要通过的数据");
    return;
  }
  handlePass(checkList.value);
};

const handlePass = (row: any) => {
  row = row instanceof Array ? row : [row];
  Axios({
    url: import.meta.env.VITE_BASE_URL + "/cms/pass",
    method: "POST",
    data: row,
  }).then((res) => {
    if (res.data.code == 200) {
      ElMessage.success("通过成功");
      getList();
    }
  });
};

const handleBatchRefuse = () => {
  if (checkList.value.length == 0) {
    ElMessage.warning("请选择要驳回的数据");
    return;
  }
  handleRefuse(checkList.value);
};
const handleRefuse = (row: any) => {
  row = row instanceof Array ? row : [row];
  Axios({
    url: import.meta.env.VITE_BASE_URL + "/cms/refuse",
    method: "POST",
    data: row,
  }).then((res) => {
    if (res.data.code == 200) {
      ElMessage.success("驳回成功");
      getList();
    }
  });
};
</script>
<style lang="scss" scoped></style>
