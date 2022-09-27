<template>
    <grid-layout :col-num="24" :row-height="30" :is-draggable="true" :is-resizable="true" :vertical-compact="true" :use-css-transforms="true" v-bind="$attrs" v-on="$listeners">
        <slot></slot>
    </grid-layout>
</template>

<script>
    import { GridLayout } from "vue-grid-layout";
    export default {
        components: { GridLayout }
    };
</script>

<style lang="less" scoped></style>
