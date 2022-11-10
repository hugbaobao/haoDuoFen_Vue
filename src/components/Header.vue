<template>
  <div id="Header">
    <div class="Header_top">
      <div class="top_left">
        <!-- logo -->
        <router-link to="/home">
          <img
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            alt="logo "
          />
        </router-link>
        <!-- <a href="javascript:void(0);"> </a> -->
        <!-- 控制按钮 -->
        <div class="toggle_button" @click="toggleflag()">
          <i class="el-icon-s-unfold" v-if="isCollapse"></i>
          <i class="el-icon-s-fold" v-else></i>
        </div>
        <!-- 下拉菜单 -->
        <el-dropdown>
          <span class="el-dropdown-link">
            常用<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">待定</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">待定</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline"
              >待定</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-check">待定</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check"
              >待定</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="top_right">
        <div class="right_tab">
          <i class="el-icon-download"></i>
        </div>

        <div class="right_tab">
          <i class="el-icon-bell"></i>
        </div>

        <div class="right_tab" style="padding: 0">
          <!-- 下拉菜单 -->
          <el-dropdown>
            <span class="el-dropdown-link">
              用户名占位<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">待定</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus"
                >待定</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-circle-plus-outline"
                >待定</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-check">待定</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check"
                >待定</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>

        <div class="right_tab">
          <router-link to="/home">首页</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bus from "@/utils/event.js";
export default {
  name: "Header",
  data() {
    return {
      isCollapse: false,
    };
  },
  components: {},
  methods: {
    toggleflag() {
      this.isCollapse = !this.isCollapse;
      Bus.$emit("share", this.isCollapse);
    },
  },
};
</script>

<style lang="scss" scoped>
#Header {
  height: 50px;
  display: flex;
  align-items: center;
  color: #fff;
  .Header_top {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    .top_left {
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        margin-right: 20px;
        img {
          width: 200px;
          height: 100%;
        }
      }

      .toggle_button {
        width: 32px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        font-size: 24px;
        background: rgba(255, 255, 255, 0.1);
        margin-right: 40px;

        i {
          font-weight: 200;
        }
      }
    }

    .top_right {
      display: flex;
      justify-content: center;
      align-items: center;
      .right_tab {
        padding: 0 20px;
        font-size: 14px;
        i {
          font-size: 18px;
        }
      }
    }
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  // 下拉菜单
  .el-dropdown-link {
    cursor: pointer;
    font-size: 14px;
    color: #fff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 12px;
    margin-bottom: 20px;
  }
}
</style>
