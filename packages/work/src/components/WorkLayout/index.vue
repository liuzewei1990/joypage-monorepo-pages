<template>
    <grid-layout
        @layout-ready="layoutReadyEvent"
        :col-num="24"
        :row-height="30"
        :is-draggable="true"
        :auto-size="true"
        :margin="[5, 5]"
        :useStyleCursor="false"
        :is-resizable="true"
        :vertical-compact="true"
        :use-css-transforms="true"
        v-bind="$attrs"
        v-on="$listeners">
        <div v-show="isLayoutReady">
            <slot></slot>
        </div>
    </grid-layout>
</template>

<script>
    import { GridLayout } from "vue-grid-layout";
    export default {
        components: { GridLayout },
        data() {
            return {
                isLayoutReady: false
            };
        },
        methods: {
            layoutReadyEvent() {
                this.isLayoutReady = true;
            }
        }
    };
</script>

<style lang="less" scoped></style>
