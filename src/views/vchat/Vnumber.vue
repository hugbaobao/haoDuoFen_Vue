<template>
  <div id="Vnumber">
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
      <!-- 表单区 -->
      <template>
        <el-form-item label="">
          <el-select
<<<<<<< HEAD
=======
            clearable
>>>>>>> 90bfc2a (更新找到的部分)
            v-model="formInline.group1"
            placeholder="排序"
            :popper-append-to-body="false"
          >
<<<<<<< HEAD
            <el-option label="分组名称" value="shanghai"></el-option>
            <el-option label="最近状态" value="shanghai"></el-option>
            <el-option label="按今日复制数" value="shanghai"></el-option>
            <el-option label="按今日上报数" value="shanghai"></el-option>
            <el-option label="按今日到粉数" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-select
=======
            <el-option label="分组名称" value="uid"></el-option>
            <el-option label="最近状态" value="neartime"></el-option>
            <el-option label="按今日复制数" value="copy"></el-option>
            <el-option label="按今日上报数" value="report"></el-option>
            <el-option label="按今日到粉数" value="fans"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="">
          <el-select
            clearable
>>>>>>> 90bfc2a (更新找到的部分)
            v-model="formInline.group2"
            placeholder="所有分组"
            :popper-append-to-body="false"
          >
<<<<<<< HEAD
            <el-option label="所有分组" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-select
=======
            <el-option
              v-for="(item, id) in wxgrouplist"
              :key="id"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="">
          <el-select
            clearable
>>>>>>> 90bfc2a (更新找到的部分)
            v-model="formInline.group3"
            placeholder="筛选"
            :popper-append-to-body="false"
          >
<<<<<<< HEAD
            <el-option label="只看上线状态" value="shanghai"></el-option>
            <el-option label="只看下线状态" value="shanghai"></el-option>
            <el-option label="只看未上传二维码" value="shanghai"></el-option>
            <el-option label="只看已上传二维码" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="formInline.user"
            placeholder="搜索分组名/微信号"
=======
            <el-option label="只看上线状态" value="1"></el-option>
            <el-option label="只看下线状态" value="0"></el-option>
            <el-option label="只看未上传二维码" value="2"></el-option>
            <el-option label="只看已上传二维码" value="3"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-input
            v-model="formInline.words"
            placeholder="搜索微信号"
>>>>>>> 90bfc2a (更新找到的部分)
          ></el-input>
        </el-form-item>
      </template>
      <!-- 按钮区 -->
      <template slot="vdialog">
        <Addvnumber></Addvnumber>
        <Adderweima></Adderweima>
      </template>
<<<<<<< HEAD
    </VchatContainer>
    <!-- 表格区 -->
    <div class="grouptable">
      <Vnumbertable></Vnumbertable>
    </div>
=======

      <!-- 表格区 -->
      <template slot="tables">
        <Vnumbertable :tableData="tableData"></Vnumbertable>
      </template>
    </VchatContainer>
>>>>>>> 90bfc2a (更新找到的部分)
  </div>
</template>

<script>
<<<<<<< HEAD
=======
import store from "@/store/index";
>>>>>>> 90bfc2a (更新找到的部分)
import VchatContainer from "@/views/vchat/VchatContainer.vue";
import Addvnumber from "@/components/button/Addvnumber.vue";
import Adderweima from "@/components/button/Adderweima.vue";
import Vnumbertable from "@/views/vchat/Vnumbertable.vue";
<<<<<<< HEAD
export default {
  name: "Vnumber",
  created() {},
=======
import { cotrWxApi } from "@/api/wxmanage";
export default {
  name: "Vnumber",
  created() {
    this.wxgrouplist = store.state.wxgrouplist;
    this.controlWx();
  },
>>>>>>> 90bfc2a (更新找到的部分)
  data() {
    return {
      formInline: {
        group1: "",
        group2: "",
        group3: "",
<<<<<<< HEAD
        user: "",
      },
    };
  },
=======
        words: "",
      },
      // 渲染所用的分组
      wxgrouplist: [],
      // 表格数据
      totalcount: 0,
      tableData: [],
      // 分页相关
      currentPage: 1,
      pageSize: 10,
    };
  },
  methods: {
    // 子组件传来的分页数据
    changeSize(val) {
      this.pageSize = val;
      // this.getcvsrate();
    },
    changeCurrent(val) {
      this.currentPage = val;
      // this.getcvsrate();
    },

    // 筛选搜索按钮
    filtersearch() {
      this.controlWx();
    },

    // Api
    async controlWx() {
      const { data: res } = await cotrWxApi(
        this.currentPage,
        this.pageSize,
        this.formInline
      );
      this.tableData = res.data;
      this.totalcount = res.count;
      console.log(res.data);
    },
  },
>>>>>>> 90bfc2a (更新找到的部分)
  components: {
    VchatContainer,
    Addvnumber,
    Adderweima,
    Vnumbertable,
  },
};
</script>

<style lang="scss" scoped>
.grouptable {
  padding: 10px 20px;
  background-color: #fff;
}
</style>
<style>
.vdialog #Addvnumber,
.vdialog #Adderweima {
  margin-bottom: 0;
}
</style>
