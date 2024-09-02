<template>
    <div ref="chart" style="width: 100%; height: 600px;"></div>
</template>

<script>
import * as echarts from 'echarts';
import china from '@/assets/json/china.json'
import axios from 'axios';
export default {
    data(){
        return{
            rs: null
        }
    },
    name: "SchoolMap",
    mounted() {
        this.fetchChartData();
        
    },
    methods: {
        async fetchChartData() {
            try {
            const response = await axios.get('http://localhost:8080/api/universities');
            const data = response.data;
            this.rs = data;
            this.initCharts(this.rs);
            }
            catch (error) {
            console.error("Error fetching data:", error);
            }
        },
        async initCharts(rs) {
            
            const chart = echarts.init(this.$refs.chart);
            echarts.registerMap('china', china);
            const option = {
                title: {
                    text: '全国大学分布',
                    textStyle: {
                        color: 'gold',
                        fontStyle: 'normal',

                    },
                    left: 'center',
                    top: '40px'

                },
                tooltip: {
                    trigger: 'item',
                },
                visualMap: { // 左侧小导航图标
                    show: true,
                    x: 'left',
                    y: 'top',
                    textStyle: {
                        fontSize: 8,
                    },
                    splitList: [{
                            end: 50
                        },
                        {
                            start: 50,
                            end: 99
                        },
                        {
                            start: 100,
                            end:149
                        },
                        {
                            start:150
                        }
                    ],
                    color: ['#8A3310',  '#E55B25','#F2AD92','#F9DCD1']
                },
                series: [{
                    name:'大学数量',
                    type: 'map',
                    map: 'china',
                    roam:false,
                    label: {
                        show: false,
                        normal: {
                            show: false, //省份名称
                            fontSize: 8,
                        },
                        emphasis: {
                            show: true,
                            fontSize: 8,
                        }
                    },
                    data:[],
                    itemStyle: {
                        normal: {
                            borderWidth: .5, //区域边框宽度
                            borderColor: '#009fe8', //区域边框颜色
                            areaColor: "#ffefd5", //区域颜色
                        },
                        emphasis: { // 鼠标滑过地图高亮的相关设置
                            borderWidth: .5,
                            borderColor: '#4b0082',
                            areaColor: "#fff",
                        }
                    }
                }]
            };
            option.series[0].data = rs.data;
            chart.setOption(option)
        }
    }
}

</script>
