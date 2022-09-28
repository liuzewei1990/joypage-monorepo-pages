<template>
    <div>
        <work :work="json"></work>
    </div>
</template>

<script>
    import json from "./json";
    export default {
        data() {
            this.json = json;
            return {};
        }
    };
</script>

<style lang="scss" scoped></style>
