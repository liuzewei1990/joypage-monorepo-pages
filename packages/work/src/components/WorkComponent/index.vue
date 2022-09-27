<template>
    <!-- 表示视图组件,用来解析element -->
    <section class="work-component">
        <grid-item :static="true" :i="workComponentItem.i" :x="workComponentItem.x" :y="workComponentItem.y" :w="workComponentItem.w" :h="workComponentItem.h">
            <component :is="coName" v-bind="coProps"> </component>
        </grid-item>
    </section>
</template>

<script>
    import { GridItem } from "vue-grid-layout";
    export default {
        components: { GridItem },
        props: {
            workComponentItem: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        computed: {
            elStyle() {
                return this.workComponentItem.elStyle;
            },
            coName() {
                return this.workComponentItem.coName;
            },
            coProps() {
                return this.workComponentItem.coProps;
            }
        }
    };
</script>

<style lang="less" scoped>
    .work-component-container {
        // position: absolute;
    }

    .vue-grid-item:not(.vue-grid-placeholder) {
        // background: #f2f2f2;
        // border: 1px solid black;
        touch-action: none;
    }
    .vue-grid-item .resizing {
        opacity: 0.9;
    }
    .vue-grid-item .static {
        background: #f2f2f2;
    }
    .vue-grid-item .text {
        // font-size: 24px;
        text-align: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        height: 100%;
        width: 100%;
    }
    .vue-grid-item .no-drag {
        height: 100%;
        width: 100%;
    }
    .vue-grid-item .minMax {
        font-size: 12px;
    }
    .vue-grid-item .add {
        cursor: pointer;
    }
    .vue-draggable-handle {
        position: absolute;
        width: 20px;
        height: 20px;
        top: 0;
        left: 0;
        background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat;
        background-position: bottom right;
        padding: 0 8px 8px 0;
        background-repeat: no-repeat;
        background-origin: content-box;
        box-sizing: border-box;
        cursor: pointer;
    }
</style>
