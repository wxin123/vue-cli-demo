<template>
    <div class="user">
        <el-button type="primary" size="small" @click="handleAdd">新增</el-button>
        <el-button type="primary" size="small" @click="getList">查询</el-button>
        <el-table :data="list" border style="width: 100%">
            <el-table-column prop="id" label="ID" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="sex" label="性别" width="180"></el-table-column>
            <el-table-column prop="position" label="职位" width="180"></el-table-column>
            <el-table-column prop="operate" label="操作" width="240">
                <template slot-scope="scope">
                    <el-button type="warning" @click="handleEdit(scope.row)" size="mini">编辑</el-button>
                    <el-button type="danger" size="mini" @click="handleDel(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="pageNumber"
                :page-size="pageSize"
                layout="prev, pager, next, jumper"
                :total="count">
        </el-pagination>
        <el-dialog title="新增/编辑用户" :visible.sync="showDialog" :modal="false" width="500px">
            <AddUser :type="type"/>
        </el-dialog>

    </div>
</template>

<script>
    import io from '../../../api/io2'
    import AddUser from './add'
    import bus from '@/utils/bus.js'
    export default {
        name: "user",
        components: {AddUser},
        data(){
            return {
                list: [],
                pageNumber: 1,
                pageSize: 3,
                showDialog: false,
                type: 1,
                count: 0
            }
        },
        created(){
            this.getList()
        },
        mounted(){
            bus.$on('hideDialog', flag => {
                this.showDialog = flag
                window.console.log(flag)
                this.getList()
            })
        },
        methods: {
            handleAdd(){
                this.type = 1;
                this.showDialog = true
            },
            handleEdit(){
                this.type = 2;
                this.showDialog = true
            },
            handleDel(row){
                this.$confirm('确定删除？', '提示').then(() => {
                    let id = row.id;
                    io.deleteById('IDB','user', id, () => {
                        this.getList()
                    })
                })
            },
            handleSizeChange(val){
                window.console.log(val)
            },
            handleCurrentChange(val){
                this.pageNumber = val
                this.getList()
            },
            getList(){

                io.getList('IDB','user',{pageSize: this.pageSize,pageNumber: this.pageNumber},res => {
                    this.list = res.data.list;
                    this.count = res.data.count;
                })
            }
        },
        watch:{
            pageNumber(){
                this.getList()
            }
        }
    }
</script>

<style scoped>

</style>
