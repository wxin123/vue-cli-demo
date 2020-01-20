<template>
    <div class="login">
        <div class="loginBox">
            <h3>{{type == 1 ? '登录': '注册'}}</h3>
            <el-form v-if="type==1" label-width="80px" ref="loginForm" :rules="loginFormRule" :model="loginForm">
                <el-form-item label="账号" prop="username">
                    <el-input type="text" v-model="loginForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="loginForm.password"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-button style="width: 100%" type="primary" @click="login">登录</el-button>
                    <span @click="goRegister">还没账号？去注册</span>
                </el-form-item>
            </el-form>
            <el-form v-if="type==2" label-width="80px" ref="regForm" :rules="regFormRule" :model="regForm">
                <el-form-item label="昵称" prop="nickname">
                    <el-input type="text" v-model="regForm.username"></el-input>
                </el-form-item>
                <el-form-item label="账号" prop="username">
                    <el-input type="text" v-model="regForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="regForm.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="password">
                    <el-input type="password" v-model="regForm.confirmPass"></el-input>
                </el-form-item>
                <el-form-item label="手机" prop="mobile">
                    <el-input type="text" v-model="regForm.mobile"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-button style="width: 100%" type="primary" @click="register">注册</el-button>
                    <span @click="goLogin">已有账号？去登录</span>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
  import Account from '@/utils/account'
  import {LOGIN } from '@/utils/apis.js'
  export default {
    name: "login",
    data() {
      return {
        type: 1,
        loginForm: {
          username: '',
          password: ''
        },
        regForm: {
          nickname: '',
          username: '',
          password: '',
          confirmPass: '',
          mobile: ''
        },
        loginFormRule: {
          username: [
            {required: true, message: '请输入账号', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ],
        },
        regFormRule: {
          nickname: [
            {required: true, message: '请输入昵称', trigger: 'blur'}
          ],
          username: [
            {required: true, message: '请输入账号', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ],
          confirmPass: [
            {required: true, message: '请确认密码', trigger: 'blur'}
          ],
          mobile: [
            {required: true, message: '请输入手机号', trigger: 'blur'}
          ],
        }
      }
    },
    created() {
    },
    methods: {
      goRegister(){
        this.type = 2
      },
      goLogin(){
        this.type = 1
      },
      login() {
        this.$refs['loginForm'].validate((valid) => {
          if (valid) {
            this.$http.post(LOGIN.LOGIN, this.form).then((res) => {
              window.console.log(res.data)
              if(res.status == 200) {
                Account.setAccountInfo(res.data.data)
                this.$router.push('/')
              }else {
                this.$message({message: res.data.message,type: 'error'})
              }
            })
          } else {
            return false;
          }
        });
      },
      register() {
        this.$refs['regForm'].validate((valid) => {
          if (valid) {
            this.$http.post(LOGIN.REGISTER, this.form).then((res) => {
              if(res.data.status == 200) {
                this.type = 1
              } else {
                this.$message({ message: res.data.message, type: 'error' })
              }
              window.console.log(res)
            })
          } else {
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped lang="less">
    .login {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: url("../assets/images/bg.jpg") 100% 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .loginBox {
            h3 {
                text-align: center;
                font-size: 20px
            }
            width: 360px;
            background: #fff;
            padding: 15px;
        }
    }
</style>
