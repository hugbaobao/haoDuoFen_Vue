<template>
  <div id="Adderweima">
    <!-- 添加分组 -->
    <div class="group-add">
      <el-button
        @click="flag = true"
        size="small"
        icon="el-icon-circle-plus-outline"
        >上传二维码添加</el-button
      >
    </div>
    <!-- 二级弹窗-->
    <div class="innerform" v-if="flag" :class="flag ? 'bggray' : ''">
      <el-form ref="form" :model="form" label-width="80px">
        <h2>上传二维码添加</h2>
        <el-form-item label="分组名称" required>
          <el-input
            type="textarea"
            v-model="form.desc"
            placeholder="例如：一组"
          ></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input
            type="textarea"
            v-model="form.desc"
            placeholder="备注信息"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Adderweima",
  props: [],
  data() {
    return {
      flag: false,
      form: {
        desc: "",
        region: "",
        name: "",
        delivery: false,
        url: false,
        open: true,
      },
    };
  },

  watch: {},
  components: {},
  methods: {
    onSubmit() {
      console.log("submit!");
      this.flag = false;
    },
  },
};
</script>

<style lang="scss" scoped>
#Adderweima {
  .group-add {
    display: flex;
    justify-content: flex-start;
  }
  .innerform {
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    .el-form {
      width: 70%;
      height: 90%;
      background-color: #fff;
      padding: 50px;

      h2 {
        font-size: 14px;
        font-weight: 400;
        text-align: left;
        border-bottom: 1px solid #f6f6f6;
        margin-bottom: 10px;
        padding: 10px;
      }
    }
  }
  .bggray {
    background-color: rgba($color: #a7a7a7, $alpha: 0.3);
  }
}
</style>
