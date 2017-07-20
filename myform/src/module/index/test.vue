<template>
  <t-pager :total="100" :current="1" @on-change="changePage"></t-pager>
</template>
<script>
  export default{
      methods:{
          changePage(page){
              console.log(page);
          }
      }
  }
</script>




