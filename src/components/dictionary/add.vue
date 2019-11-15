<template>
    <div id="add">
        <div style="margin: 15px">
            <h3>创建/修改字典</h3>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="字典类别">
                    <el-input type="text" v-model="form.type"></el-input>
                </el-form-item>
                <el-form-item label="字典编码">
                    <el-input type="text" v-model="form.code"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="small" @click="handleAdd">立即创建</el-button>
                    <el-button type="default" size="small" @click="handleCancel">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import bus from '@/utils/bus.js'
    import interfaces from '@/utils/interface.js'
    import axios from 'axios'
    export default {
        name: "add",
        props: ['optType'],
        data(){
            return {
                form:{
                    type:'',
                    code:''
                }
            }
        },
        methods:{
            handleAdd(){
                let url = this.optType == 'edit' ? interfaces.dictionary.add:interfaces.dictionary.edit
                // 新增字典
                axios.post(url,this.form).then( res => {
                    bus.$emit('dictionaryShow',false)
                    window.console.log(res)
                }).catch(error => {
                    window.console.log(error)
                    bus.$emit('dictionaryShow',false)
                })
            },
            handleCancel(){
                bus.$emit('dictionaryShow',false)
            }
        }
    }
</script>

<style scoped lang="less">
    #add{
        position: absolute;
        z-index: 3;
        left: calc(50% - 470px);
        top: calc(50% - 300px);
        /*bottom: 0;*/
        width: 400px;
        height: 300px;
        background: #fff;
        /*box-shadow: 1px 0 10px #A3C9EF;*/
        border-radius: 3px;
    }
</style>
