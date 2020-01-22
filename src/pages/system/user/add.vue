<template>
    <div>
        <el-form :model="form" label-width="80px">
            <el-form-item label="昵称">
                <el-input v-model="form.realName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="账号">
                <el-input v-model="form.account" :disabled="type == 2" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="form.phoneNumber" :disabled="type == 2" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="角色">
                <el-select v-model="form.roleId" placeholder="选择角色" style="width: 100%">
                    <el-option label="用户" :value="1">用户</el-option>
                    <el-option label="管理员" :value="2">管理员</el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="cancel">取 消</el-button>
            <el-button type="primary" @click="save">确 定</el-button>
        </div>
    </div>
</template>

<script>
  import {USER} from '@/utils/apis.js';
  import bus from '@/utils/bus.js';

  export default {
    name: "add",
    props: ['type','userId'],
    data() {
      return {
        form: {
          id: this.userId,
          realName: '',
          account: '',
          phoneNumber: '',
          roleId: ''
        }
      }
    },
    created(){
      window.console.log(this.type)
      if(this.type == 2) {
        this.$http.post(USER.GET_ONE, {id: this.userId}).then((res) => {
          this.form = {
            id: res.data.id,
            realName: res.data.realName,
            account: res.data.account,
            phoneNumber: res.data.phoneNumber,
            roleId: res.data.roleId
          }
        })
      } else {
        this.form = {
          id: '',
          realName: '',
          account: '',
          phoneNumber: '',
          roleId: 1
        }
      }
    },
    methods: {
      save() {
        const url = this.type == 1 ? USER.INSERT : USER.UPDATE;
        this.$http.post(url, this.form).then((res) => {
          if(res.code == 200) {
            this.$message({message: res.msg,type: 'success'})
            bus.$emit('hideDialog', false)
            bus.$emit('reloadUser')
          }else {
            this.$message({message: res.msg,type: 'error'})
          }
        })
      },
      cancel() {
        bus.$emit('hideDialog', false)
      }
    }
  }
</script>

<style scoped>

</style>
