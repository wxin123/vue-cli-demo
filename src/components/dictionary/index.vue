<template>
    <div id="index">
        <Add v-if="dictionaryShow"/>
        <div class="box" v-loading="dictionaryShow"
             element-loading-text=""
             element-loading-spinner="none"
             element-loading-background="rgba(0, 0, 0, 0.5)">
            <div>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="关键字">
                        <el-input v-model="formInline.keyword" size="small" placeholder="类别/编码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size="small" @click="handleQuery">查询</el-button>
                        <el-button type="primary" size="small" @click="handleAdd">新增</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div>
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
            <div>
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="currPage"
                        :page-size="pageNo"
                        layout="prev, pager, next, jumper"
                        :total="count">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import bus from '@/utils/bus.js'
    import axios from 'axios'
    import Add from "./add";
    export default {
        name: "index",
        components: {Add},
        data() {
            return {
                formInline: {
                    keyword: ''
                },
                currPage:1,
                pageNo:30,
                count: 100,
                tableData:[],
                dictionaryShow: false
            }
        },
        created(){
            this.getList()
        },
        mounted(){
            bus.$on('dictionaryShow',flag => {
                this.dictionaryShow = flag
            })
        },
        methods: {
            getList (){
                // 查询字典列表
                axios.get('',{
                    params: this.formInline
                }).then(res => {
                    this.tableData = res.data.list
                }).catch(error => {
                    window.console.log(error)
                })
            },
            handleQuery() {
                this.getList()
            },
            handleAdd(){
                this.dictionaryShow = true
            },
            handleSizeChange(){

            },
            handleCurrentChange(){

            }
        }
    }
</script>

<style scoped lang="less">
    #index{
        background: #fff;position: absolute;width: 1000px;top: 0;bottom: 0;left: calc(50% - 500px);
        .box{position: absolute;width: 1000px;top: 0;bottom: 0;left: calc(50% - 500px);z-index: 2}
    }
</style>
