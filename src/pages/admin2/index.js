import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import vpdsmart from "vpdsmart";
import work from "work";
import ProLayout, { PageHeaderWrapper } from "@ant-design-vue/pro-layout";
import * as Antd from "ant-design-vue";
console.log(Antd);
// Vue.use(vpdsmart);
Vue.use(work);
Vue.use(ProLayout);
// Vue.use(Antd);

import "ant-design-vue/dist/antd.css";
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount("#app");
