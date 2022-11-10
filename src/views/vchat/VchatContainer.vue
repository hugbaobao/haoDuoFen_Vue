<template>
  <div id="VchatContainer">
<<<<<<< HEAD
    <div class="vform">
      <el-form
        :inline="true"
        :model="formInline"
        size="mini"
        class="demo-form-inline"
      >
=======
    <!-- 搜索区 -->
    <div class="vform">
      <el-form :inline="true" size="mini" class="demo-form-inline">
>>>>>>> 90bfc2a (更新找到的部分)
        <slot name="default"></slot>

        <el-form-item>
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="onSubmit"
          ></el-button>
        </el-form-item>
      </el-form>
    </div>
<<<<<<< HEAD
    <div class="vdialog">
      <slot name="vdialog"></slot>
    </div>
=======

    <!-- 按钮 -->
    <div class="vdialog">
      <slot name="vdialog"></slot>
    </div>

    <!-- 表格区 -->
    <div class="Cmtable">
      <div>
        <slot name="tables"></slot>
        <div class="page">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="count"
          >
          </el-pagination>
        </div>
      </div>
    </div>
>>>>>>> 90bfc2a (更新找到的部分)
  </div>
</template>

<script>
<<<<<<< HEAD
export default {
  name: "VchatContainer",
  created() {},
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
=======
// :count="totalcount"          子组件传来分页使用的总条数
// @sendSize="changeSize"          父传子单页数
// @sendCurrent="changeCurrent"    父传子页码
// @filtersearch="filtersearch"       筛选搜索
export default {
  name: "VchatContainer",
  created() {},
  props: ["count"],
  data() {
    return {
      // 分页部分当前页
      currentPage: 1,
    };
  },
  methods: {
    // 搜索按钮
    onSubmit() {
      this.$emit("filtersearch");
    },
    // 分页功能两个
    handleSizeChange(val) {
      this.$emit("sendSize", val);
    },
    handleCurrentChange(val) {
      this.$emit("sendCurrent", val);
>>>>>>> 90bfc2a (更新找到的部分)
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
#VchatContainer {
  background-color: #fff;
  border-top: 1px solid #f6f6f6;

  .vform,
  .vdialog {
    padding: 10px 20px;
    display: flex;
    justify-content: flex-start;
  }
  .vdialog > div {
    margin-right: 5px;
  }
<<<<<<< HEAD
=======

  .Cmtable {
    padding: 0 20px 10px;

    > div {
      background-color: #f6f6f6;
    }
    .page {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background-color: #fff;
      border: 1px solid #f6f6f6;
      border-top: 0;
    }
  }
>>>>>>> 90bfc2a (更新找到的部分)
}
</style>
<style>
.el-form-item--mini.el-form-item {
  margin-bottom: 0 !important;
}
<<<<<<< HEAD
=======
/*下拉框最后一个显示不完全*/
.el-select-dropdown__wrap.el-scrollbar__wrap {
  margin-bottom: 0 !important;
}
>>>>>>> 90bfc2a (更新找到的部分)
</style>
