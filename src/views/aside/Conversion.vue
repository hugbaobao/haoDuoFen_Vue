<template>
  <div id="Conversion">
    <router-view></router-view>
  </div>
</template>

<script>
import store from "@/store/index";
import { groupallApi, landingallApi } from "@/api/landing";
export default {
  name: "Conversion",
  created() {
    if (store.state.grouplist == []) {
      this.getgrouplist();
    }
    this.getlandinglist();
  },
  data() {
    return {};
  },
  methods: {
    // Api
    async getgrouplist() {
      const { data: res } = await groupallApi();
      localStorage.setItem("grouplist", JSON.stringify(res.data));
      store.dispatch("getgroup", res.data);
    },
    async getlandinglist() {
      const { data: res } = await landingallApi();
      sessionStorage.setItem("landinglist", JSON.stringify(res.data));
      store.dispatch("getlanding", res.data);
    },
  },
};
</script>

<style lang="scss" scoped></style>
