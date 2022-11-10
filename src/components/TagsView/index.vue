<template>
  <div id="TagView">
    <ScrollPane ref="scrollPane" class="tags-view-wrapper">
      <router-link
        v-for="(tag, index) in pathList"
        :key="tag.path"
        :to="tag.path"
      >
        <el-tag
          closable
          :type="isActive(tag) ? 'success' : ''"
          @close.capture.prevent="closetags(tag, index)"
        >
          {{ tag.meta.title }}
        </el-tag>
      </router-link>
    </ScrollPane>
    <br />
  </div>
</template>

<script>
// ScrollPane预留了滚动自定义事件暂未使用
import ScrollPane from "./ScrollPane";
import store from "@/store/index";
export default {
  name: "TagView",
  created() {},
  computed: {
    pathList() {
      return store.state.tagList;
    },
  },
  updated() {},
  components: {
    ScrollPane,
  },
  data() {
    return {
      activeIndex: "/home",
    };
  },
  watch: {
    $route(route) {
      this.activeIndex = route.path;
    },
  },
  mounted() {},
  methods: {
    isActive(route) {
      return route.path === this.$route.path;
    },
    closetags(tag, index) {
      store.dispatch("removeTag", tag);
      if (index > 0) {
        this.$router.replace(this.pathList[index - 1].path);
      } else if (index == 0) {
        this.$router.replace(this.pathList[0].path);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#TagView {
  width: 100%;
  height: 36px;
  background-color: #fff;

  padding-left: 5px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  span {
    margin-right: 5px;
  }
}
</style>
