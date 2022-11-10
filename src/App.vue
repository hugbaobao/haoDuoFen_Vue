<template>
  <div id="app">
    <el-container>
      <el-header height="50px">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="null">
          <Aside></Aside>
        </el-aside>
        <el-main>
          <Main></Main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Aside from "@/components/Aside.vue";
import Main from "@/components/Main";
export default {
  name: "App",
  components: {
    Aside,
    Header,
    Main,
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.el-header {
  background: linear-gradient(
    to left,
    rgba(1, 170, 237, 1),
    rgba(82, 183, 109, 1)
  );
}

.el-container {
  height: 100%;
  overflow: hidden;

  .el-aside {
    height: 100%;
  }
  .el-main {
    padding: 0;
    background-color: #fff;
  }
}
</style>
