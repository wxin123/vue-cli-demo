<template>
    <div id="index">
        <h3>字典类别</h3>
        <Add :optType="optType" :id="itemId"  v-if="dictionaryShow"/>
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
                <el-table-column prop="typeDesc" label="名称"></el-table-column>
                <el-table-column prop="code" label="编码"></el-table-column>
                <el-table-column prop="operate" label="操作" width="240">
                    <template slot-scope="scope">
                        <el-button @click="handleIntoDetail(scope.row)" type="primary" size="mini">查看</el-button>
                        <el-button type="warning" @click="handleEdit(scope.row)" size="mini">编辑</el-button>
                        <el-button type="danger" size="mini" @click="handleDel(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
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
</template>

<script>
    import bus from '@/utils/bus.js'
    import axios from 'axios'
    import Add from "./add";
    import interfaces from "@/utils/interface.js"

    export default {
        name: "index",
        components: {Add},
        data() {
            return {
                optType: 'add',
                itemId: '',
                formInline: {
                    keyword: ''
                },
                currPage: 1,
                pageNo: 30,
                count: 100,
                tableData: [],
                dictionaryShow: false
            }
        },
        created() {
            this.getList()
        },
        mounted() {
            bus.$on('dictionaryShow', flag => {
                this.dictionaryShow = flag
            })
            bus.$on('dictionaryReload',()=> {
                this.getList()
            })
        },
        methods: {
            getList() {
                // 查询字典列表
                let params = Object.assign(this.formInline, {pageNo: 1,starRow:1,pageSize:100})
                axios.get(interfaces.dictionaryType.PAGE, {
                    params: params
                }).then(res => {
                    this.tableData = res.data.data.list
                }).catch(error => {
                    window.console.log(error)
                })
            },
            handleQuery() {
                this.getList()
            },
            handleAdd() {
                this.optType = 'add';
                this.itemId = '';
                this.dictionaryShow = true
            },
            handleEdit(row) {
                this.optType = 'edit';
                this.itemId = row.id
                this.dictionaryShow = true
            },
            handleDel(row) {
                window.console.log(row)
                axios.post(interfaces.dictionaryType.DELETE,{typeId: row.id}).then(res => {
                    if(res.data.code ==200) {
                        this.$message({
                            message: res.data.msg,
                            type: 'success'
                        });
                        this.$emit('dictionaryReload')
                    }else {
                        this.$message({
                            message: res.data.msg,
                            type: 'error'
                        });
                    }
                    window.console.log(res)
                }).catch(err => {
                    window.console.log(err)
                })
            },
            handleIntoDetail(row) {
                window.console.log(row)
            },
            handleSizeChange() {

            },
            handleCurrentChange() {

            }
        }
    }
</script>

<style scoped lang="less">
    #index {
        h3 {
            text-align: center;
            margin: 0;
            padding: 0;
            height: 60px;
            line-height: 60px
        }
    }
</style>
