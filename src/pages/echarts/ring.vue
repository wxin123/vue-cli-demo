<template>
    <div id="ring">
        <div>
            <div ref="ringChart" style="position: relative;width: 500px;height: 500px">
                <ul style="position: relative;width: 1px;height: 1px;left: 50%;top: 50%;background: #f00;margin: 0;padding: 0;list-style: none">
                    <li :key="idx" v-for="(item,idx) in dataList" :style="'box-sizing: border-box;text-align:center;list-style: none;margin: 0;padding: 0;width: '+item.width+'px;height: '+item.height+'px;position: absolute;border: 1px solid #ccc;left: -'+item.left+'px;top: -'+item.top+'px;border-radius: 50%;z-index: '+item.zIndex">{{item.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ring",
        data(){
            return {
                width: 500,
                height: 500,
                zIndex: 1,
                dataList: [
                    {name: '联排', value: 50, unit: 'km'},
                    {name: '小高层', value: 30, unit: 'km'},
                    {name: '洋房', value: 15, unit: 'km'},
                    {name: '别墅', value: 20, unit: 'km'}
                ]
            }
        },
        mounted(){
            this.init()
        },
        methods: {
            init(){
                let total = 0, max = 0;
                function compare(prop){
                    return function (a,b) {
                        return a[prop] -b[prop]
                    }
                }
                this.dataList.sort(compare('value'))
                this.dataList.forEach((item,idx) => {
                    total += item.value;
                    item.zIndex = idx + 1 + this.zIndex
                })
                max = this.dataList[this.dataList.length-1].value
                this.dataList.forEach(item => {
                    let rate = (item.value /total).toFixed(2);
                    item.rate = rate;
                    item.height = Math.floor(this.height * item.value /max)
                    item.width = Math.floor(this.width * item.value/max);
                    item.top = item.height /2
                    item.left = item.height /2
                })
            }
        }
    }
</script>

<style scoped>

</style>
