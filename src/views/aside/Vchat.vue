<template>
  <div id="Vchat">
    <router-view></router-view>
  </div>
</template>

<script>
<<<<<<< HEAD
export default {
  name: "Vchat",
  created() {},
  data() {
    return {};
  },
  components: {},
=======
import store from "@/store/index";
import { getgrouplistApi } from "@/api/wxmanage";
export default {
  name: "Vchat",
  created() {
    this.GetGroupList();
  },
  data() {
    return {};
  },
  methods: {
    async GetGroupList() {
      const { data: res } = await getgrouplistApi();
      localStorage.setItem("wxgrouplist", JSON.stringify(res.data));
      store.dispatch("getwxgroup", res.data);
    },
  },
>>>>>>> 90bfc2a (更新找到的部分)
};
</script>

<style lang="scss" scoped></style>
