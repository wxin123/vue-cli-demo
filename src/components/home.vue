<template>
    <div id="home">
        <el-table
                :border="true"
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="id"
                    label="ID"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "home",
        data () {
            return {
                tableData: []
            }
        },
        created() {
            axios({
                url:'/demo/getDemo'
            }).then(res => {
                window.console.log(res.data.data)
                this.tableData = res.data.data
            })
        }
    }
</script>

<style scoped>

</style>
