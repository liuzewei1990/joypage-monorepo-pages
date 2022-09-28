<template>
    <pro-layout :menus="[]" :sider-width="180" :collapsed="collapsed" :isMobile="isMobile" :handleMediaQuery="handleMediaQuery" :handleCollapse="handleCollapse" v-bind="settings">
        <router-view />
    </pro-layout>
</template>

<script>
    export default {
        data() {
            return {
                collapsed: false,
                // 是否手机模式
                isMobile: false,
                settings: {
                    // 布局类型
                    layout: "sidemenu", // 'sidemenu', 'topmenu'
                    // CONTENT_WIDTH_TYPE
                    contentWidth: "Fluid",
                    // 主题 'dark' | 'light'
                    theme: "dark",
                    // 主色调
                    primaryColor: "#1890ff",
                    fixedHeader: false,
                    fixSiderbar: false,
                    colorWeak: false,

                    hideHintAlert: false,
                    hideCopyButton: false
                }
            };
        },
        methods: {
            handleMediaQuery() {},
            handleCollapse() {}
        }
    };
</script>

<style lang="scss" scoped></style>
