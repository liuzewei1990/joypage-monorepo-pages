import { BasicLayout } from "../layouts/index.js";

/**
 * 基础路由
 */
export const baseRouterMap = [];

/**
 * 异步路由
 */
export const asyncRouterMap = [
    {
        path: "/",
        name: "index",
        component: BasicLayout,
        meta: { title: "menu.home" },
        redirect: "/home",
        children: [
            {
                path: "/home",
                name: "home",
                component: () => import(/* webpackChunkName: "home" */ "@admin2/views/home/"),
                meta: { title: "menu.dashboard", keepAlive: true }
            }
        ]
    },
    {
        path: "*",
        redirect: "/404",
        hidden: true
    }
];
