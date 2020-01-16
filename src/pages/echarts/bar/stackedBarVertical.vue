<template>
    <div id="stackedBar">
        <div class="chartTitle">表格二</div>
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
                tabIndex: 0
            }
        },
        mounted() {
            this.initChart()
        },
        methods: {
            initChart(){
                this.myChart = this.$echarts.init(this.$refs.myChart);
                this.myChart.setOption({
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data:['邮件营销','联盟广告','视频广告']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['周一','周二','周三','周四','周五','周六','周日']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'邮件营销',
                            type:'bar',
                            stack: '广告',
                            data:[120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name:'联盟广告',
                            type:'bar',
                            stack: '广告',
                            data:[220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name:'视频广告',
                            type:'bar',
                            stack: '广告',
                            data:[150, 232, 201, 154, 190, 330, 410]
                        }
                    ]
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
