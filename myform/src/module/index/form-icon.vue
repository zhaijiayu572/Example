<!--一个用于表格中显示low，hight，middle图标的组件-->
<template>
  <span class="form-icon" :class="size">{{ size }}</span>
</template>
<script>
  export default{
      props:['size']
  }
</script>
<style scoped>
  .form-icon{
    padding: 3px 9px;
    font-size: 12px;
    color:#fff;
    border-radius: 4px;
    font-family: SourceSansPro-Regular;
  }
  .form-icon.high{
    background: #F62D51;
  }
  .form-icon.medium{
    background: #FFBF00;
  }
  .form-icon.low{
    background: #7EC63E;
  }
</style>
