<template>
  <div>
      
    <t-carousel v-model="value1" autoplay :arrow="never">
        <t-carousel-item>
            <div class="demo-carousel">1</div>
        </t-carousel-item>
        <t-carousel-item>
            <div class="demo-carousel">2</div>
        </t-carousel-item>
        <t-carousel-item>
            <div class="demo-carousel">3</div>
        </t-carousel-item>
    </t-carousel>

  </div>
</template>
<script>
export default {
  data(){
      return{
        //   value1:0
      }
  }
}
</script>
<style>
.demo-carousel {
    height: 200px;
    line-height: 200px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    background: #506b9e;
    width: 100%
}
</style>

