<template>
    <div>
        <t-button type="primary" @click="info">显示普通提示</t-button>
        <t-button @click="success">显示成功提示</t-button>
        <t-button @click="warning">显示警告提示</t-button>
        <t-button @click="danger">显示错误提示</t-button>
    
        <t-button @click="loading">显示加载中...</t-button>
        
        <t-button @click="time(true)">显示一个10秒的提示</t-button>
        <br>
        <br>
        <button @click="destroy()">destroy</button>
    </div>
    
</template>
<<script>
export default {
  methods:{
        success () {
            this.$Message.success('这是一条成功的提示');
        },
        warning () {
            this.$Message.warning('设计是一个发现问题、而不是发现解决方案的过程');
        },
        danger () {
            this.$Message.danger('测试是来表明bug的存在而不是不存在');
        },
        info () {
            this.$Message.info('这是一条普通的提醒');
        },
        loading () {
            const msg = this.$Message.loading('正在加载中...', 0);
            setTimeout(msg, 3000);
        },
        time (nodesc) {
            this.$Notice.warning({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '非优秀的程序员常常把空间和时间消耗殆尽，优秀的程序员则总是有足够的空间和时间去完成编程任务，而且配合近乎完美'
            });
        },
        destroy(){
            alert('hello');
            this.$Message.destroy();
        }

  }
}
</script>

