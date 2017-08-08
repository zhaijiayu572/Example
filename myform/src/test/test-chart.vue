<template>
    
    
    <div style="width:245px;height:270px;position:relative">

         <div style="position:absolute;left:28px;top:23px" class="chart-pie1-container">
            <t-chart :options="pieData1" auto-resize ref="refPie1"></t-chart>
        </div>
         
        
        <div style="position:absolute;left:139px;top:23px" class="chart-pie1-container">
            <t-chart :options="pieData2" auto-resize ref="refPie2"></t-chart>
        </div>


        <div class="chart-bar-container" style="position:absolute;left:23px;bottom:42px;height:55px"> 
            <t-chart :options="squareData" auto-resize ref="squareRef"></t-chart>
            <span class="bar-title" style="position:absolute;left:70px;top:61px;
    font-family: PingFangSC-Regular; font-size: 10px; color: #2D3E53;
">23日</span>
        </div>

    </div>
        

    
    
</template>

<script>
export default {
    components: {},
    data() {
        return {
            pieData1: {
                title:{
                    text:'月流量',
                    textStyle:{
                        fontFamily: 'PingFangSC-Regular',
                        fontSize: '12',
                        color: '#7B93A7'
                    },
                    bottom:0,
                    
                    left:'18'
                },
                series: [
                    {
                        type: 'pie',
                        radius: ['75%', '100%'],
                        color:['#f0f0f0','#46CF8F'],
                        center:[40,40],
                        avoidLabelOverlap: false,
                        // hoverAnimation:false,
                        // legendHoverLink:false,
                        silent:true,
                        label: {
                            normal: {
                                show: true,
                                position: 'center',
                                textStyle: {
                                    fontSize: '20',
                                    color: '#2D3E53',
                                    // fontFamily: 'PingFangSC-Medium'
                                }
                            },
                        
                        },
                        data: [
                            { value: 60, name: '60%' },
                            { value: 40 },

                        ]
                    }
                ]
            },
            pieData2: {
                title: {
                    text: '月流量',
                    textStyle: {
                        fontFamily: 'PingFangSC-Regular',
                        fontSize: '12',
                        color: '#7B93A7'
                    },
                    bottom: 0,
                    left: '18'
                },
                series: [
                    {
                        type: 'pie',
                        radius: ['75%', '100%'],
                        color: ['#f0f0f0', '#46CF8F'],
                        center: [40, 40],
                        avoidLabelOverlap: false,
                        // hoverAnimation:false,
                        // legendHoverLink:false,
                        silent: true,
                        label: {
                            normal: {
                                show: true,
                                position: 'center',
                                textStyle: {
                                    fontSize: '20',
                                    color: '#2D3E53',
                                    // fontFamily: 'PingFangSC-Medium'
                                }
                            },

                        },
                        data: [
                            { value: 60, name: '60%' },
                            { value: 40 },

                        ]
                    }
                ]
            },
            squareData:{
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'item',
                    formatter: '{c}次',
                    backgroundColor: '#262D4A',
                    padding:[3,
                        6,
                        3,
                        6],
                    textStyle: {
                        fontFamily: 'NotoSansSC-Medium',
                        fontSize: '12',
                        color: '#FFFFFF'

                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12'],
                        axisTick: {
                            alignWithLabel: true
                        },
                        show:false
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        show:false
                    }
                ],
                series: [
                    {
                        name: '直接访问',
                        type: 'bar',
                        barWidth: '80%',
                        data: [10, 52, 200, 334, 390, 330, 220,100,200,300,50,100],
                         itemStyle: {
                            normal: {
                                opacity: 0.3,
                                color: '#7B93A7'
                            },
                            emphasis: {
                                color: '#FFBC36'
                            }
                        }
                    }
                ]
            }

        }
        
    },
    computed: {},
    methods: {},
    mounted() {
        // let dataIndex = -1
        let pie1 = this.$refs.refPie1
        let pie2 = this.$refs.refPie2
        let bar = this.$refs.squareRef
        pie1.resize({
            width: 80,
            height: 135
        });
        pie2.resize({
            width:80,
            height:135
        });
        bar.resize({
            width:200,
            height:55
        });
        // let dataLen = pie.options.series[0].data.length
        // setInterval(() => {
        //     pie.dispatchAction({
        //         type: 'downplay',
        //         seriesIndex: 0,
        //         dataIndex
        //     })
        //     dataIndex = (dataIndex + 1) % dataLen
        //     pie.dispatchAction({
        //         type: 'highlight',
        //         seriesIndex: 0,
        //         dataIndex
        //     })
        //     // 显示 tooltip
        //     pie.dispatchAction({
        //         type: 'showTip',
        //         seriesIndex: 0,
        //         dataIndex
        //     })
        // }, 3000)
        // this.connected = true

    }
}

</script>
