<template>
  <transition name="slide-up">
    <ul class="catalog-list" v-show="catalogToggle">
      <li v-for="x in catalogList">
        <div class="catalog-title">分类名称</div>
        <ul class="sub-catalog-list">
          <li v-if="!(x instanceof Array)" @click="changeChecked(x)">              <!--判断x的种类来决定渲染方式-->
            <span class="sub-catalog">{{ x.catalog }}</span>
            <t-icon type="check" size="18" color="#7D8FFF" v-show="x.checked"></t-icon>
          </li>
          <li v-else="" v-for="y in x" @click="changeChecked(y)">
            <span class="sub-catalog">{{ y.catalog }}</span>
            <t-icon type="check" size="18" color="#7D8FFF" v-show="y.checked"></t-icon>
          </li>
        </ul>
      </li>
      <li class="new-catalog">
        <t-icon type="plus-circle-outline" size="18" color="#7D8FFF"></t-icon>
        <span>新建分类</span>
      </li>
    </ul>
  </transition>
</template>
<script>
  export default{
      created(){

      },
      props:['catalogToggle'],
      data(){
          return{
              catalogList:[
                  [
                      {
                          catalog:'我是子分类',
                          checked:false
                      },
                      {
                        catalog:'我是子分类',
                        checked:false
                      }
                  ],
                  {
                      catalog:'我是子分类',
                      checked:true
                  }
              ]
          }
      },
      methods:{
          clearChecked(arr){                        //清除所有选中项
            for(let i=0;i<arr.length;i++){
              if(arr[i] instanceof Array){
                  this.clearChecked(arr[i]);        //递归修改数组里面的对象
              }else{
                arr[i].checked = false;
              }

            }
            return false;
          },
          changeChecked(obj){
              this.clearChecked(this.catalogList);
              obj.checked = true;
          }
      }
  }
</script>
<style>
  .catalog-list{
    background: #FFFFFF;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.05);
    border-radius: 1px;
    width: 210px;
  }
  .catalog-list .catalog-title{
    padding-left: 20px;
    height: 36px;
    width: 100%;
    color: #7B98A7;
    opacity: 0.5;
    font-size: 12px;
    line-height: 36px;
  }
  .catalog-list .sub-catalog-list li{
    padding-left: 30px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #2B3F5B;
    height: 36px;
    line-height: 36px;
  }
  .catalog-list .sub-catalog{
    margin-right: 76px;
  }
  .catalog-list .new-catalog{
    background: #FFFFFF;
    border-top: 1px solid #E7E9ED;
    height: 46px;
    width: 100%;
    line-height: 46px;
    padding-left: 23px;
  }
  .catalog-list .new-catalog span{
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #7D8FFF;
    margin-left: 10px;
  }
</style>
