<template>
  <div id="Vlanding">
    <VchatContainer>
      <!-- 表单区 -->
      <template>
        <el-form-item label="">
          <el-select
<<<<<<< HEAD
=======
            clearable
>>>>>>> 90bfc2a (更新找到的部分)
            v-model="formInline.group3"
            placeholder="选择分组"
            :popper-append-to-body="false"
          >
            <el-option label="一组" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="formInline.user"
            placeholder="输入url搜索"
          ></el-input>
        </el-form-item>
      </template>
    </VchatContainer>
    <!-- 表格区 -->
    <div class="grouptable">
      <Vlandingtable></Vlandingtable>
    </div>
  </div>
</template>

<script>
import VchatContainer from "@/views/vchat/VchatContainer.vue";
import Vlandingtable from "@/views/vchat/Vlandingtable.vue";
export default {
  name: "Vlanding",
  created() {},
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
    };
  },
  components: {
    VchatContainer,
    Vlandingtable,
  },
};
</script>

<style lang="scss" scoped>
.grouptable {
  padding: 10px 20px;
  background-color: #fff;
}
</style>
