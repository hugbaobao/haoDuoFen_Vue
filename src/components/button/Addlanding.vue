<template>
  <div id="Addlanding">
    <Dialog :formtitle="dialogtitle">
      <template
        ><i class="el-icon-circle-plus-outline" ref="showdialog"></i
        >{{ dialogtitle }}</template
      >
      <template slot="currentForm">
        <div class="half">
          <div class="form_content">
            <el-form
              ref="form"
              :model="form"
              :rules="addrules"
              label-width="80px"
            >
              <el-form-item label="落地页url" prop="landingurl" required>
                <el-input
                  type="textarea"
                  v-model="form.landingurl"
                  placeholder="请输入落地页链接"
                ></el-input>
              </el-form-item>

              <el-form-item label="选择分组">
<<<<<<< HEAD
                <el-select v-model="form.group" placeholder="不设置">
                  <el-option label="分组一" value="shanghai"></el-option>
=======
                <el-select
                  clearable
                  v-model="form.group"
                  placeholder="选择分组"
                >
                  <el-option
                    v-for="item in selectlist"
                    :key="item.id"
                    :label="item.group"
                    :value="item.group"
                  ></el-option>
>>>>>>> 90bfc2a (更新找到的部分)
                </el-select>
              </el-form-item>

              <el-form-item label="备注">
                <el-input
                  v-model="form.remarks"
                  placeholder="简单的页面备注，便于查看统计"
                ></el-input>
              </el-form-item>

              <el-form-item label="二跳链接">
                <el-switch v-model="form.delivery"></el-switch>
              </el-form-item>

              <el-form-item label="追踪url">
                <el-switch v-model="form.track"></el-switch>
              </el-form-item>

              <el-form-item label="是否启用">
                <el-switch
                  v-model="form.open"
                  active-text="启用"
                  inactive-text="不启用"
                >
                </el-switch>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="closedialog">取 消</el-button>
                <el-button type="primary" @click="onSubmit('form')"
                  >提 交</el-button
                >
              </el-form-item>
            </el-form>
          </div>
          <div class="tell_content">
            <p>
              ( 建议从浏览器落地页地址栏复制到此位置，避免手动输入错误
              支持批量填写，一行一条)
            </p>
            <p>(可以给链接选择一个分组，便于按分组查看分析数据)</p>
            <p>
              (启用后才能使用，未启用只保存此页面相关配置信息，不能使用功能！)
            </p>
          </div>
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script>
import Dialog from "@/components/Dialog.vue";
// 验证规则
import { validateUrl } from "@/utils/validate";
import { insertApi } from "@/api/landing";
import Bus from "@/utils/event";
<<<<<<< HEAD
export default {
  name: "Addlanding",
  props: ["dialogtitle"],
=======
import store from "@/store/index";
export default {
  name: "Addlanding",
  props: ["dialogtitle"],
  created() {
    this.selectlist = store.state.grouplist;
  },
>>>>>>> 90bfc2a (更新找到的部分)
  data() {
    return {
      form: {
        landingurl: "",
        group: "",
        remarks: "",
        delivery: false,
        track: false,
        open: true,
      },
      addrules: {
        landingurl: [
          { required: true, message: "请输入落地页url", trigger: "blur" },
          { validator: validateUrl, trigger: "blur" },
        ],
      },
<<<<<<< HEAD
    };
  },
  watch: {},
=======
      selectlist: [],
    };
  },
>>>>>>> 90bfc2a (更新找到的部分)
  components: {
    Dialog,
  },
  methods: {
    // 表单验证
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.addlanding();
        } else {
          this.$message.error("提交失败");
          return false;
        }
      });
    },
    // 取消按钮
    closedialog() {
      Bus.$emit("closedialog");
    },
    // api
    async addlanding() {
      const { data: res } = await insertApi(this.form);
      if (res.code == 200) {
        Bus.$emit("closedialog");
        Bus.$emit("refreshtable");
        this.$message({
          message: "提交成功",
          type: "success",
        });
        this.$refs.form.resetFields();
      } else {
        return this.$message.error(res.message);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#Addlanding {
  margin-right: 10px;

  .half {
    display: flex;
  }
  .form_content {
    width: 50%;
  }
  .tell_content {
    flex: 1;
    font-size: 12px;
    padding: 20px 0;

    p {
      margin-bottom: 50px;
    }
  }
}
</style>
