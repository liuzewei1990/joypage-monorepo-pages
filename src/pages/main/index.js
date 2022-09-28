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

let router = null;
let instance = null;

function render(props = {}) {
    const { container } = props;

    instance = new Vue({
        store,
        render: (h) => h(App)
    }).$mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log("[vue] vue app bootstraped");
}
export async function mount(props) {
    console.log("[vue] props from main framework", props);
    render(props);
}
export async function unmount() {
    instance.$destroy();
    instance.$el.innerHTML = "";
    instance = null;
    router = null;
}

window["purehtml"] = {
    bootstrap,
    mount,
    unmount
};
