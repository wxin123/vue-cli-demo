<template>
    <div id="stackedBar">
        <div class="chartTitle">分业态客户年龄分布</div>
        <div class="chartTab">
            <span @click="changeTab(0)" :class="{active: tabIndex==0}">比例</span>
            <span @click="changeTab(1)" :class="{active: tabIndex==1}">人数</span>
        </div>
        <div ref="myChart" style="width: 100%;height: 500px"></div>
    </div>
</template>

<script>
    export default {
        name: "bar",
        data(){
            return {
                myChart: null,
                tabIndex: 0,
                list: [
                    {barColor: '#5FE1F5', label: '20岁以下', icon: '', data: [320, 302, 301, 334]},
                    {barColor: '#05B9AF', label: '20-25岁', icon: '', data: [120, 132, 101, 134]},
                    {barColor: '#4187F5', label: '25-35岁', icon: '', data: [220, 182, 191, 234]},
                    {barColor: '#3CC49B', label: '35-45岁', icon: '', data: [150, 212, 201, 154]},
                    {barColor: '#009B6E', label: '45-55岁', icon: '', data: [820, 832, 901, 934]},
                    {barColor: '#007391', label: '55岁以上', icon: '', data: [220, 182, 191, 234]}
                ],
                labelList: ['商住','小高','别墅','洋房']
            }
        },
        mounted() {
            this.initChart()
        },
        methods: {
            initChart(){
                let seriesList = []
                this.list.forEach(item => {
                    seriesList.push({
                        name: item.label,
                        barWidth: 12,
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: false,
                                position: 'inside'
                            }
                        },
                        itemStyle: {
                            color: item.barColor
                        },
                        data: item.data
                    })
                })
                this.myChart = this.$echarts.init(this.$refs.myChart);
                this.myChart.setOption({
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        // data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎'],
                        data: [
                            {name: '20岁以下',icon: '',textStyle: {fontSize: 12}},
                            {name: '20-25岁',icon: '',textStyle: {fontSize: 12}},
                            {name: '25-35岁',icon: '',textStyle: {fontSize: 12}},
                            {name: '35-45岁',icon: '',textStyle: {fontSize: 12}},
                            {name: '45-55岁',icon: '',textStyle: {fontSize: 12}},
                            {name: '55岁以上',icon: '',textStyle: {fontSize: 12}}
                        ],
                        bottom: 10
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: 20,
                        top: '3%',
                        containLabel: true
                    },
                    xAxis:  {
                        type: 'value'
                    },
                    yAxis: {
                        type: 'category',
                        data: this.labelList
                    },
                    series: seriesList
                })
            },
            changeTab(idx){
                this.tabIndex = idx
            }
        }
    }
</script>

<style scoped lang="less">
    #stackedBar{
        .chartTitle{font-size: 16px;font-weight: bold}
        .chartTab{
            text-align: right;
            height: 30px;
            line-height: 30px;
            span {
                display: inline-block;
                padding:  0 10px;
                cursor: pointer;
            }
            span.active{
                border-bottom: 2px solid #000;
            }
        }
    }
</style>
