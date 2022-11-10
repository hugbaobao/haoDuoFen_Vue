<template>
  <div id="VGrouptable">
    <div class="button">
      <el-button type="warning" size="small">批量设置</el-button>
      <el-button type="warning" size="small">批量删除</el-button>
    </div>
    <div class="group-table">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        stripe
        :border="true"
        :header-cell-style="{
          background: '#fafafa',
        }"
        @selection-change="handleSelectionChange"
        empty-text="请在落地页中开启微信管理，已开启请刷新！"
      >
        <el-table-column type="selection" width="50" align="center">
        </el-table-column>
        <el-table-column fixed label="落地页分组">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="落地页url"> </el-table-column>
        <el-table-column
          prop="address"
          label="落地页备注"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="设置微信号"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column prop="address" label="二维码" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="address"
          label="同访客微信号固定"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="分享微信号固定"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="移动端复制设置"
          show-overflow-tooltip
        >
        </el-table-column>
      </el-table>
    </div>
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
  </div>
</template>

<script>
export default {
  name: "VGrouptable",
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
      switchflag: false,
      switchflags: false,
      //   分页相关
      currentPage: 1,
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
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
  /* .group-table {
    } */
  .page {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
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
