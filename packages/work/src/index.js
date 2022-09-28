import WorkBase from "work-base";
import WorkUi from "work-ui";

import Work from "./components/Work";
import WorkView from "./components/WorkView";
import WorkLayout from "./components/WorkLayout";
import WorkComponent from "./components/WorkComponent";

// import microApp from "@micro-zoe/micro-app";
// microApp.start();

const install = function (app) {
    // 注册arco-design组件库

    // 注册work-base基础库 注册work-ui 组件包
    app.use(WorkBase);
    app.use(WorkUi);

    // 注册Work家族组件
    app.component("work", Work);
    app.component("work-view", WorkView);
    app.component("work-layout", WorkLayout);
    app.component("work-component", WorkComponent);
};

export default { install };
