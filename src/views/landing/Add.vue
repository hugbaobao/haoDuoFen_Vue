<template>
  <div id="LandingAdd">
    <!-- 添加落地页 -->
    <Addlanding dialogtitle="添加落地页"></Addlanding>

    <!-- 落地页分组 -->
    <Dialog :formtitle="'落地页分组'">
      <template><i class="el-icon-circle-plus-outline"></i>落地页分组</template>
      <template slot="currentForm">
        <!-- 搜索 -->
        <div class="group-search">
          <el-input
            v-model="groupsearch"
            placeholder="输入分组名称查询"
            size="small"
          ></el-input>
          <el-button
            type="primary"
            size="small"
            icon="el-icon-search"
<<<<<<< HEAD
=======
            @click="searchgroup"
>>>>>>> 90bfc2a (更新找到的部分)
          ></el-button>
        </div>

        <!-- 添加分组 -->
        <div class="BTaddgroup">
          <BTAddgroup></BTAddgroup>
        </div>

        <!-- 弹窗内表格 -->
        <div class="group-table">
          <el-scrollbar style="height: 100%">
            <AddGroup></AddGroup>
          </el-scrollbar>
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script>
<<<<<<< HEAD
=======
import Bus from "@/utils/event";
>>>>>>> 90bfc2a (更新找到的部分)
import Dialog from "@/components/Dialog.vue";
import BTAddgroup from "@/components/button/Addgroup.vue";
import Addlanding from "@/components/button/Addlanding.vue";
import AddGroup from "@/views/landing/Addgroup.vue";
// 验证规则

export default {
  name: "LandingAdd",
  created() {},
  data() {
    return {
      groupsearch: "",
      currentPage: 1,
      tableData: [],
    };
  },
  components: {
    Dialog,
    Addlanding,
    BTAddgroup,
    AddGroup,
  },
<<<<<<< HEAD
  methods: {},
=======
  methods: {
    searchgroup() {
      Bus.$emit("getsearch", this.groupsearch);
    },
  },
>>>>>>> 90bfc2a (更新找到的部分)
};
</script>

<style lang="scss" scoped>
#LandingAdd {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .group-search {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;

    .el-input {
      width: 300px;
      margin-right: 20px;
    }
  }
  .BTaddgroup {
    margin-bottom: 20px;
  }
  .group-table {
    height: 55vh;
    padding-bottom: 5px;
  }
}
</style>
