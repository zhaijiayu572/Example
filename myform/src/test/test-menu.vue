<template>
  <div>
     
    <div :class="[{'bg-warning h500': theme1 == 'ghost' }]">
 
        <t-menu mode="horizontal" :theme="theme1" active-name="1" @on-select="handleSelect">
            <t-menu-item name="1" disabled>
                <i class="aid aid-home"></i>
                首页
            </t-menu-item>
            <t-menu-item name="2">
                <i class="aid aid-account-multiple"></i>
                用户管理
            </t-menu-item>
            <t-submenu name="3">
                <template slot="title">
                    <i class="aid aid-chart-bar"></i>
                    统计分析
                </template>
                <t-menu-item name="3-1" disabled>新增和启动</t-menu-item>
                <t-menu-item name="3-2">活跃分析</t-menu-item>
                <t-menu-item name="3-3">时段分析</t-menu-item>
                <t-menu-group title="留存">
                    <t-menu-item name="3-4">用户留存</t-menu-item>
                    <t-menu-item name="3-5">流失用户</t-menu-item>
                </t-menu-group>
            </t-submenu>
            <t-menu-item name="4">
                <i class="aid aid-settings"></i>
                综合设置
            </t-menu-item>
        </t-menu>
    </div>
    <p>切换主题</p>
    <t-radio-group v-model="theme1">
        <t-radio label="light"></t-radio>
        <t-radio label="dark"></t-radio>
        <t-radio label="ghost"></t-radio>
    </t-radio-group>

  </div>
</template>
<<script>
export default {
  data () { // store data
      return {
        theme1: 'light',
      }
    },
}
</script>

