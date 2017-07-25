<template>
    <div class="test-container">
        <t-button @click="toggle()">change</t-button>
        <transition name="move-left">
            <div class="button-contaier" v-show="isShow">
                <t-button>默认按钮</t-button>
                <t-button type="primary">主动作按钮</t-button>
                <t-button type="info">信息按钮</t-button>
                <t-button type="success">成功按钮</t-button>
                <t-button type="warning">警告按钮</t-button>
                <t-button type="danger">危险按钮</t-button>
                <br/>
                <t-button type="outline">默认按钮（幽灵）</t-button>
                <t-button type="outline-primary">主动作按钮（幽灵）</t-button>
                <t-button type="outline-info">信息按钮（幽灵）</t-button>
                <t-button type="outline-success">成功按钮（幽灵）</t-button>
                <t-button type="outline-warning">警告按钮（幽灵）</t-button>
                <t-button type="outline-danger">危险按钮（幽灵）</t-button>
                <br/>
                <t-button shape="circle" icon="play"></t-button>
                <t-button type="info" icon="cart-plus">添加购物车</t-button>
                <t-button type="info" shape="round" icon="play">播放</t-button>
                <t-button type="info" shape="round">圆角按钮</t-button>
                <br><br>
                <t-button type="outline" shape="circle" icon="play"></t-button>
                <t-button type="outline-info" icon="cart-plus">添加购物车</t-button>
                <t-button type="outline-info" shape="round" icon="play">播放</t-button>
                <t-button type="outline-info" shape="round">圆角按钮</t-button>
                <br>
                <t-button type="primary" size="lg">大的尺寸</t-button>
                <t-button type="primary">默认尺寸</t-button>
                <t-button type="primary" size="sm">小的尺寸</t-button>
                <br><br>
                <t-button type="primary" shape="round" size="lg">大的尺寸</t-button>
                <t-button type="primary" shape="round">默认尺寸</t-button>
                <t-button type="primary"  size="sm" block="true">小的尺寸</t-button>
                <br><br><br><br><br>
                <h6 class="mt-3 mb-2 text-gray">按钮组基础</h6>
                <t-button-group>
                    <t-button>取消</t-button>
                    <t-button type="primary">确定</t-button>
                </t-button-group>
                <t-button-group>
                    <t-button disabled>昨日</t-button>
                    <t-button disabled>今日</t-button>
                    <t-button disabled>明日</t-button>
                </t-button-group>
                <t-button-group>
                    <t-button type="primary">L</t-button>
                    <t-button>M</t-button>
                    <t-button>R</t-button>
                </t-button-group>
                <h6 class="mt-3 mb-2 text-gray">按钮组尺寸</h6>
                <t-button-group size="lg" :vertical="true" shape="circle">
                    <t-button type="outline-secondary">大尺寸</t-button>
                    <t-button type="outline-secondary">大尺寸</t-button>
                    <t-button type="outline-secondary">大尺寸</t-button>
                </t-button-group>
                <t-button-group>
                    <t-button type="outline-secondary">普通</t-button>
                    <t-button type="outline-secondary">普通</t-button>
                    <t-button type="outline-secondary">普通</t-button>
                </t-button-group>
                <t-button-group size="sm">
                    <t-button type="outline-secondary">小尺寸</t-button>
                    <t-button type="outline-secondary">小尺寸</t-button>
                    <t-button type="outline-secondary">小尺寸</t-button>
                </t-button-group>
                <h6 class="mt-3 mb-2 text-gray">图标组合</h6>
                <t-button-group>
                    <t-button icon="chevron-left">前进</t-button>
                    <t-button>后退
                        <t-icon type="chevron-right"></t-icon>
                    </t-button>
                </t-button-group>
                <t-button-group>
                    <t-button icon="skip-backward"></t-button>
                    <t-button icon="skip-forward"></t-button>
                </t-button-group>
                <t-button-group>
                    <t-button type="outline-secondary" icon="format-align-left"></t-button>
                    <t-button type="outline-secondary" icon="format-align-justify"></t-button>
                    <t-button type="outline-secondary" icon="format-align-center"></t-button>
                    <t-button type="outline-secondary" icon="format-align-right"></t-button>
                </t-button-group>
            </div>

        </transition>
    </div>
    aaaa
</template>
<script>
    export default{
        data () {
            return {
                isShow:false
            }
        },
        methods:{
            toggle(){
                this.isShow?this.isShow = false:this.isShow = true;
            }
        }
    }
</script>