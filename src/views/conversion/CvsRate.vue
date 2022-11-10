<template>
  <div id="CvsRate">
<<<<<<< HEAD
    <CmContainer>
=======
    <CmContainer
      :count="totalcount"
      @sendSize="changeSize"
      @sendCurrent="changeCurrent"
      @filtersearch="filtersearch"
      @quickpick="pickdate"
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
            v-model="form.url"
            placeholder="选择url查询"
            :popper-append-to-body="false"
          >
<<<<<<< HEAD
            <el-option label="选择url查询" value="shanghai"></el-option>
=======
            <el-option
              v-for="item in landinglist"
              :key="item.id"
              :label="item.url"
              :value="item.id"
            ></el-option>
>>>>>>> 90bfc2a (更新找到的部分)
          </el-select>
        </el-form-item>
        <!-- 默认时间选择 -->
        <el-form-item>
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="开始日期"
              v-model="form.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-date-picker
              placeholder="截止日期"
              v-model="form.date2"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>

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
              v-for="item in grouplist"
              :key="item.id"
              :label="item.group"
              :value="item.group"
            ></el-option>
>>>>>>> 90bfc2a (更新找到的部分)
          </el-select>
        </el-form-item>

        <el-form-item label="">
          <el-select
<<<<<<< HEAD
            v-model="form.order"
            placeholder="选择转化类型"
            :popper-append-to-body="false"
          >
            <el-option label="微信复制" value="shanghai"></el-option>
            <el-option label="微信打开" value="shanghai"></el-option>
            <el-option label="咨询" value="shanghai"></el-option>
            <el-option label="表单确认提交" value="shanghai"></el-option>
            <el-option label="下载" value="shanghai"></el-option>
            <el-option label="购买" value="shanghai"></el-option>
            <el-option label="注册" value="shanghai"></el-option>
=======
            clearable
            v-model="form.cvstype"
            placeholder="选择转化类型"
            :popper-append-to-body="false"
          >
            <el-option label="点击" value="1"></el-option>
            <el-option label="长按" value="2"></el-option>
>>>>>>> 90bfc2a (更新找到的部分)
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.words" placeholder="输入url搜索"></el-input>
        </el-form-item>
      </template>
<<<<<<< HEAD
=======

>>>>>>> 90bfc2a (更新找到的部分)
      <!-- 表格区 -->
      <template slot="tables">
        <div class="Ctable">
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
<<<<<<< HEAD
            @selection-change="handleSelectionChange"
            empty-text="无数据"
          >
            <el-table-column prop="address" label="日期" show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="address"
              label="落地页分组"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="address"
              label="访问url"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="address"
              label="转化类型"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="address"
=======
            empty-text="无数据"
          >
            <el-table-column prop="newtime" label="日期" show-overflow-tooltip>
            </el-table-column>

            <el-table-column fixed label="落地页分组">
              <template slot-scope="scope">
                {{ scope.row.landing.group }}
              </template>
            </el-table-column>

            <el-table-column label="落地页url" width="250">
              <template slot-scope="scope">
                {{ scope.row.landing.url }}
              </template>
            </el-table-column>

            <el-table-column prop="type" label="转化类型" show-overflow-tooltip>
            </el-table-column>

            <el-table-column
              prop="conversion"
>>>>>>> 90bfc2a (更新找到的部分)
              label="转化点击量"
              show-overflow-tooltip
            >
            </el-table-column>
<<<<<<< HEAD
            <el-table-column
              prop="address"
=======

            <el-table-column
              prop="visites"
>>>>>>> 90bfc2a (更新找到的部分)
              label="总访问量"
              show-overflow-tooltip
            >
            </el-table-column>
<<<<<<< HEAD
            <el-table-column
              prop="address"
              label="转化率"
              show-overflow-tooltip
            >
=======

            <el-table-column prop="" label="转化率" show-overflow-tooltip>
              <template slot-scope="scope">
                {{ rate(scope.row) }}
              </template>
>>>>>>> 90bfc2a (更新找到的部分)
            </el-table-column>
          </el-table>
        </div>
      </template>
    </CmContainer>
  </div>
</template>

<script>
<<<<<<< HEAD
import CmContainer from "@/components/containner/CmContainer.vue";
export default {
  name: "CvsRate",
  created() {},
=======
import store from "@/store/index";
import CmContainer from "@/components/containner/CmContainer.vue";
import { getcvsrateApi } from "@/api/conversion";
export default {
  name: "CvsRate",
  created() {
    this.landinglist = store.state.landinglist;
    this.grouplist = store.state.grouplist;
    this.getcvsrate();
  },
>>>>>>> 90bfc2a (更新找到的部分)
  data() {
    return {
      form: {
        url: "",
        group: "",
        date1: "",
        date2: "",
<<<<<<< HEAD
        order: "",
        words: "",
      },
      tableData: [],
    };
  },
  methods: {
    // 表格的方法
    handleSelectionChange(val) {
      this.multipleSelection = val;
=======
        cvstype: "",
        words: "",
      },
      // 搜索下拉
      landinglist: [],
      grouplist: [],
      // 表格数据
      totalcount: 0,
      tableData: [],
      // 关于分页
      currentPage: 1,
      pageSize: 10,
    };
  },
  methods: {
    // 子组件传来的分页数据
    changeSize(val) {
      this.pageSize = val;
      this.getcvsrate();
    },
    changeCurrent(val) {
      this.currentPage = val;
      this.getcvsrate();
    },

    // 筛选搜索按钮
    filtersearch() {
      this.getcvsrate();
    },

    // 快捷修改日期
    pickdate(val) {
      this.form.date1 = val[0];
      this.form.date2 = val[1];
    },

    rate(val) {
      if (val.visites == 0) {
        return 0 + "%";
      } else {
        const rate = (val.conversion / val.visites).toFixed(4) * 100 + "%";
        return rate;
      }
    },

    // Api
    async getcvsrate() {
      const { data: res } = await getcvsrateApi(
        this.currentPage,
        this.pageSize,
        this.form
      );
      this.totalcount = res.count;
      this.tableData = res.data;
>>>>>>> 90bfc2a (更新找到的部分)
    },
  },
  components: {
    CmContainer,
  },
};
</script>

<style lang="scss" scoped></style>
