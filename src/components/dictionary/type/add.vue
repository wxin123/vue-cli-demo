<template>
    <div id="add">
        <div class="box">
            <div style="margin: 15px">
                <h3>创建/修改字典类别</h3>
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="字典类别">
                        <el-input type="text" v-model="form.typeDesc"></el-input>
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
    </div>
</template>

<script>
    import bus from '@/utils/bus.js'
    import interfaces from '@/utils/interface.js'
    import axios from 'axios'
    export default {
        name: "add",
        props: ['optType','item'],
        data(){
            return {
                form:{
                    id: '',
                    typeDesc:'',
                    code:''
                }
            }
        },
        mounted(){
            if(this.optType == 'edit' ){
                this.form = JSON.parse(JSON.stringify(this.item))
            }
        },
        methods:{
            handleAdd(){
                let url = this.optType == 'add' ? interfaces.dictionaryType.ADD:interfaces.dictionaryType.EDIT
                // 新增字典
                axios.post(url,this.form).then( res => {
                    if(res.data.code == 200) {
                        this.$message({
                            message: res.data.msg,
                            type: 'success'
                        });
                        bus.$emit('dictionaryShow',false)
                        bus.$emit('dictionaryReload')
                    }else {
                        this.$message({
                            message: res.data.msg,
                            type: 'error'
                        })
                    }
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
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        .box{
            width: 400px;
            height: 300px;
            position: absolute;
            left: 15px;
            top: 15px;
            border-radius: 3px;
            background: #fff;
            z-index: 4;
        }
        /*box-shadow: 1px 0 10px #A3C9EF;*/

    }
</style>
