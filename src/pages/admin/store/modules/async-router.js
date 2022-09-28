/**
 * 向后端请求用户的菜单，动态生成路由
 */
import { constantRouterMap, asyncRouterMap } from "@admin/router/router.config";
import { generatorDynamicRouter } from "@admin/router/generator-routers";

const permission = {
    state: {
        routers: constantRouterMap,
        addRouters: asyncRouterMap
    },
    mutations: {
        SET_ROUTERS: (state, routers) => {
            state.addRouters = routers;
            state.routers = constantRouterMap.concat(routers);
        }
    },
    actions: {
        GenerateRoutes({ commit }, data) {
            return new Promise((resolve, reject) => {
                const { token } = data;
                generatorDynamicRouter(token)
                    .then((routers) => {
                        commit("SET_ROUTERS", routers);
                        resolve();
                    })
                    .catch((e) => {
                        reject(e);
                    });
            });
        }
    }
};

export default permission;
