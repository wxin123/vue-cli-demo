<template>
    <div>
        <el-form :model="form" label-width="80px">
            <el-form-item label="姓名" >
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="角色" >
                <el-select v-model="form.sex" placeholder="选择性别" style="width: 100%">
                    <el-option label="管理员" :value="1">用户</el-option>
                    <el-option label="用户" :value="2">管理员</el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="职位">
                <el-input v-model="form.position" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="cancel">取 消</el-button>
            <el-button type="primary" @click="save">确 定</el-button>
        </div>
    </div>
</template>

<script>
    import io from '../../../api/io2'
    import bus from '@/utils/bus.js'

    export default {
        name: "add",
        props: ['type'],
        data() {
            return {
                form: {
                    name: '',
                    sex: 1,
                    position: ''
                }
            }
        },
        methods: {
            save() {
                window.console.log(this.form)
                io.insert('IDB', 'user', this.form, () => {
                    this.initForm()
                    bus.$emit('hideDialog', false)
                })
            },
            cancel() {
                this.initForm()
                bus.$emit('hideDialog', false)
            },
            initForm() {
                this.form = {
                    name: '',
                    sex: 1,
                    position: ''
                }
            }
        }
    }
</script>

<style scoped>

</style>
