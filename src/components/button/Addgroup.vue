<template>
<<<<<<< HEAD
  <div id="Addgroup">
    <!-- 添加分组 -->
    <div class="group-add">
      <el-button
        size="small"
        icon="el-icon-circle-plus-outline"
        @click="dialogFormVisible = true"
        >添加分组</el-button
      >
    </div>

    <!-- 表单 -->
    <el-dialog
      title="添加分组"
      :visible.sync="dialogFormVisible"
      append-to-body
      width="30%"
      style="margin-top: 15vh"
    >
      <el-form
        :model="addform"
        label-position="left"
        ref="addform"
        label-width="80px"
      >
        <el-form-item label="分组名称">
          <el-input v-model="addform.group" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="addform.remarks" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addsub">提 交</el-button>
      </div>
    </el-dialog>
=======
  <div id="MyAddgroup">
    <my-dialog
      formtitle="添加分组"
      :openfromfather="isopen"
      @alreadyclose="isopen = false"
    >
      <template><i class="el-icon-circle-plus-outline"></i>添加分组 </template>

      <template slot="currentForm">
        <div class="content">
          <div class="flex">
            <div class="form">
              <el-form
                :model="form"
                size="small"
                :rules="rules"
                ref="form"
                label-width="150px"
              >
                <el-form-item label="分组名称:" prop="group">
                  <el-input v-model="form.group"></el-input>
                </el-form-item>
                <el-form-item label="备注:">
                  <el-input v-model="form.remark"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit('form')"
                    >提交</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
            <div class="formright">
              <p>填写分组名称</p>
              <p style="margin-top: 32px">( 备注非必填 )</p>
            </div>
          </div>
        </div>
      </template>
    </my-dialog>
>>>>>>> 90bfc2a (更新找到的部分)
  </div>
</template>

<script>
<<<<<<< HEAD
import { addgroupApi } from "@/api/landing";
import Bus from "@/utils/event";
export default {
  name: "Addgroup",
  props: [],
  data() {
    return {
      flag: false,
      // 添加的表单
      addform: {
        group: "",
        remarks: "",
      },
      dialogFormVisible: false,
    };
  },

  watch: {},
  components: {},
  methods: {
    addsub() {
      this.addgroup();
      Bus.$emit("refreshgroup");
      this.dialogFormVisible = false;
    },

    // api
    async addgroup() {
      const { data: res } = await addgroupApi(this.addform);
      if (res.code == 200) {
        this.$notify({
          title: "成功",
          message: "添加分组成功",
          type: "success",
        });
        this.$refs.form.resetFields();
      }
    },
  },
=======
import Bus from "@/utils/event";
import { appendwxgroupApi } from "@/api/wxmanage";
export default {
  name: "MyAddgroup",
  props: ["isopenin"],
  data() {
    return {
      isopen: false,
      form: {
        group: "",
        remark: "",
      },
      rules: {
        group: [
          {
            required: true,
            message: "分组名称必填",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    onSubmit(formname) {
      this.$refs[formname].validate((valid) => {
        if (valid) {
          this.addgroup();
        } else {
          return false;
        }
      });
    },
    // 取消按钮
    closedialog() {
      Bus.$emit("closedialog");
    },

    // Api
    async addgroup() {
      const { data: res } = await appendwxgroupApi(this.form);
      if (res.code == 200) {
        Bus.$emit("closedialog");
        this.$emit("refresh");
        this.$message({
          message: "提交成功",
          type: "success",
        });
        this.$refs.form.resetFields();
        this.form.remark = "";
      } else {
        return this.$message.error(res.message);
      }
    },
  },
  watch: {
    isopenin(newval) {
      this.isopen = newval;
    },
  },
>>>>>>> 90bfc2a (更新找到的部分)
};
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
#Addgroup {
  .group-add {
    display: flex;
    justify-content: flex-start;
=======
.content {
  height: 434px;

  .flex {
    width: 100%;
    display: flex;
    margin-top: 40px;

    .form {
      width: 60%;
      margin-right: 20px;
    }

    .formright {
      p {
        margin-top: 5px;
      }
    }
>>>>>>> 90bfc2a (更新找到的部分)
  }
}
</style>
