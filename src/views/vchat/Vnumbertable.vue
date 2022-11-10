<template>
  <div id="VGrouptable">
    <div class="button">
      <el-button type="warning" size="small">批量修改</el-button>
      <el-button type="warning" size="small">批量删除</el-button>
      <el-button type="warning" size="small">上传二维码</el-button>
    </div>
<<<<<<< HEAD
=======

>>>>>>> 90bfc2a (更新找到的部分)
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
        empty-text="无数据"
      >
        <el-table-column type="selection" width="50" align="center">
        </el-table-column>
<<<<<<< HEAD
        <el-table-column fixed label="分组名称">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="微信号"> </el-table-column>
        <el-table-column prop="address" label="备注" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="二维码" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="address"
          label="微信号名称"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column prop="address" label="性别" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="在线状态" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="自动控制" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="权重" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="最近状态" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="今日复制" show-overflow-tooltip>
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
=======
        <el-table-column fixed label="分组名称" prop="Wxgroup.name" width="100">
        </el-table-column>
        <el-table-column prop="wxh" label="微信号"> </el-table-column>
        <el-table-column prop="remarks" label="备注" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="二维码" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handlecheck(scope.$index, scope.row)"
            >
              查看
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="wxname"
          label="微信号名称"
          show-overflow-tooltip
          width="100"
        >
        </el-table-column>
        <el-table-column prop="sex" label="性别" show-overflow-tooltip>
        </el-table-column>

        <el-table-column label="在线状态" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-switch
              :value="scope.row.online"
              active-text="上线"
              inactive-text="下线"
              class="switchClass"
            >
            </el-switch>
          </template>
        </el-table-column>

        <el-table-column label="自动控制" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-switch
              :value="scope.row.control"
              active-text="开启"
              inactive-text="关闭"
              class="switchClass"
            >
            </el-switch>
          </template>
        </el-table-column>

        <el-table-column
          prop="address"
          label="权重"
          show-overflow-tooltip
          width="151"
        >
          <template slot-scope="scope">
            <el-input-number
              v-model="scope.row.level"
              @change="handlepower(scope.$index, scope.row)"
              :min="1"
              :max="5"
              size="mini"
            ></el-input-number>
          </template>
        </el-table-column>

        <el-table-column prop="neartime" label="最近状态" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="copy" label="今日复制" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="report" label="今日上报" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="fans" label="今日到粉" show-overflow-tooltip>
        </el-table-column>

        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >

            <el-popconfirm
              title="确定删除这条吗？"
              @confirm="handleDelete(scope.$index, scope.row)"
            >
              <el-button
                size="mini"
                type="danger"
                slot="reference"
                style="margin-left: 10px"
                >删除</el-button
              >
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 二维码 -->
    <div class="qrcode">
      <my-qrcode :outershow="outerShow" @closer="outerShow = false"></my-qrcode>
>>>>>>> 90bfc2a (更新找到的部分)
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
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
=======
import MyQrcode from "@/components/unshowbutton/Qrcode.vue";
export default {
  name: "VGrouptable",
  created() {},
  props: ["tableData"],
  data() {
    return {
      num: 1,
      // 二维码
      outerShow: false,
>>>>>>> 90bfc2a (更新找到的部分)

      //   分页相关
      currentPage: 1,
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
<<<<<<< HEAD
=======
    handlecheck(index, row) {
      console.log(index, row);
      this.outerShow = true;
    },
    handlepower(index, row) {
      console.log(index, row);
    },
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
<<<<<<< HEAD
  components: {},
=======
  components: {
    MyQrcode,
  },
>>>>>>> 90bfc2a (更新找到的部分)
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
