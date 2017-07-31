<template>
    <t-tooltip placement="top" content="Tooltip 文字提示" :delay="1000" @on-popper-hide="show()">
        <t-button>延时1秒显示</t-button>
    </t-tooltip>
</template>
 <script>
export default {
    data() {
        return {

        }
    },
    methods: {
        show(){
            console.log('hello');
        }
    }
}
</script>

