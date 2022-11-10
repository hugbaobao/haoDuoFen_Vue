<template>
  <div id="LandingIndex">
    <!-- 搜索区 -->
    <div class="search">
      <Search></Search>
    </div>
    <!-- 添加区 -->
    <div class="add">
      <Add></Add>
    </div>
    <!-- 表格区 -->
    <div class="table">
      <Grouptable></Grouptable>
    </div>
  </div>
</template>

<script>
import Search from "@/views/landing/Search.vue";
import Add from "@/views/landing/Add.vue";
import Grouptable from "@/views/landing/Grouptable.vue";
<<<<<<< HEAD
export default {
  name: "LandingIndex",
  created() {},
  data() {
    return {};
=======
import { groupallApi } from "@/api/landing";
import Bus from "@/utils/event";
import store from "@/store/index";
export default {
  name: "LandingIndex",
  created() {
    this.getgrouplist();
    Bus.$on("refreshgroup", () => {
      this.getgrouplist();
    });
  },
  data() {
    return {
      grouplist: [],
    };
>>>>>>> 90bfc2a (更新找到的部分)
  },
  components: {
    Search,
    Add,
    Grouptable,
  },
<<<<<<< HEAD
=======
  methods: {
    // Api
    async getgrouplist() {
      const { data: res } = await groupallApi();
      localStorage.setItem("grouplist", JSON.stringify(res.data));
      store.dispatch("getgroup", res.data);
    },
  },
>>>>>>> 90bfc2a (更新找到的部分)
};
</script>

<style lang="scss" scoped>
#LandingIndex {
  background-color: #fff;
  border-top: 1px solid #f6f6f6;
  padding: 10px 15px;

  .add {
    margin-bottom: 10px;
  }
}
</style>
