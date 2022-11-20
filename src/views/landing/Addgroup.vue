<template>
  <div id="Addgroup">
    <div class="group-table">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        size="small"
        stripe
      >
        <el-table-column prop="group" label="分组名称"> </el-table-column>
        <el-table-column prop="total" label="落地页数量"> </el-table-column>
        <el-table-column prop="remarks" label="备注"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="300">
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

    <div class="page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalcount"
      >
      </el-pagination>
    </div>

    <!-- 嵌套的表单 -->
    <el-dialog
      title="修改分组信息"
      :visible.sync="dialogFormVisible"
      append-to-body
      width="30%"
      style="margin-top: 15vh"
    >
      <el-form :model="form" label-position="left" label-width="80px">
        <el-form-item label="分组名称">
          <el-input v-model="form.group" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.remarks" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="changesub">提 交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Bus from "@/utils/event";
import {
  getgroupApi,
  updategroupApi,
  groupdelApi,
  groupsearchApi,
} from "@/api/landing";
export default {
  name: "Addgroup",
  created() {
    this.getgroup();
    Bus.$on("refreshgroup", () => {
      this.totalcount++;
      this.getgroup();
    });
    Bus.$on("getsearch", (val) => {
      this.getsearch(val, this.currentPage, this.singlepage);
    });
  },
  data() {
    return {
      tableData: [],
      switchflag: false,
      switchflags: false,
      //   分页相关
      currentPage: 1,
      singlepage: 10,
      totalcount: 0,
      // 修改的表单
      form: {
        id: 1,
        group: "",
        remarks: "",
      },
      dialogFormVisible: false,
    };
  },
  methods: {
    handleEdit(index, row) {
      this.form.id = row.id;
      this.form.group = row.group;
      this.form.remarks = row.remarks;
      this.dialogFormVisible = true;
    },
    // 单删
    handleDelete(index, row) {
      this.delgroup(row.id);
      this.totalcount--;
      this.getgroup();
    },

    // 更新分组
    changesub() {
      this.updategroup(this.form);
      this.dialogFormVisible = false;
      this.getgroup();
    },

    // 分页功能两个
    handleSizeChange(val) {
      this.singlepage = val;
      this.getgroup();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getgroup();
    },
    // api
    async getgroup() {
      const { data: res } = await getgroupApi(
        this.currentPage,
        this.singlepage
      );
      this.tableData = res.data.data;
      this.totalcount = res.data.count;
    },
    async delgroup(val) {
      const { data: res } = await groupdelApi(val);
      if (res.code == 200) {
        this.$notify.info({
          title: "确认",
          message: "已删除分组",
        });
      }
    },
    async updategroup(msg) {
      const { data: res } = await updategroupApi(msg);
      if (res.code == 200) {
        this.$notify({
          title: "成功",
          message: "分组信息已修改",
          type: "success",
        });
      }
    },
    async getsearch(msg) {
      const { data: res } = await groupsearchApi(msg);
      this.tableData = res.data.data;
      this.totalcount = res.data.count;
    },
  },
};
</script>

<style lang="scss" scoped>
#Addgroup {
  background-color: #fafafa;
  border: 1px solid #eee;
  .page {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
