<template>
  <div id="MyQrcode">
    <el-dialog title="查看微信二维码" :visible.sync="outerVisible" width="30%">
      <el-dialog
        width="28%"
        title="上传二维码"
        :visible.sync="innerVisible"
        append-to-body
        top="22vh"
      >
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </el-dialog>

      <div class="content">
        <img :src="src" alt="" />
        <div class="button">
          <el-button
            type="primary"
            @click="innerVisible = true"
            size="small"
            style="margin-right: 10px"
          >
            修改
          </el-button>

          <el-popconfirm title="确定删除这条吗？" @confirm="deleteimg">
            <el-button type="primary" slot="reference" size="small"
              >删除</el-button
            >
          </el-popconfirm>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "MyQrcode",
  props: ["outershow"],
  data() {
    return {
      outerVisible: false,
      innerVisible: false,
      src: "",
    };
  },
  methods: {
    deleteimg() {
      console.log("delete");
    },
  },
  watch: {
    outershow(newval) {
      if (newval == true) {
        this.outerVisible = newval;
      }
    },
    outerVisible(newval) {
      if (newval == false) {
        this.$emit("closer");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/* #MyQrcode {

} */
</style>
