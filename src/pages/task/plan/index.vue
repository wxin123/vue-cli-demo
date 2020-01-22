<template>
    <div class="plan">
        <el-form :inline="true" class="form">
            <el-form-item label="关键字">
                <el-input v-model="name" size="small"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="query" size="small" type="primary">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button @click="add" size="small" type="primary">新增</el-button>
            </el-form-item>
        </el-form>
        <!--新增/编辑-->
        <AddDialog :cancel="cancel" :sure="sure" :isShow="isShow" title="修改任务">
            <template slot="form">
                <el-form :model="form" label-width="80px">
                    <el-form-item label="名称">
                        <el-input v-model="editForm.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="计划时间">
                        <el-input v-model="editForm.planTime"></el-input>
                    </el-form-item>
                    <el-form-item label="地点">
                        <el-input v-model="editForm.location" ></el-input>
                    </el-form-item>
                    <el-form-item label="预算">
                        <el-input v-model="editForm.money" ></el-input>
                    </el-form-item>
                    <el-form-item label="状态">
                        <el-input v-model="editForm.status" ></el-input>
                    </el-form-item>
                </el-form>
            </template>
        </AddDialog>
        <el-table :data="list" :border="true" class="no-padding-table">
            <el-table-column label="名称" width="150">
                <template slot-scope="scope">
                    <el-input size="mini" v-model="scope.row.name"></el-input>
                </template>
            </el-table-column>
            <el-table-column label="计划时间" width="150">
                <template slot-scope="scope">
                    <el-input size="mini" v-model="scope.row.planTime"></el-input>
                </template>
            </el-table-column>
            <el-table-column label="地点" width="150">
                <template slot-scope="scope">
                    <el-input size="mini" v-model="scope.row.location"></el-input>
                </template>
            </el-table-column>
            <el-table-column label="预算" width="150">
                <template slot-scope="scope">
                    <el-input type="text" size="small" v-model="scope.row.money"></el-input>
                </template>
            </el-table-column>
            <el-table-column label="状态">
                <template slot-scope="scope">
                    <el-input type="text" size="small" v-model="scope.row.status"></el-input>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="150">
                <template slot-scope="scope">
<!--                    <el-button type="primary" size="small" @click="save(scope.row)">保存</el-button>-->
                    <el-button type="warning" size="small" @click="edit(scope.row)">编辑</el-button>
                    <el-button type="danger" size="small" @click="del(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
  import {PLAN} from '@/utils/apis.js';
  import AddDialog from '../../../components/addDialog/index.vue'

  export default {
    name: "index",
    data() {
      return {
        isShow: false,
        itemId: '',
        name: '',
        editForm: {
          id: '',
          name: '',
          planTime: '',
          location: '',
          money: '',
          status: ''
        },
        list: []
      }
    },
    components: {
      AddDialog
    },
    created() {
      this.getList()
    },
    methods: {
      getList() {
        this.$http.post(PLAN.LIST, {name: this.name}).then((res) => {
          this.list = res.data
        })
      },
      getObject(){
        this.$http.post(PLAN.GET_ONE,{id: this.itemId}).then((res) => {
          window.console.log(JSON.stringify(res))
        })
      },
      query() {
        this.getList()
      },
      add() {
        this.$http.post(PLAN.INSERT).then(() => {
          this.getList()
        }).catch(() => {
        })
      },
      async edit(row){
        this.itemId = row.id;
        await this.getObject();
        this.isShow = true;
        window.console.log(this.isShow)
      },
      save(row) {
        this.$http.post(PLAN.UPDATE, row).then(() => {
          this.getList();
          this.$message.success('已保存')
        }).catch(() => {
        })
      },
      del(row) {
        this.$confirm('删除后无法恢复，是否删除？', '提示', {type: 'warning'}).then(() => {
          this.$http.post(PLAN.DELETE, {id: row.id}).then(() => {
            this.getList();
            this.$message.success('已删除')
          }).catch(() => {
          })
        })
      },
      cancel() {
        window.console.log('cancel')
      },
      sure() {
        window.console.log('sure')
      }
    }
  }
</script>

<style scoped lang="less">

</style>
<style lang="less">
    .form {
        margin: 10px;
    }
</style>
