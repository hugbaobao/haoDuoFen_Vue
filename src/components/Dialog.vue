<template>
  <div id="Dialog">
    <el-button @click="dialogFormVisible = true" size="small">
      <slot name="default"></slot>
    </el-button>

    <el-dialog :title="formtitle" :visible.sync="dialogFormVisible" width="70%">
      <slot name="currentForm"></slot>
    </el-dialog>
  </div>
</template>

<script>
import Bus from "@/utils/event";
export default {
  name: "Dialog",
  created() {
    Bus.$on("closedialog", () => {
      this.dialogFormVisible = false;
    });
  },
  props: ["formtitle", "openfromfather"],
  data() {
    return {
      dialogFormVisible: false,
    };
  },
  computed: {},
  // 父传来
  watch: {
    openfromfather() {
      if (this.openfromfather) {
        this.dialogFormVisible = true;
      }
    },
    dialogFormVisible(newval) {
      if (!newval) {
        this.$emit("alreadyclose");
      }
    },
  },
  components: {},
  methods: {},
};
</script>

<<<<<<< HEAD
<style lang="scss" scoped></style>
=======
>>>>>>> 90bfc2a (更新找到的部分)
<style scoped>
.el-dialog__header {
  border-bottom: 1px solid #f6f6f6;
}
.el-dialog__body {
  height: 75vh;
  position: relative;
}
/*下拉框最后一个显示不完全*/
.el-select-dropdown__wrap.el-scrollbar__wrap {
  margin-bottom: 0 !important;
}
</style>
<<<<<<< HEAD
=======
<style lang="scss">
// 使dialog头部有个分割线
.el-dialog__header {
  padding: 20px 20px 10px;
  border-bottom: 1px solid #dcdfe6;
}
</style>
>>>>>>> 90bfc2a (更新找到的部分)
