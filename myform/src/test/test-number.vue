<template>
  <div>
      
    <t-numberstepper  @on-change="showNumber()"></t-numberstepper>

  </div>
</template>
<<script>
export default {
  methods:{
      showNumber(num,test){
        console.log(num);
        alert(num);
      }
  }
}
</script>

