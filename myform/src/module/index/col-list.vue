<template>
  <transition name="slide-up">
    <ul class="col-list" v-show="colBtn">
      <li class="col-list-title">自定义列</li>
      <li v-for="x in colList" class="col-item">
        <t-checkbox size="lg" v-model="x.checked">{{ x.colName }}</t-checkbox>
      </li>
      <li class="save-btn-container">
        <button class="save-btn">保存</button>
      </li>
    </ul>
  </transition>
</template>
<script>
  export default{
      mounted(){
          this.init();
      },
      props:['colBtn'],
      data(){
          return{
              colList:[
                {
                    colName:'我是标题1',
                    checked:false
                },
                {
                    colName:'我是标题2',
                    checked:false
                },
                {
                    colName:'我是标题3',
                    checked:false
                },
                {
                    colName:'我是标题4',
                    checked:false
                }
              ],
              defaultIndex:100
          }
      },
      methods:{
          init(){
              let itemArr = document.querySelectorAll('.col-item');
              let list = document.querySelector('.col-list');
              //计算出父元素高度，从而进行设置
              list.style.height = 36*(itemArr.length+1)+56+'px';
//              将所有元素定位
              for(let i=itemArr.length-1;i>=0;i--){
                  itemArr[i].style.left = itemArr[i].offsetLeft+'px';
                  itemArr[i].style.top = itemArr[i].offsetTop+'px';
                  itemArr[i].style.position = "absolute";
                  this.drag(itemArr[i],itemArr);
                  itemArr[i].index = i;
                  itemArr[i].position = {
                      left:itemArr[i].offsetLeft,
                      top:itemArr[i].offsetTop
                  }
              }
          },


          //判断目标元素与elem是否发生碰撞
          getCrashed(elem,target){
              //获取移动元素的各个位置
              var elemLeft = elem.offsetLeft,
                elemRight = elem.offsetLeft + elem.offsetWidth,
                elemTop = elem.offsetTop,
                elemBottom = elem.offsetTop + elem.offsetHeight;
              //获取目标远的各个位置的值
              var targetLeft = target.offsetLeft,
                targetRight = target.offsetLeft + target.offsetWidth,
                targetTop = target.offsetTop,
                targetBottom = target.offsetTop + target.offsetHeight;
              return !(elemLeft > targetRight || elemRight < targetLeft
                         || elemTop > targetBottom || elemBottom < targetTop);
          },
          //找到已碰撞元素中里当前元素最近的元素
          nearest(elem,crashedArr){
              var min = 999999999999999;
              var minObj = null;
              for(var i=0;i<crashedArr.length;i++){
                  var left = elem.offsetLeft - crashedArr[i].offsetLeft;
                  var top = elem.offsetTop - crashedArr[i].offsetTop;
                  var dis = left*left + top*top;
                  if(dis < min){
                      minObj = crashedArr[i];
                      min = dis;
                  }
              }
              return minObj;
          },
          //给目标添加拖拽事件
          drag(elem,itemArr){
              //记录vue对象
              var _this = this;
              var changeObj = null;
              elem.onmousedown = function (e) {
                  //获取鼠标相对于元素的top和left
                  var mDisX = e.clientX - elem.offsetLeft;
                  var mDisY = e.clientY - elem.offsetTop;
                  elem.classList.add('selected');
                  elem.style.zIndex = _this.defaultIndex++;
                  document.onmousemove = function (e) {
                      //计算元素的位置
                      var eDisX = e.clientX - mDisX;
                      var eDisY = e.clientY - mDisY;

                      elem.style.left = eDisX + 'px';
                      elem.style.top = eDisY + 'px';
                      var crashedArr = [];
                      for(var i=0;i<itemArr.length;i++){
                          //当目标元素是自身时跳过
                          if(elem == itemArr[i]){
                              continue;
                          }else{
                            if(_this.getCrashed(elem,itemArr[i])){
                              crashedArr.push(itemArr[i])
                            }
                          }
                      }

                      if(crashedArr.length > 0){
                          //记录最近的dom元素
                          changeObj = _this.nearest(elem,crashedArr);
                      }else{
                          changeObj = null;
                      }
                  }

              };
              elem.onmouseup = function () {
                  //取消mousemove事件
                  document.onmousemove = null;
                  elem.classList.remove('selected');
                  if(changeObj){
                      //进行位置和值的互换
                      var position = elem.position;
                      elem.style.left = changeObj.position.left + 'px';
                      elem.style.top = changeObj.position.top + 'px';
                      elem.position = changeObj.position;
                      changeObj.style.left = position.left + 'px';
                      changeObj.style.top = position.top + 'px';
                      changeObj.position = position;

                      var changeVal = _this.colList[elem.index];
                      _this.colList[elem.index] = _this.colList[changeObj.index];
                      _this.colList[changeObj.index] = changeVal;
                      changeObj = null;
                  }else{
                      elem.style.left = elem.position.left + 'px';
                      elem.style.top = elem.position.top + 'px';
                  }

              }
          }
      }
  }
</script>
<style>
  .col-list{
    width: 180px;
    background: #F8FAFB;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.05);
    border-radius: 1px;
    padding-bottom: 10px;
    position: relative;

  }

  .col-list li{
    padding-left: 15px;
    width: 180px;
    height: 36px;
    line-height: 36px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #2B3F5B;
    background: #fff;
  }
  .col-list li.selected{
    background: #FFFFFF;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.07);
    border-radius: 4px;
    cursor: move;
    margin: 2px 0;
  }
  .col-list .col-list-title{
    font-family: PingFangSC-Semibold;
    font-size: 14px;
    color: #7B98A7;
  }
  .col-list .save-btn-container{
    position: absolute;
    bottom: 0;
    left: 0;
    height:56px;
    line-height: 56px;
  }
  .col-list .save-btn{
    width: 150px;
    height: 36px;
    background-image: linear-gradient(-225deg, #9185FF 0%, #6392FF 100%);
    border-radius: 4px;
    border: none;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #FFFFFF;
    line-height: 36px;
  }
</style>
