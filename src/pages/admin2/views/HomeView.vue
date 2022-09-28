<template>
    <div class="home">
        <work :work="json"></work>
        <!-- <view-text :detail="text"></view-text> -->
        <!-- <micro-app
            name="child"
            url="http://10.10.23.110:8888/#/fullscreen?name=%E5%88%98%E5%AB%9A%E6%B5%8B%E8%AF%95--%E5%8B%BF%E6%93%8D%E4%BD%9C&id=795656079581999104&pageType=2"
            baseroute="/my-page"></micro-app> -->
    </div>
</template>

<script>
    // @ is an alias to /src
    import json from "./json";
    export default {
        name: "HomeView",
        data() {
            this.json = json;
            return {
                text: {
                    type: "text",
                    action: [],
                    dataBind: {
                        sn: "",
                        title: "",
                        biz: "",
                        queryParam: {}
                    },
                    style: {
                        position: {
                            x: 647,
                            y: 36,
                            w: 552,
                            h: 51
                        },
                        backColor: "transparent",
                        foreColor: "#fc0808",
                        zIndex: 1,
                        transform: 0,
                        text: "VPD组态功能示例",
                        textAlign: "center",
                        fontSize: "28",
                        fontFamily: {
                            label: "微软雅黑",
                            value: "微软雅黑"
                        },
                        visible: true,
                        borderWidth: 0,
                        borderStyle: "solid",
                        borderColor: "#ccccccff",
                        temp: {
                            position: {
                                x: 672,
                                y: 16
                            }
                        }
                    },
                    identifier: "fcf270c6-2079-c81b-26ef-d4e06bbd11de",
                    id: "02",
                    name: "text1"
                }
            };
        }
    };
</script>
