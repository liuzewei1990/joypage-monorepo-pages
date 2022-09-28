<template>
    <Qiankun :name="name" :url="url"></Qiankun>
</template>

<script>
    import Qiankun from "./qiankun";
    export default {
        name: "WebComponent",
        components: { Qiankun },
        props: {
            name: {
                type: String,
                default: "",
                required: true
            },
            url: {
                type: String,
                default: "",
                required: true
            }
        },
        mounted() {}
    };
</script>
