<template>
  <div id="CvsLink">
<<<<<<< HEAD
    <VchatContainer>
=======
    <VchatContainer
      :count="totalcount"
      @sendSize="changeSize"
      @sendCurrent="changeCurrent"
      @filtersearch="filtersearch"
    >
>>>>>>> 90bfc2a (更新找到的部分)
      <!-- 搜索区 -->
      <template>
        <el-form-item label="">
          <el-select
<<<<<<< HEAD
=======
            clearable
>>>>>>> 90bfc2a (更新找到的部分)
            v-model="form.group"
            placeholder="选择分组"
            :popper-append-to-body="false"
          >
<<<<<<< HEAD
            <el-option label="一组" value="shanghai"></el-option>
=======
            <el-option
              v-for="(item, index) in grouplist"
              :key="index"
              :label="item.group"
              :value="item.group"
            ></el-option>
>>>>>>> 90bfc2a (更新找到的部分)
          </el-select>
        </el-form-item>

        <el-form-item>
<<<<<<< HEAD
          <el-input v-model="form.url" placeholder="输入url查询"></el-input>
        </el-form-item>
      </template>
      <!-- 按钮区 -->
      <template slot="vdialog">
        <AddCvs></AddCvs>
      </template>
    </VchatContainer>
    <!-- 表格区 -->
    <div class="cvstable">
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
          empty-text="请添加落地页链接！"
        >
          <el-table-column fixed label="落地页分组">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="name" label="落地页url" width="350">
          </el-table-column>
          <el-table-column
            prop="address"
            label="转化类型"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="计数方式"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="统计类型"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="统计方式"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="埋点代码"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="模糊匹配信息"
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
=======
          <el-input v-model="form.words" placeholder="输入url查询"></el-input>
        </el-form-item>
      </template>

      <!-- 按钮区 -->
      <template slot="vdialog">
        <AddCvs dialogtitle="添加统计转化类型" @onsubmit="submitform"></AddCvs>
      </template>

      <!-- 表格区 -->
      <template slot="tables">
        <div class="cvstable">
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
            empty-text="请添加落地页链接！"
          >
            <el-table-column fixed label="落地页分组">
              <template slot-scope="scope">{{
                scope.row.landing.group
              }}</template>
            </el-table-column>
            <el-table-column label="落地页url" width="250">
              <template slot-scope="scope">{{
                scope.row.landing.url
              }}</template>
            </el-table-column>
            <el-table-column prop="type" label="转化类型" show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="cvscount"
              label="计数方式"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="cvsmode"
              label="统计类型"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="cvstype"
              label="统计方式"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column prop="code" label="埋点代码" show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="message"
              label="模糊匹配信息"
              show-overflow-tooltip
              width="120"
            >
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="250">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)"
                  >编辑
                </el-button>
                <el-button
                  size="mini"
                  @click="handleSet(scope.$index, scope.row)"
                  >设置
                </el-button>
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
      </template>
    </VchatContainer>

    <!-- 编辑调起的表单 -->
    <div class="editform">
      <unshowdialog
        :isopenin="isopened"
        :formfather="fatherform"
        @closer="isopened = false"
        @editedform="toeditform"
      ></unshowdialog>
      <my-setting></my-setting>
>>>>>>> 90bfc2a (更新找到的部分)
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import VchatContainer from "@/views/vchat/VchatContainer.vue";
import AddCvs from "@/components/button/AddCvs.vue";
export default {
  name: "CvsLink",
  created() {},
=======
import store from "@/store/index";
import Bus from "@/utils/event";
import VchatContainer from "@/views/vchat/VchatContainer.vue";
import AddCvs from "@/components/button/AddCvs.vue";
import unshowdialog from "@/views/conversion/unshowdialog.vue";
import MySetting from "@/views/conversion/setting.vue";
import {
  appendcvslinkApi,
  deletecvslinkApi,
  updatecvslinkApi,
  getcvslinkApi,
} from "@/api/conversion";
export default {
  name: "CvsLink",
  created() {
    this.grouplist = store.state.grouplist;
    this.getcvslink();
  },
>>>>>>> 90bfc2a (更新找到的部分)
  data() {
    return {
      form: {
        group: "",
<<<<<<< HEAD
        url: "",
      },
      tableData: [],
      currentPage: 1,
    };
  },
  methods: {
    // 表格的方法
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 分页功能两个
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
=======
        words: "",
      },
      // 表格数据
      tableData: [],
      totalcount: 0,
      // 分组
      grouplist: [],
      // 关于分页
      currentPage: 1,
      pageSize: 10,

      // 隐藏的dialog
      isopened: false,
      // 准备传给子组件的数据
      fatherform: [],
      setform: {
        id: "",
        landings: "",
        second: 0,
      },
    };
  },
  methods: {
    // 子组件传来的分页数据
    changeSize(val) {
      this.pageSize = val;
      this.getcvslink();
    },
    changeCurrent(val) {
      this.currentPage = val;
      this.getcvslink();
    },

    // 筛选搜索按钮
    filtersearch() {
      this.getcvslink();
    },

    // 添加按钮
    submitform(val) {
      this.addcsslink(val);
    },

    // 编辑按钮
    handleEdit(index, row) {
      this.fatherform = row;
      this.isopened = true;
    },
    // 编辑提交传来
    toeditform(form) {
      console.log(form);
      this.updatecvslink(form);
    },

    handleSet(index, row) {
      this.setform.landings = row.landing.url;
      this.setform.id = row.id;
      this.setform.second = row.second;
      Bus.$emit("tosetsecond", this.setform);
    },
    // 单删
    handleDelete(index, row) {
      this.delcvslink(row.id);
    },

    // Api
    async getcvslink() {
      const { data: res } = await getcvslinkApi(
        this.currentPage,
        this.pageSize,
        this.form
      );
      this.tableData = res.data;
      this.totalcount = res.count;
    },
    // add
    async addcsslink(value) {
      const { data: res } = await appendcvslinkApi(value);
      if (res.code == 200) {
        this.$message({
          message: "添加成功",
          type: "success",
        });
        this.getcvslink();
      } else if (res.code == 201) {
        this.$message({
          message: res.message,
          type: "warning",
        });
      } else {
        return this.$message.error("添加出错！");
      }
    },
    // del
    async delcvslink(ids) {
      const { data: res } = await deletecvslinkApi(ids);
      if (res.code == 200) {
        this.$notify.info({
          title: "确认",
          message: "已删除该统计链接",
        });
        this.getcvslink();
      }
    },
    // update
    async updatecvslink(val) {
      const { data: res } = await updatecvslinkApi(val);
      if (res.code == 200) {
        this.$message({
          message: "修改成功",
          type: "success",
        });
        this.getcvslink();
      } else {
        return this.$message.error("修改失败！");
      }
>>>>>>> 90bfc2a (更新找到的部分)
    },
  },
  components: {
    VchatContainer,
    AddCvs,
<<<<<<< HEAD
=======
    unshowdialog,
    MySetting,
>>>>>>> 90bfc2a (更新找到的部分)
  },
};
</script>

<style lang="scss" scoped>
#CvsLink {
  background-color: #fff;
  padding-bottom: 20px;
<<<<<<< HEAD
}
.cvstable {
  background-color: #fafafa;
  border: 1px solid #eee;
  margin: 0 15px;
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
=======

  // 隐藏的dialog的父盒子
  .editform {
    display: inline-block;
    position: absolute;
    right: -999px;
>>>>>>> 90bfc2a (更新找到的部分)
  }
}
</style>
