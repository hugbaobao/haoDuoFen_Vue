import Vue from "vue";
import App from "./App.vue";

import router from "./router";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

<<<<<<< HEAD
import store from "./store";
=======
import store from "./store/index";
import MyDialog from "./components/Dialog.vue";
>>>>>>> 90bfc2a (更新找到的部分)

Vue.config.productionTip = false;

Vue.use(ElementUI);

<<<<<<< HEAD
=======
// 全局组件
Vue.component("MyDialog", MyDialog);

>>>>>>> 90bfc2a (更新找到的部分)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
