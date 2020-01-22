<template>
    <div id="add">
        <div class="box">
            <div style="margin: 15px">
                <h3>创建/修改字典详情</h3>
            </div>
        </div>
    </div>
</template>

<script>
    import bus from '@/utils/bus.js';
    import {DICTIONARY_DATA} from '@/utils/apis.js'
    export default {
        name: "add",
        props: ['optType','id'],
        data(){
            return {
                form:{
                    id: '',
                    type:'',
                    code:''
                }
            }
        },
        methods:{
            handleAdd(){
                let url = this.optType == 'edit' ? DICTIONARY_DATA.INSERT:DICTIONARY_DATA.UPDATE
                this.form.id = this.id
                // 新增字典
                this.$http.post(url,this.form).then( res => {
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
