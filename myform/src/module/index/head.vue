<template>
    <div id="head">
      <!--logo-->
        <div class="logo">
          <!--logo图标-->
            <span class="logo-pic">
                <t-icon type="cloud" class="ml-1" size="21" color="#9185FF"></t-icon>
            </span>
          <!--logo文字-->
            <span class="logo-content">AI DESIGN</span>
        </div>
      <!--搜索框-->
        <div class="search-box">
            <input type="text" placeholder="请输入搜索关键字">
        </div>
        <ul class="fun-list">
          <!--新建功能-->
          <li style="margin-right: 17px">
            <div class="new-btn">
              <span class="new-icon">
                <t-icon type="plus" class="mr-2" size="21" color="#8FA4AF"></t-icon>
              </span>
              <span class="new-word">新建</span>
            </div>
          </li>
          <!--时间表-->
          <li style="margin-right: 22px">
              <t-icon type="timelapse" class="" size="17" color="#8FA4AF"></t-icon>
          </li>
          <!--个人资料功能-->
          <li style="margin-right: 15px">
            <div class="person-info">
              <!--个人头像-->
              <span class="person-img" :style="myImg">
                <!--<img :src="imgSrc" alt="" class="">-->
              </span>
              <!--头像的功能按钮-->
              <t-icon type="arrow-down-drop" class="ml-1" size="22" color="#8FA4AF"></t-icon>
            </div>
          </li>
          <!--提示功能-->
          <li>
            <t-icon type="bell" class="ml-1" size="21" gradient="danger"></t-icon>
          </li>
        </ul>
    </div>
</template>
<script>
import test from "./test.vue"
export default {
    data:function () {
      return{
          myImg:{         //因为用户是动态的，所以头像数据是动态的
              backgroundImage:"url('"+require('../../asset/image/aid-logo.png')+"')",
              backgroundPosition:"center",
              backgroundRepeat:"no-repeat"
          }
      }
    }
}
</script>
<style>
    #head{
        height: 70px;
        width: 1441px;
        line-height: 70px;
    }
    #head .logo{

        float: left;
        padding-right: 90px;
    }
    #head .logo-pic{
        width: 24px;
        height: 16px;
        margin-left: 33px;
    }
    #head .logo-pic img{
        height: 16px;
    }
    #head .logo-content{
      font-family: OpenSans;
      color: #2B3F5B;
      font-size: 16px;
      margin-left: 10px;
    }
    #head .search-box{

        float: left;
        height: 100%;
    }
    #head .search-box input{
        /*border: 5px solid #000;*/
        outline: none;
        border: 0;
        border-left: 1px solid #96B0B2;
        height: 35px;
        padding: 7px 30px ;
      font-size: 14px;
      width: 172px;
      /*兼容Safari*/
      vertical-align: middle;
    }
    #head .fun-list{
      padding-left: 803px;
      float: left;
    }
    #head .fun-list li{
      float: left;
    }
    #head .new-word{
      font-family: PingFangSC-Medium;
      font-size: 14px;
      color: #8FA4AF;
    }
    #head .person-img {
      height: 24px;
      width: 24px;
      /*background: url("../assets/logo.png") no-repeat center;*/
      border-radius: 12px;
      overflow: hidden;
      display: inline-block;
      vertical-align:middle;
      background-size: cover;
    }
    #head .person-img img{
      height: 24px;
    }
</style>


