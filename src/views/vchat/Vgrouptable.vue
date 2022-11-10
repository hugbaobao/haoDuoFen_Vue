<template>
  <div id="VGrouptable">
    <div class="group-table">
      <el-table
        ref="multipleTable"
<<<<<<< HEAD
        :data="tableData"
=======
        :data="table"
>>>>>>> 90bfc2a (更新找到的部分)
        tooltip-effect="dark"
        style="width: 100%"
        stripe
        :border="true"
        :header-cell-style="{
          background: '#fafafa',
        }"
<<<<<<< HEAD
        @selection-change="handleSelectionChange"
        empty-text="没有开启微信管理的链接，请在落地页管理中开启微信在线管理功能"
      >
        <el-table-column type="selection" width="50" align="center">
        </el-table-column>
        <el-table-column fixed label="分组名称">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="微信号数量"> </el-table-column>
        <el-table-column prop="address" label="备注" show-overflow-tooltip>
=======
        empty-text="没有开启微信管理的链接，请在落地页管理中开启微信在线管理功能"
      >
        <el-table-column fixed label="分组名称" prop="name"> </el-table-column>
        <el-table-column prop="count" label="微信号数量"> </el-table-column>
        <el-table-column prop="remarks" label="备注" show-overflow-tooltip>
>>>>>>> 90bfc2a (更新找到的部分)
        </el-table-column>

        <el-table-column fixed="right" label="操作" width="300">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >

            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
<<<<<<< HEAD
    <div class="page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="2"
      >
      </el-pagination>
    </div>
=======
>>>>>>> 90bfc2a (更新找到的部分)
  </div>
</template>

<script>
export default {
  name: "VGrouptable",
<<<<<<< HEAD
  created() {},
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
=======
  created() {
    console.log(this.table);
  },
  props: ["table"],
  data() {
    return {
>>>>>>> 90bfc2a (更新找到的部分)
      switchflag: false,
      switchflags: false,
      //   分页相关
      currentPage: 1,
    };
  },
  methods: {
<<<<<<< HEAD
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
=======
    /*     handleSelectionChange(val) {
      this.multipleSelection = val;
    }, */
>>>>>>> 90bfc2a (更新找到的部分)
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    // 分页功能两个
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
#VGrouptable {
  background-color: #fafafa;
  border: 1px solid #eee;
  .button {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 15px;
  }
<<<<<<< HEAD
  /* .group-table {
    } */
  .page {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
=======
>>>>>>> 90bfc2a (更新找到的部分)
}
</style>
<style>
/* 修改开关样式 */
/* switch按钮样式 */
.switchClass .el-switch__label {
  position: absolute;
  display: none;
  color: #fff !important;
}
/*打开时文字位置设置*/
.switchClass .el-switch__label--right {
  z-index: 1;
}
/* 调整打开时文字的显示位子 */
.switchClass .el-switch__label--right span {
  margin-right: 13px;
  font-size: 12px;
}
/*关闭时文字位置设置*/
.switchClass .el-switch__label--left {
  z-index: 1;
}
/* 调整关闭时文字的显示位子 */
.switchClass .el-switch__label--left span {
  margin-left: 17px;
  font-size: 12px;
}
/*显示文字*/
.switchClass .el-switch__label.is-active {
  display: block;
}
/* 调整按钮的宽度 */
.switchClass.el-switch .el-switch__core,
.el-switch .el-switch__label {
  width: 45px !important;
  margin: 0;
}

/*下拉框最后一个显示不完全*/
.el-select-dropdown__wrap.el-scrollbar__wrap {
  margin-bottom: 0 !important;
}
</style>
