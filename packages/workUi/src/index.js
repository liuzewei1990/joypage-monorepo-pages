import "../components/index.less";
import * as Components from "../components/index.js";
const install = function (Vue) {
    for (const key in Components) {
        Vue.component(key, Components[key]);
    }
};

export default { install };
