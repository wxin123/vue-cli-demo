<template>
    <div id="addTask">
        <div style="margin: 15px">
            <h3>创建账单</h3>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="类型">
                    <el-select v-model="form.type" placeholder="请选择消费类型">
                        <el-option label="交通" value="1"></el-option>
                        <el-option label="餐饮" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="时间">
                    <el-date-picker
                            v-model="form.time"
                            type="datetime"
                            placeholder="选择日期时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="金额">
                    <el-input type="text" v-model="form.money"></el-input>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input type="textarea" v-model="form.remark"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="small">立即创建</el-button>
                    <el-button type="default" size="small" @click="handleCancel">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import bus from '@/utils/bus.js'
    export default {
        name: "addTask",
        data() {
            return {
                form: {
                    type: '',
                    money: '',
                    time: '',
                    remark: ''
                }
            }
        },
        mounted() {
        },
        methods: {
            handleCancel() {
                bus.$emit('showAddTask',false)
            }
        }
    }
</script>

<style scoped lang="less">
    #addTask{
        position: absolute;
        z-index: 3;
        left: calc(50% - 470px);
        top: calc(50% - 300px);
        /*bottom: 0;*/
        width: 400px;
        height: 400px;
        background: #fff;
        /*box-shadow: 1px 0 10px #A3C9EF;*/
        border-radius: 3px;
    }
</style>
