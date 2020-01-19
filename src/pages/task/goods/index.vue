<template>
    <div class="plan">
        <el-form :inline="true" class="form">
            <el-form-item label="关键字">
                <el-input v-model="name" size="small"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="query" size="small" type="primary">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button @click="add" size="small" type="primary">新增</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="list" :border="true" class="no-padding-table">
            <el-table-column label="名称" width="150">
                <template slot-scope="scope">
                    <el-input size="mini" v-model="scope.row.name"></el-input>
                </template>
            </el-table-column>
            <el-table-column label="价格" width="150">
                <template slot-scope="scope">
                    <el-input size="mini" v-model="scope.row.price"></el-input>
                </template>
            </el-table-column>
            <el-table-column label="数量" width="150">
                <template slot-scope="scope">
                    <el-input size="mini" v-model="scope.row.num"></el-input>
                </template>
            </el-table-column>
            <el-table-column label="已买" width="150">
                <template slot-scope="scope">
                    <el-input type="text" size="mini" v-model="scope.row.isBuy"></el-input>
                </template>
            </el-table-column>
            <el-table-column label="备注">
                <template slot-scope="scope">
                    <el-input type="text" size="mini" v-model="scope.row.mark"></el-input>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="116">
                <template slot-scope="scope">
                    <el-button-group>
                        <el-button type="primary" size="mini" @click="save(scope.row)">保存</el-button>
                        <el-button type="danger" size="mini" @click="del(scope.row)">删除</el-button>
                    </el-button-group>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import {GOODS} from '@/utils/apis.js';
export default {
    name: "index",
    data() {
        return {
            name: '',
            list: []
        }
    },
    created() {
        this.getList()
    },
    methods: {
        getList() {
            this.$http.post(GOODS.LIST, {name: this.name}).then((res) => {
                this.list = res.data
            })
        },
        query(){
            this.getList()
        },
        add() {
            this.$http.post(GOODS.INSERT).then(() => {
                this.getList()
            }).catch(() => {
            })
        },
        save(row) {
            this.$http.post(GOODS.UPDATE, row).then(() => {
                this.getList();
                this.$message.success('已保存')
            }).catch(() => {
            })
        },
        del(row) {
            this.$confirm('删除后无法恢复，是否删除？', '提示', {type: 'warning'}).then(() => {
                this.$http.post(GOODS.DELETE, {id: row.id}).then(() => {
                    this.getList();
                    this.$message.success('已删除')
                }).catch(() => {
                })
            })
        }
    }
}
</script>

<style scoped lang="less">

</style>
<style lang="less">
    .form{
        margin: 10px;
    }
</style>
