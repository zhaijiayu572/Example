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
        <div class="catalog-list-container">
          <catalog :catalog-toggle="isActive.catalogBtn"></catalog>
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
      <div class="page-panel">
        <t-pager :total="10" :page-size='10' :current="1" @on-change="changePage" simple="true"></t-pager>
      </div>
    </div>
  </div>
</template>

<script>

  import head from "./head.vue"
  import test from "./test.vue"
  import filterPanel from  './filter-panel.vue'
  import formIcon from './form-icon.vue'
  import catalog from './catalog.vue'
  export default {
    name: 'app',
    components:{
      tHead:head,
      catalog:catalog,
      filterPanel:filterPanel,
      formIcon:formIcon              //显示等级的图标组件
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
          catalogBtn:true         //控制分类按钮
        },
        filterNum:1,                //筛选出的结果的数量
        showData:[],                //当前显示的数据
        totalData:[],               //采用假分页，总数据
        pageNum:0,                 //总页数
        perPage:10,                //每一页的数据量
        columns: [
          {                                 //第一节
            type:'selection',                 // value:[true,false]代表不同的星星图标
            align:'center',
            width:'108',
            render:(h,params) => {                  //渲染出星星的图标
              return h('TIcon',{
                props: {
                  type: (params.selected&&params.selected!='false')?'star':'star-outline',      //判断星的形状
                  size:'20',
                  color:'#FFBF00'
                }
              })
            }
          },
          {
            width:'265',
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age',
            width:'251'
          },
          {
            title: '等级',                   //value:['high','medium','low']    代表不同的等级
            key: 'level',
            width:'152',
            render:(h,params) => {            //显示等级的分组
              return h(formIcon,{
                props: {
                  "size":params.level,
                }
              })
            }
          },
          {
          //            value:{
          //                content:'string',             工单的内容
          //                importance:1                  (1-5)number类型代表不同的重要程度的图标
          //            }
            title:'工单类型',
            key:'type',
            render:(h,params) => {
                var _this = this;         //记录指向vue对象的this
                return h('div',[
                    h('TIcon',{
                        props:{
                            type:'circle-outline',
                            size:'12',
                            color:_this.chooseFormTypeColor(params.type.importance)
                        },
                        style:{
                            verticalAlign:'middle'
                        }
                    }),
                    h('span',{
                        style:{
                            marginLeft:'12px',
                            verticalAlign:'middle'
                        },
                        domProps:{
                            innerHTML:params.type.content
                        }
                    })
                ])
            }
          },
          {
             /*
             * value:{
             *     username:String       //用户的名称
             *     address:String        //用户的地址
             * }
             * */
              title:'创建者',
              key:'creator',
              render:(h,params) =>{
                  return h('div',[
                      h('div',{
                          style:{
                            fontSize: "14px",
                            color: "#2B3F5B"
                          },
                          domProps:{
                              innerHTML:params.creator.username
                          }
                      }),
                      h('div',{
                          style:{
                            fontSize: "12px",
                            color: "#7B98A7"
                          },
                          domProps:{
                              innerHTML:params.creator.address
                          }
                      })

                  ])
              }
          }
        ],
        formData: [            //暂时的假数据
          {
            selected:false,
            name: '王小明',
            age: 18,
            level:'high',
            type:{
                content:'hello',
                importance:1
            },
            creator:{
                username:'nana',
                address:"湖南长沙"
            }
          },
          {
            selected:'false',
            name: '张小刚',
            age: 25,
            level:'low',
            type:{
              content:'hello',
              importance:2
            },
            creator:{
              username:'nana',
              address:"湖南长沙"
            }
          },
          {
            selected:true,
            name: '李小红',
            age: 30,
            level:'medium',

            type:{
              content:'hello',
              importance:3
            },
            creator:{
              username:'nana',
              address: '上海市浦东新区世纪大道',
            }
          },
          {
            selected:false,
            name: '周小伟',
            age: 26,
            level:'low',

            type:{
              content:'hello',
              importance:4
            },
            creator:{
              username:'nana',
              address: '深圳市南山区深南大道',
            }
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
        },
        chooseFormTypeColor(type){             //选择工单图标种类的颜色
            switch (type){
              case 1:
                  return "#AF8BEE";
              case 2:
                  return "#FFBF00";
              case 3:
                  return "#038CD6";
              case 4:
                  return "#FF847F";
              case 5:
                  return "#21BB54";
              default:
                  return false;
            }

        },
        loadData(){              //获取数据

        },
        changePage(pageNum){               //当页面改变时更换数据
            let start = pageNum*this.perPage;
            let end  = start + this.perPage;
            if(end > this.totalData){
                end = null;
            }
            this.showData = this.totalData.slice(start,end);
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
    position: relative;
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
  #container .catalog-list-container{
    position: absolute;
    z-index: 10;
    top:63px;
    left: 28px;
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
    z-index: 10;
  }
  .table-container .page-panel{
    position: absolute;
    bottom: -32px;
    right: 0;
  }
</style>
