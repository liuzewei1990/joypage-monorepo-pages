import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
import store from "./store";

// import work from "work";
// import vpdsmart from "vpdsmart";
// import "ant-design-vue/dist/antd.css";

// Vue.use(work);
// Vue.use(vpdsmart);

Vue.config.productionTip = false;

new Vue({
    store,
    render: (h) => h(App)
}).$mount("#app");
