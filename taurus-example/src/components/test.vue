<!--<template>-->
  <!--<t-table border :columns="customColumns" :data="data"></t-table>-->
<!--</template>-->
<!--<script>-->
  <!--export default {-->
    <!--data () {-->
      <!--return {-->
        <!--customColumns:[-->
          <!--{-->
              <!--title:"测试",-->
              <!--key:'test',-->
              <!--render:(h,params)=>{-->
                  <!--return h('div',[-->
                      <!--h('Icon',{-->
                          <!--props:{-->
                              <!--type:"magnify"-->
                          <!--}-->
                      <!--})-->
                  <!--])-->
              <!--}-->
          <!--}-->
        <!--],-->
        <!--data:[-->
          <!--{-->
              <!--test:'nihaoa'-->
          <!--}-->
        <!--]-->

      <!--}-->

    <!--},-->
    <!--methods: {-->
      <!--change (status) {-->
        <!--this.$Message.info('开关状态：' + status);-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->
<!--<template>-->
  <!--<t-table border :columns="customColumns" :data="data"></t-table>-->
<!--</template>-->
<!--<script>-->
  <!--export default {-->
    <!--data () {-->
      <!--return {-->
        <!--customColumns: [-->
          <!--{-->
            <!--title: '姓名',-->
            <!--key: 'name',-->
<!--//            render: (h, params) => {-->
<!--//              return h('div', [-->
<!--//                h('Icon', {-->
<!--//                  props: {-->
<!--//                    type: 'person'-->
<!--//                  }-->
<!--//                }),-->
<!--//                h('strong', params.row.name)-->
<!--//              ]);-->
<!--//            }-->
          <!--},-->
          <!--{-->
            <!--title: '年龄',-->
            <!--key: 'age'-->
          <!--},-->
          <!--{-->
            <!--title: '地址',-->
            <!--key: 'address'-->
          <!--},-->
          <!--{-->
            <!--title: '操作',-->
            <!--key: 'action',-->
            <!--width: 150,-->
            <!--align: 'center',-->
            <!--render: (h, params) => {-->
              <!--return h('div', [-->
                <!--h('Button', {-->
                  <!--props: {-->
                    <!--type: 'primary',-->
                    <!--size: 'small'-->
                  <!--},-->
                  <!--style: {-->
                    <!--marginRight: '5px'-->
                  <!--},-->
                  <!--on: {-->
                    <!--click: () => {-->
                      <!--this.show(params.index)-->
                    <!--}-->
                  <!--}-->
                <!--}, '查看'),-->
                <!--h('Button', {-->
                  <!--props: {-->
                    <!--type: 'error',-->
                    <!--size: 'small'-->
                  <!--},-->
                  <!--on: {-->
                    <!--click: () => {-->
                      <!--this.remove(params.index)-->
                    <!--}-->
                  <!--}-->
                <!--}, '删除')-->
              <!--]);-->
            <!--}-->
          <!--}-->
        <!--],-->
        <!--data: [-->
          <!--{-->
            <!--name: '王小明',-->
            <!--age: 18,-->
            <!--address: '北京市朝阳区芍药居'-->
          <!--},-->
          <!--{-->
            <!--name: '张小刚',-->
            <!--age: 25,-->
            <!--address: '北京市海淀区西二旗'-->
          <!--},-->
          <!--{-->
            <!--name: '李小红',-->
            <!--age: 30,-->
            <!--address: '上海市浦东新区世纪大道'-->
          <!--},-->
          <!--{-->
            <!--name: '周小伟',-->
            <!--age: 26,-->
            <!--address: '深圳市南山区深南大道'-->
          <!--}-->
        <!--]-->
      <!--}-->
    <!--},-->
    <!--methods: {-->
      <!--show (index) {-->
        <!--this.$Modal.info({-->
          <!--title: '用户信息',-->
          <!--content: '姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}'-->
        <!--})-->
      <!--},-->
      <!--remove (index) {-->
        <!--this.data6.splice(index, 1);-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->
<!--suppress ALL -->
<template>
  <div class="table-container" >
    <t-table border :columns="columns" :data="data" size="lg">

    </t-table>
    <button @click="close">test</button>
    <transition name="slide-down">
      <div v-show="slideVisible">
        <i class="aid aid-lightbulb-on aid-5x mr-5 icon-gradient-info"></i>
      </div>
    </transition>
  </div>

</template>
<script>
  export default {
    methods:{
        close(){
            this.slideVisible = true;
        }
    },
    data () {
      return {
        slideVisible:false,
        columns: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
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
        data: [
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
    }
  }
</script>


