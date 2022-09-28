<template>
    <!-- 表示路由页面根节点 -->
    <section class="work">
        <!-- 可以是多个视图 pages -->
        <!-- {{ views[currViewIndex] }} -->
        <work-view :workViewItem="views[currViewIndex]"></work-view>
    </section>
</template>

<script>
    export default {
        props: {
            work: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        computed: {
            currViewIndex() {
                return this.work.viewIndex;
            },
            views() {
                return this.work.views;
            }
        }
    };
</script>

<style lang="less" scoped>
    .work {
        position: relative;
        // background: #e3e3e3;
    }
</style>
