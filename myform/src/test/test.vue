<div style="width:100%;height:270px;position:relative" >

                  <div style="position:absolute;left:0;top:0;width: 80px;height: 80px;" class="chart-pie1-container">
                    <t-chart :options="x.pieData1.defaultOption" auto-resize
                              :chart-width="defaultSize.width" :chart-height="defaultSize.height" ></t-chart>
                  </div>


                  <div style="position:absolute;left:111px;top:0;width: 80px;height: 80px" class="chart-pie2-container">
                    <t-chart :options="x.pieData2.defaultOption" auto-resize :ref="x.name+'RefPie2'"
                             :chart-width="defaultSize.width" :chart-height="defaultSize.height"></t-chart>
                  </div>


                  <div class="chart-bar-container" style="position:absolute;left:-5px;bottom:42px;height:55px">
                    <t-chart :options="x.barData.defaultOption" auto-resize
                             :chart-width="defaultSize.width" :chart-height="defaultSize.height"></t-chart>

                  </div>

                </div>
<script>
export default {
    data() {  // store data
        return {
            size: '80px',
            chartData: [],    // 存放图表数据
            pieData1: {
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
            squareData: {
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'item',
                    formatter: '{c}次',
                    backgroundColor: '#262D4A',
                    padding: [3,
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
                        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                        axisTick: {
                            alignWithLabel: true
                        },
                        show: false
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        show: false
                    }
                ],
                series: [
                    {
                        name: '直接访问',
                        type: 'bar',
                        barWidth: '60%',
                        data: [10, 52, 200, 334, 390, 330, 220, 100, 200, 300, 50, 100],
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
            },
            defaultSize: {             // 设置图表基本的大小
                width: '100%',
                height: '100%'
            }
        }
    },
    props: { // props data
    },
    computed: {
    },
    methods: { // methods
        // 构造初始的chart数据
        initData(type, data) {
            if (type == 'pie') {
                let left = parseFloat(data[0] / (data[1] + data[0])) * 100;
                let leftColor = '';
                if (left <= 10) {
                    leftColor = '#FF4545 ';

                } else if (left > 10 && left <= 20) {
                    leftColor = '#FFAC4C';

                } else {
                    leftColor = '#46CF8F';
                }
                return {
                    series: [
                        {
                            type: 'pie',
                            radius: ['75%', '100%'],
                            color: ['#f0f0f0', leftColor],
                            center: [40, 40],
                            avoidLabelOverlap: false,
                            silent: true,
                            label: {
                                normal: {
                                    show: true,
                                    position: 'center',
                                    textStyle: {
                                        fontSize: '20',
                                        color: '#2D3E53',
                                    }
                                },

                            },
                            data: [
                                // name为图表中显示的百分比
                                { value: data[1] },
                                { value: data[0], name: left + '%' },


                            ]
                        }
                    ]
                };
            } else if (type == 'bar') {
                return {
                    color: ['#3398DB'],
                    tooltip: {
                        trigger: 'item',
                        formatter: '{c}次',
                        backgroundColor: '#262D4A',
                        padding: [3,
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
                            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                            axisTick: {
                                alignWithLabel: true
                            },
                            show: false
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            show: false
                        }
                    ],
                    series: [
                        {
                            type: 'bar',
                            barWidth: '60%',
                            data: data,     // 初始化数据
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
        loadData(callback) {
            // 记载chart数据
            this.$domains.osp.get(this.$services.osp.CHART_DATA).then(function (res) {
                var dataArr = res.data.data;
                for (let i = 0; i < dataArr.length; i++) {
                    // 构造tag的样式
                    let status = null;
                    let statusData = dataArr[i].pie1;
                    let left = parseFloat(statusData[0] / (statusData[0] + statusData[1])) * 100;
                    let leftColor = '';
                    if (left <= 10) {
                        leftColor = '#FF4545 ';
                        status = {
                            type: 'danger',
                            text: '耗尽'
                        }
                    } else if (left > 10 && left <= 20) {
                        status = {
                            type: 'warning',
                            text: '告急'
                        }
                    }

                    let obj = {
                        pieData1: {
                            defaultOption: this.initData('pie', dataArr[i].pie1),

                        },
                        pieData2: {
                            defaultOption: this.initData('pie', dataArr[i].pie2),

                        },
                        barData: {
                            defaultOption: this.initData('bar', dataArr[i].bar),

                        },
                        status: status
                    };
                    this.chartData.push(obj);
                }
                callback && callback(dataArr);
            }.bind(this));

        }

    },
    created() { // init entry
        // 表格数据的初始化
        this.loadData(() => {

        })

    },
    mounted() {
        // let dataIndex = -1




    }
}
</script>