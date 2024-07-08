<!--
 * @Author: FengXue
 * @Date: 2024-07-08 14:58:35
 * @LastEditors: FengXue
 * @LastEditTime: 2024-07-08 17:19:14
 * @filePath: Do not edit
-->
<template>
  <div class="init">
    <div class="function-nav">
      <el-button type="primary" icon="plus" @click="add">新增</el-button>
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
      <el-table
        :data="tableData"
        height="80vh"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="序号" width="80">
          <template #default="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>

        <el-table-column
          prop=""
          label="模型提供方"
          width="auto"
        ></el-table-column>
        <el-table-column
          prop=""
          label="模型文件类型"
          width="auto"
        ></el-table-column>
        <el-table-column
          prop=""
          label="介绍说明"
          width="auto"
        ></el-table-column>
        <el-table-column
          prop=""
          label="场景分类"
          width="auto"
        ></el-table-column>
        <el-table-column prop="" label="操作" width="auto">
          <template #default="scope">
            <div class="group">
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
    </div>
  </div>
</template>

<script setup lang="ts">
//--------------------------<表格数据>----------------------------
const tableData = ref([]); //表格数据
const checkList = ref([]); //选中列表
//批量删除
const handleBatchDelete = () => {};
//监听选择
const handleSelectionChange = (val: any) => {
  checkList.value = val;
};

//--------------------------<分页数据>----------------------------
const page = ref({
  pageNum: 1,
  pageSize: 20,
  total: 0,
});
//分页大小选择
const handleSizeChange = (val: number) => {
  page.value.pageSize = val;
  getQuestionList();
};
//页数跳转
const handleCurrentChange = (val: number) => {
  page.value.pageNum = val;
  getQuestionList();
};
//--------------------------<新增>----------------------------

const router = useRouter();
const add = () => {
  router.push("/index/addModel");
};
</script>
<style lang="scss" scoped></style>
