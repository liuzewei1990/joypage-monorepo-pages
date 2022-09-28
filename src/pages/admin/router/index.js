import Vue from "vue";
import Router from "vue-router";
import { constantRouterMap, asyncRouterMap } from "@admin/router/router.config";

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
    return originalPush.call(this, location).catch((err) => err);
};

Vue.use(Router);

const createRouter = () => new Router({ routes: [].concat(constantRouterMap).concat(asyncRouterMap) });

const router = createRouter();

export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher;
}

export default router;
