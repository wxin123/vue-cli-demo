<template>
    <div id="navBar">
        <el-row :gutter="20">
            <el-col :span="7">
                <span>日期</span>
                <el-date-picker
                    v-model="date"
                    size="small"
                    type="datetime"
                    placeholder="选择日期时间"
                    align="right">
            </el-date-picker>
            </el-col>
            <el-col :span="7">
                <span>类型</span>
                <el-select v-model="type" size="small" clearable placeholder="请选择">
                    <el-option
                            v-for="item in typeList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="6">
                <el-button type="primary" size="small">查询</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "navBar",
        data() {
            return {
                date: '',
                type: '',
                typeList: [
                    {value:1,label:'交通'},
                    {value:2,label:'餐饮'}
                ]
            }
        },
        created() {},
        mounted() {},
        methods: {

        }
    }
</script>

<style scoped lang="less">
    #navBar{
        text-align: left;
        margin: 15px 0;
    }
</style>
