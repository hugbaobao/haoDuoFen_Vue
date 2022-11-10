import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 创建一个新的 store 实例
const store = new Vuex.Store({
  state: {
<<<<<<< HEAD
    tagList: [{ path: "/home", meta: { title: "我的桌面" } }],
    // dialogVisible: false,
=======
    // 面包屑
    tagList: [{ path: "/home", meta: { title: "我的桌面" } }],
    // 落地页分组
    grouplist: JSON.parse(localStorage.getItem("grouplist")) || [],
    // 落地页链接
    landinglist: JSON.parse(sessionStorage.getItem("landinglist")) || [],
    // 微信号分组
    wxgrouplist: JSON.parse(localStorage.getItem("wxgrouplist")) || [],
>>>>>>> 90bfc2a (更新找到的部分)
  },
  mutations: {
    // 组合标签
    ADD_TAG(state, paths) {
      const flag = state.tagList.some((item) => item.path === paths.path);
      if (flag) {
        return;
      } else {
        state.tagList.push(Object.assign({}, paths));
      }
    },
    // 移除路由信息
    REMOVE_TAG(state, paths) {
      for (var i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].path == paths.path) {
          state.tagList.splice(i, 1);
        }
      }
    },
<<<<<<< HEAD
    // 改变dialog显示状态
    /*  UNVISIBLE_DIALOG(state) {
      state.dialogVisible = false;
    },
    VISIBLE_DIALOG(state) {
      state.dialogVisible = true;
    }, */
  },
  actions: {
    asyncAddTag(context, view) {
      context.commit("ADD_TAG", view);
    },
    removeTag(context, view) {
      context.commit("REMOVE_TAG", view);
    },
=======
    // 更新落地页分组
    GET_GROUP(state, list) {
      state.grouplist = list;
    },
    // 更新落地页
    GET_LANDING(state, list) {
      state.landinglist = list;
    },
    // 更新微信分组
    GET_WXGROUP(state, list) {
      state.wxgrouplist = list;
    },
  },
  actions: {
    // 组合标签
    asyncAddTag(context, view) {
      context.commit("ADD_TAG", view);
    },
    // 移除路由信息
    removeTag(context, view) {
      context.commit("REMOVE_TAG", view);
    },
    // 更新落地页分组
    getgroup(context, val) {
      context.commit("GET_GROUP", val);
    },
    // 更新落地页
    getlanding(context, val) {
      context.commit("GET_LANDING", val);
    },
    // 更新微信分组
    getwxgroup(context, val) {
      context.commit("GET_WXGROUP", val);
    },
>>>>>>> 90bfc2a (更新找到的部分)
  },
  getters: {},
});

export default store;
