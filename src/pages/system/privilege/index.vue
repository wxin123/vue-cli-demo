<template>
    <div id="privilege">
        <el-dialog title="新增/编辑" :modal="false" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="名称">
                    <el-input type="text" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="标识符">
                    <el-input type="text" v-model="form.flag"></el-input>
                </el-form-item>
                <el-form-item label="描述">
                    <el-input type="text" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="small" @click="handleSave">立即创建</el-button>
                    <el-button type="default" size="small" @click="handleClose">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
        <div>
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="关键字">
                    <el-input v-model="formInline.keyword" size="small" placeholder="类别/编码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="small" @click="getList">查询</el-button>
                    <el-button type="primary" size="small" @click="handleAdd">新增</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div>
            <el-table :border="true" :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="ID"></el-table-column>
                <el-table-column prop="name" label="日期"></el-table-column>
                <el-table-column prop="flag" label="标识符"></el-table-column>
                <el-table-column prop="desc" label="描述"></el-table-column>
                <el-table-column prop="operate" label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary" size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                        <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div>
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currPage"
                    :page-size="pageSize"
                    layout="prev, pager, next, jumper"
                    :total="count">
            </el-pagination>
        </div>
    </div>
</template>

<script>
  import {PRIVILEGE} from '@/utils/apis.js'

  export default {
    name: "index",
    components: {},
    data() {
      return {
        dialogVisible: false,
        optType: 'add',
        formInline: {
          keyword: '',
        },
        form: {
          id: '',
          name: '',
          flag: '',
          desc: ''
        },
        currPage: 1,
        pageSize: 30,
        count: 100,
        tableData: [],
      }
    },
    created() {
      this.getList()
    },
    mounted() {
    },
    methods: {
      getList() {
        // 查询字典列表
        this.$http.get(PRIVILEGE.LIST, {
          params: this.formInline
        }).then(res => {
          this.tableData = res.data.data.data
          this.count = res.data.data.count
        }).catch(error => {
          window.console.log(error)
        })
      },
      handleAdd() {
        this.optType = 'add';
        this.form = {
          name: '',
          desc: '',
          flag: ''
        }
        this.dialogVisible = true
      },
      handleQuery(){
        this.getList()
      },
      handleSave() {

        this.$http.post(this.optType == 'edit' ? PRIVILEGE.UPDATE : PRIVILEGE.INSERT, this.form).then((res) => {
          window.console.log(res)
          this.dialogVisible = false
          this.getList()
        })
      },
      handleEdit(row) {
        this.optType = 'edit';
        this.form = {
          name: row.name,
          desc: row.desc,
          flag: row.flag,
          id: row.id
        }
        this.dialogVisible = true
      },
      handleDelete(row) {
        this.$http.post(PRIVILEGE.DELETE, {id: row.id}).then((res) => {
          window.console.log(res)
          this.getList()
        })
        window.console.log(row)
      },
      handleSizeChange() {

      },
      handleCurrentChange() {

      },
      handleClose() {
        this.dialogVisible = false
      }
    }
  }
</script>

<style scoped lang="less">
    #index {
        h3 {
            text-align: center;
            margin: 0;
            padding: 0;
            height: 60px;
            line-height: 60px
        }
    }
</style>
