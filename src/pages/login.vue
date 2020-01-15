<template>
    <div class="login">
        <div class="loginBox">
            <h3>登录</h3>
            <el-form label-width="60px" ref="form" :rules="formRules" :model="form">
                <el-form-item label="账号" prop="username">
                    <el-input type="text" v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-button style="width: 100%" type="primary" @click="submit">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import Account from '@/utils/account'
    export default {
        name: "login",
        data(){
            return {
                form: {
                    username: 'admin',
                    password: '123456'
                },
                formRules: {
                    username: [
                        { required: true, message: '请输入账号', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                }
            }
        },
        created(){
            this.$http.get('/good/getGoods').then(res=> {
                window.console.log(res)
            }).catch(err => {
                window.console.log(err)
            })
        },
        methods: {
            submit(){
                this.$refs['form'].validate((valid) => {
                    if (valid) {
                        localStorage.setItem('isLogin', 1)
                        Account.setAccountInfo(this.form.username)
                        this.$router.push('/')
                    } else {
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped lang="less">
    .login{
        position: fixed;
        left: 0;right: 0;top: 0;bottom: 0;
        background: url("../assets/images/bg.jpg") 100% 100%;
        display: flex;
        align-items:center;
        justify-content:center;
        .loginBox{
            h3{text-align: center;font-size: 20px}
            width: 360px;
            background: #fff;
            padding: 15px;
        }
    }
</style>
