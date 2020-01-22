<template>
    <div class="user">
        <el-form :inline="true" class="form">
            <el-form-item label="关键字">
                <el-input v-model="param.user" size="small"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" size="small" @click="getList">查询</el-button>
            </el-form-item>
<!--            <el-form-item>-->
<!--                <el-button type="primary" size="small" @click="handleAdd">新增</el-button>-->
<!--            </el-form-item>-->
        </el-form>
        <el-table :data="list" border style="width: 100%">
            <el-table-column prop="account" label="账号" width="180"></el-table-column>
            <el-table-column prop="realName" label="昵称" width="180"></el-table-column>
            <el-table-column prop="phoneNumber" label="手机号" width="180"></el-table-column>
            <el-table-column prop="roleId" label="角色">
                <template slot-scope="scope">
                    {{scope.row.roleId | getRole}}
                </template>
            </el-table-column>
            <el-table-column prop="operate" label="操作" width="150">
                <template slot-scope="scope">
                    <el-button type="warning" @click="handleEdit(scope.row)" size="mini">修改</el-button>
                    <el-button type="danger" size="mini" @click="handleDel(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="pageNumber"
                :page-size="pageSize"
                layout="prev, pager, next, jumper"
                :total="count">
        </el-pagination>
        <el-dialog title="新增/编辑用户" :visible.sync="showDialog" :modal="false" width="500px">
            <AddUser :type="type" :userId="currId"/>
        </el-dialog>
    </div>
</template>

<script>
  import {USER} from '@/utils/apis.js'
  import AddUser from './add'
  import bus from '@/utils/bus.js'

  export default {
    name: "user",
    components: {AddUser},
    data() {
      return {
        param: {
          user: '',
        },
        currId: '',
        list: [],
        pageNumber: 1,
        pageSize: 3,
        showDialog: false,
        type: 1,
        count: 0
      }
    },
    created() {
      this.getList()
    },
    mounted() {
      bus.$on('hideDialog', flag => {
        this.showDialog = flag
      })
      bus.$on('reloadUser', () => {
        this.getList()
      })
    },
    methods: {
      handleAdd() {
        this.type = 1;
        this.currId = ''
        this.showDialog = true
      },
      handleEdit(row) {
        this.type = 2;
        this.currId = row.id
        this.showDialog = true
      },
      handleDel(row) {
        this.$confirm('确定删除？', '提示').then(() => {
          let id = row.id;
          this.$http.post(USER.DELETE,{id: id}).then((res) => {
            let type = res.code == 200 ? 'success' : 'error'
            this.$message({message: res.msg,type: type})
            this.getList()
          })

        })
      },
      handleSizeChange(val) {
        window.console.log(val)
      },
      handleCurrentChange(val) {
        this.pageNumber = val
        this.getList()
      },
      getList() {
        this.$http.post(USER.LIST, Object.assign({pageSize: this.pageSize, pageNumber: this.pageNumber},this.param)).then((res) => {
          this.list = res.data;
          this.count = res.count;
        })
      }
    },
    watch: {
      pageNumber() {
        // this.getList()
      }
    },
    filters: {
      getRole(val){
        let name = '';
        if(val == 1) {
          name = '用户'
        } else if(val == 2) {
          name = '管理员'
        }
        return name
      }
    }
  }
</script>

<style scoped>
    .form{
        margin: 10px;
    }
</style>
