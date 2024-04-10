<!--
 * @Author: FengXue
 * @Date: 2024-04-09 23:50:32
 * @LastEditors: FengXue
 * @LastEditTime: 2024-04-10 11:32:07
 * @filePath: Do not edit
-->
<template>
  <div class="init">
    <div class="title">配送点列表</div>
    <el-divider direction="horizontal" content-position="left"></el-divider>
    <div class="function-nav">
      <el-button type="primary" @click="addDelivery">添加配送点</el-button>
      <el-popconfirm
        :title="'是否确认删除' + checkList.length + '项数据?'"
        confirmButtonText="确认"
        cancelButtonText="取消"
        confirmButtonType="primary"
        cancelButtonType="text"
        icon="el-icon-question"
        iconColor="#f90"
        hideIcon="false"
        @confirm="handleBatchDelete"
      >
        <template #reference>
          <el-button type="danger" size="default" @click="">批量删除</el-button>
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
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="序号" width="80">
            <template #default="scope">
              {{ scope.$index + 1 }}
            </template>
          </el-table-column>

          <el-table-column
            prop="deliveryName"
            label="配送点名称"
            width="auto"
          ></el-table-column>
          <el-table-column prop="" width="200">
            <template #default="scope">
              <div class="group">
                <el-button
                  type="primary"
                  size="mini"
                  @click="handleEdit(scope.row)"
                  >编辑</el-button
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
                  @confirm="handleDelete(scope.row)"
                >
                  <template #reference>
                    <el-button type="danger" size="mini" @click=""
                      >删除</el-button
                    >
                  </template>
                </el-popconfirm>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-scrollbar>
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
  getDeliveryList();
});
const tableData = ref([]); //表格数据
const checkList = ref([]); //已选择数据
const page = ref({
  pageNum: 1,
  pageSize: 20,
  total: 0,
});
const handleSizeChange = (val: number) => {
  page.value.pageSize = val;
  getDeliveryList();
};
const handleCurrentChange = (val: number) => {
  page.value.pageNum = val;
  getDeliveryList();
};
const getDeliveryList = () => {
  Axios({
    url: import.meta.env.VITE_BASE_URL + "/cms/findDeliveryByPage",
    params: page.value,
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
  console.log("🚀 ~ handleSelectionChange ~ val:", val);
  checkList.value = val;
};
const isEdit = ref(false);
//新增
const addDelivery = () => {
  isEdit.value = true;
  isChange.value = false;
  delivery.value = {
    deliveryId: "",
    deliveryName: "",
  };
};
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      if (isChange.value) {
        Axios({
          url: import.meta.env.VITE_BASE_URL + "/cms/updateDelivery",
          method: "POST",
          data: delivery.value,
        }).then((res) => {
          if (res.data.code == 200) {
            isEdit.value = false;
            isChange.value = false;
            ElMessage.success("保存成功");
            getDeliveryList();
          } else {
            ElMessage.error(res.data.msg);
          }
        });
        return;
      }
      Axios({
        url: import.meta.env.VITE_BASE_URL + "/cms/saveDelivery",
        method: "POST",
        data: delivery.value,
      }).then((res) => {
        if (res.data.code == 200) {
          isEdit.value = false;
          ElMessage.success("保存成功");
          getDeliveryList();
        } else {
          ElMessage.error(res.data.msg);
        }
      });
    } else {
      return false;
    }
  });
};
const isChange = ref(false);
const handleEdit = (row: any) => {
  console.log("handleEdit", row);
  isEdit.value = true;
  delivery.value = row;
  isChange.value = true;
};
const handleBatchDelete = () => {
  console.log("handleBatchDelete");
  if (checkList.value.length == 0) {
    ElMessage.warning("请选择要删除的数据");
    return;
  }
  handleDelete(checkList.value);
};
const handleDelete = (row: any) => {
  row = row instanceof Array ? row : [row];
  Axios({
    url: import.meta.env.VITE_BASE_URL + "/cms/delDeliveryById",
    method: "POST",
    data: row,
  }).then((res) => {
    console.log("🚀 ~ handleDelete ~ res:", res);
    if (res.data.code == 200) {
      ElMessage.success("删除成功");
      getDeliveryList();
    }
  });
};
</script>
<style lang="scss" scoped></style>
