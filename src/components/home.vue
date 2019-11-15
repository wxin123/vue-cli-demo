<template>
    <div id="home">
        <transition name="slide-fade" mode="out-in">
            <AddTask v-if="showAddTask"/>
        </transition>
        <div class="box" v-loading="showAddTask"
             element-loading-text=""
             element-loading-spinner="none"
             element-loading-background="rgba(0, 0, 0, 0.5)">
            <header class="header">
                <h3>小确幸记账</h3>
            </header>
            <NavBar/>
            <div class="table-box">
                <el-table
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column prop="id" label="ID"></el-table-column>
                    <el-table-column prop="date" label="日期"></el-table-column>
                    <el-table-column prop="type" label="类型"></el-table-column>
                    <el-table-column prop="money" label="金额"></el-table-column>
                    <el-table-column prop="remark" label="备注"></el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import NavBar from "./navBar";
    import AddTask from "./addTask";
    import bus from '@/utils/bus.js'
    export default {
        name: "home",
        components: {AddTask, NavBar},
        data () {
            return {
                showAddTask: false,
                tableData: [{id:1},{id:2}]
            }
        },
        created() {
            axios({
                url:'/demo/getDemo'
            }).then(res => {
                window.console.log(res.data.data)
                // this.tableData = res.data.data
            })
        },
        mounted() {
            bus.$on('showAddTask',flag =>{
                this.showAddTask = flag
            })
        }
    }
</script>

<style scoped lang="less">
    #home{
        width: 1000px;margin: 0 auto;background: #fff;position: absolute;bottom: 0;top: 0;left: calc(50% - 500px);box-sizing: border-box;
        padding: 0 15px;
        .table-box{
            border: 1px solid #f1f1f1;
            border-bottom: none;
        }
        .header{
            h3{margin: 0;line-height: 60px;text-align: center}
        }
        .box{position: absolute;width: 1000px;top: 0;bottom: 0;left: calc(50% - 500px);z-index: 2}
    }
    .slide-fade-enter-active {
        transition: all 0.35s ease;
    }
    .slide-fade-leave-active {
        transition: all 0.5s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateY(-10px);
        opacity: 0;
    }
</style>
