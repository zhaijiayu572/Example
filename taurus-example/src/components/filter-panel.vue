<!--一个筛选面板组件-->
<template>
  <transition name="slide-right">
    <div class="filter-panel" v-show="filterToggle">
      <!--顶部控制栏-->
      <div class="top">
        <!--关闭按钮-->
          <span class="close-btn" @click="close">
            <t-icon type="arrow-right" size="24" color="#7B98A7"></t-icon>
          </span>
          <span class="panel-title">高级筛选</span>
        <!--清空按钮-->
          <button @click="resetForm('myForm')" class="reset-btn">清空</button>
      </div>
      <div class="form-container">
        <t-form ref="myForm">
          <!--下拉菜单组-->
          <t-form-item label="选择器" >
            <t-select placeholder="请选择" v-model="filterObj.select1">
              <t-option value="1">0-10</t-option>
              <t-option value="2">10-20</t-option>
              <t-option value="3">20-30</t-option>
            </t-select>
          </t-form-item>
          <t-form-item label="选择器" >
            <t-select placeholder="请选择" v-model="filterObj.select2">
              <t-option value="beijing">北京市</t-option>
              <t-option value="shanghai">上海市</t-option>
              <t-option value="shenzhen">深圳市</t-option>
            </t-select>
          </t-form-item>
          <t-form-item label="选择器" >
            <t-select placeholder="请选择" v-model="filterObj.select3">
              <t-option value="beijing">北京市</t-option>
              <t-option value="shanghai">上海市</t-option>
              <t-option value="shenzhen">深圳市</t-option>
            </t-select>
          </t-form-item>
          <t-form-item label="选择器" >
            <t-select placeholder="请选择" v-model="filterObj.select4">
              <t-option value="beijing">北京市</t-option>
              <t-option value="shanghai">上海市</t-option>
              <t-option value="shenzhen">深圳市</t-option>
            </t-select>
          </t-form-item>
          <!--时间表单组-->

          <t-form-item >
              <div class="row">
                <div class="col-6">
                  <t-form-item label="我是时间">
                    <t-form-item prop="rangeDate" >
                      <t-date-picker v-model="filterObj.time1" type="date " placeholder="请选择日期时间"></t-date-picker>
                    </t-form-item>
                  </t-form-item>

                </div>
                <div class="col-6">
                  <t-form-item label="我是文字label">
                    <t-form-item prop="singleYearVal" >
                      <t-date-picker v-model="filterObj.time2" type="year" placeholder="请选择年份"></t-date-picker>
                    </t-form-item>
                  </t-form-item>
                </div>
              </div>
          </t-form-item>


        </t-form>
      </div>
      <!--底部按钮组-->
      <div class="bottom-btn-container">
        <button class="bottom-btn left-btn">另存为</button>
        <button class="bottom-btn right-btn" @click="filter">保存筛选</button>
      </div>
    </div>
  </transition>
</template>
<script>
  export default{
    mounted:function () {
      let select = document.querySelectorAll('.form .select');
      for(let i=0;i<select.length;i++){
          select[i].style.width = "100%";
      }
      let formGroup = document.querySelectorAll('.form-group');
      for(let i=0;i<formGroup.length;i++){
          formGroup[i].style.marginBottom = '21px';
      }

    },
    data(){
        return{
            filterObj:{
                select1:'',
                select2:'',
                select3:'',
                select4:'',
                time1:'',
                time2:'',
            }
        }
    },
    props:['filterToggle'],
    methods:{
        close(){
            this.$emit('closeFilter');
        },
        resetForm(){
            console.log(this.filterObj);
//          this.$refs['myForm'].resetFields();
            for(var name in this.filterObj){
                this.filterObj[name] = '';
            }
        },
        filter(){
            this.$emit('filter',this.filterObj);
        }
    }
  }
</script>
<style>
  .filter-panel{
    width: 405px;
    height: 100%;


    position: relative;
    background: #FFFFFF;
    box-shadow: -1px 13px 19px 0 rgba(0,0,0,0.10);
    border-radius: 1px;
  }
  .filter-panel .top{
    height: 62px;
    line-height: 62px;
    border-bottom:  1px solid #E6EAEE;
  }
  .filter-panel .top .close-btn{
    margin-left: 30px;
  }
  .filter-panel .top .panel-title{
    margin-left: 17px;
    font-family: PingFangSC-Regular;
    font-size: 20px;
    color: #2B3F5B;
  }
  .filter-panel .reset-btn{
    width: 78px;
    height: 32px;
    padding: 0 20px;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #7B98A7;
    letter-spacing: 0;
    line-height: 32px;
    border: none;
    background: #96B0B2;
    border-radius: 4px;
    margin-left: 157px;
  }
  .filter-panel .form-container{
    padding: 0 30px;
  }
  .filter-panel .bottom-btn-container{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    left: 0;
  }
  .filter-panel .bottom-btn{
    width: 50%;
    float: left;
    border: 0;
    height: 100%;
    cursor: pointer;
    outline: none;
  }
  .filter-panel .bottom-btn.left-btn{
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #7B98A7;
    background: #96B0B2;

  }
  .filter-panel .bottom-btn.right-btn{
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #FFFFFF;
    background: #9185FF ;
  }
</style>
