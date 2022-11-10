<template>
  <div id="Home">
    <el-row>
      <el-col :span="24">
        <div class="main-container">
          <!-- 顶部欢迎 -->
          <div class="welcome">
            <div class="bg-light">
              <span
                >欢迎登录：<i style="color: #ff0000; font-style: normal"
                  >{{}}</i
                ></span
              >
            </div>
          </div>
          <!-- 数据统计 -->
          <div class="statistic">
            <div class="common-title">昨日数据统计</div>
            <Statistic></Statistic>
          </div>
          <!-- 最近数据 -->
          <div class="lately">
            <div class="common-title">最近7天数据</div>
            <div>
              <Linechart></Linechart>
            </div>
          </div>
          <!-- 常用功能 -->
          <div class="common">
            <div class="common-title">常用功能</div>
            <Conmmon></Conmmon>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Statistic from "@/components/home/Statistic.vue";
import Linechart from "@/views/charts/line.vue";
// 常用功能
import Conmmon from "@/components/Common.vue";
export default {
  name: "Home",
  components: {
    Statistic,
    Linechart,
    Conmmon,
  },
};
</script>

<style lang="scss" scoped>
#Home {
  padding: 10px;

  .common-title {
    font-size: 18px;
    line-height: 45px;
    text-align: left;
    border-bottom: 1px solid #f6f6f6;
    margin-bottom: 10px;
  }

  .main-container {
    background-color: #fff;
    padding: 10px 20px;

    .welcome {
      margin-bottom: 10px;
      .bg-light {
        background: #fafafa;
        line-height: 60px;
      }
    }

    /*  .statistic {
    }

    .lately {
    } */
    .common {
      margin-top: 10px;
    }
  }
}
</style>
