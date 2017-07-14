<template>
  <div id="app">
    <t-head></t-head>
    <div id="container">
      <!--顶部功能栏-->
      <div class="top">
        <!--分类功能栏-->
        <div class="catalog-fun">
          <span class="catalog-now">分类标题一</span>
          <!--展示更多的分类功能的按钮-->
          <span class="catalog-show-more">
            <t-icon type="arrow-down-drop" class="ml-4" size="30" color="#354052"></t-icon>
          </span>
          <div class="slide"></div>
        </div>

        <!--添加列表项-->
        <div class="add-item">
          <div class="add-item-content">
            <t-icon type="plus-circle-outline" size="17" color="#fff"></t-icon>
            <span>新建一个</span>
            <t-icon type="arrow-down-drop" size="20" color="#fff"></t-icon>
          </div>
        </div>
        <!--搜索框-->
        <div class="search-box">
          <input type="text" placeholder="搜索...">
          <span class="search-icon">
              <t-icon type="magnify" size="18"></t-icon>
            </span>
        </div>
        <!--列功能按钮-->
        <div class="side-btn col-btn" :class="{active:isActive.colBtn}">
          <span>
            <t-icon type="view-column" size="24" ></t-icon>
          </span>

        </div>
        <!--弹出侧边按钮-->
        <div class="side-btn filter-btn" @click="isActive.filterBtn?closeFilter():showFilter();" :class="{active:isActive.filterBtn}">
          <span>
            <t-icon type="filter-variant" size="24" ></t-icon>
          </span>
          <!--显示徽标数-->
          <span class="tip-num" v-show="filterNum">{{ filterNum }}</span>
        </div>
      </div>
    </div>
    <div class="table-container" style="width: 100%">
      <t-table border :columns="columns" :data="formData" size="lg">

      </t-table>
      <!--筛选面板-->
      <div class="filter-container"  style="height: 788px">
        <filter-panel :filter-toggle="isActive.filterBtn"  @closeFilter="closeFilter"></filter-panel>
      </div>
    </div>
  </div>
</template>

<script>

  import head from "./head.vue"
  import test from "./test.vue"
  import filterPanel from  './filter-panel.vue'
  export default {
    name: 'app',
    components:{
      tHead:head,
      myTest:test,
      filterPanel:filterPanel
    },
    mounted(){                   //钩子函数处理表格宽度问题
      let formWrapper = document.querySelectorAll('.table-wrapper')[0];
      formWrapper.style.width = "100%";

    },
    data:function () {
      return{
        isActive:{
          colBtn:true,           //控制列功能按钮
          filterBtn:true,           //控制筛选功能按钮
          catalogBtn:false         //控制分类按钮
        },
        filterNum:1,                //筛选出的结果的数量

        columns: [
          {

            type:"selection",
            width:107
          },
          {
            sortable:true,
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '地址',
            key: 'address'
          }
        ],
        formData: [
          {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          }
        ],

      }
    },
    methods:{
        closeFilter(){
            this.isActive.filterBtn = false;         //控制筛选框的关闭
        },
        showFilter(){
            this.isActive.filterBtn = true;            //控制筛选框的开启
        }
    }
  }
</script>

<style>
  #app{
    width: 1441px;
  }
  #container .top{
    width: 1441px;
    padding-left: 33px;
    height: 70px;
    line-height: 70px;
    background: #F4F8F9;
    box-shadow: 0 1px 0 0 #DFE6ED;
  }
  #container .top .catalog-fun{
    float: left;
  }
  #container .catalog-now{
    font-family: PingFangSC-Regular;
    font-size: 22px;
    color: #2B3F5B;
    vertical-align: middle;
  }
  #container .catalog-show-more{
    vertical-align: middle;
    display: inline-block;
  }
  #container .slide{
    border-left:2px solid #DFE3E9;
    height: 24px;
    vertical-align: middle;
    display: inline-block;
  }
  #container .add-item{
    float: left;
    padding-left: 20px;

  }
  #container .add-item-content{
    display: inline-block;
    width: 134px;
    height: 36px;
    background: #9185FF ;
    border-radius: 4px;
    line-height: 36px;
    padding: 0 12px;
    vertical-align: middle;
  }
  #container .add-item-content span{
    margin: 0 5px;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #FFFFFF;
  }
  #container .search-box{
    margin-left: 720px;
    float: left;
    line-height: 70px;
  }
  #container .search-box input{
    width: 240px;
    height: 36px;
    padding: 9px 12px;
    border: 1px solid #96B0B2;
    border-radius: 4px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #7F8FA4;
    /*兼容safari*/
    vertical-align: middle;
  }
  #container .search-icon{
    position: relative;
    left: -30px;
  }
  #container .side-btn{
    display: inline-block;
    /*float: left;*/
    height: 36px;
    width: 36px;
    vertical-align: middle;
    border-radius: 4px;
    line-height: 36px;
    text-align: center;
    position: relative;
  }
  #container .side-btn .tip-num{
    width: 20px;
    height: 20px;

    position: absolute;
    background: #FF6D57;
    border-radius: 10px;
    left: 23px;
    top:-7px;
    line-height: 20px;
    font-family: SourceSansPro-Bold;
    font-size: 14px;
    color: #FFFFFF;
  }
  #container .side-btn.active{
    background: #96B0B2;

  }
  .table-container{
    position: relative;
    padding: 22px 20px;
  }
  .table-container .filter-container{
    position: absolute;
    right: 0;
    top:1px;
  }
</style>
