<template>
    <el-dialog :title="title" :visible.sync="visible" :modal="false" width="500px">
        <slot slot="form"></slot>
        <div slot="footer" class="dialog-footer">
            <el-button @click="cancel">取 消</el-button>
            <el-button type="primary" @click="sure">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
  export default {
    name: "index",
    prop: {
      isShow: {
        type: [Boolean],
        default: false
      },
      itemId: {
        type: [String],
        default: false
      },
      type: { // 1、新增，2、编辑
        type: [Number],
        default: 1
      },
      title: {
        type: [String],
        default: ''
      }
    },
    data(){
      return {
        visible: false
      }
    },
    methods: {
      cancel(){
        this.$emit('cancel')
      },
      sure(){
        this.$emit('sure')
      }
    },
    watch: {
      isShow(val){
        this.visible = val
        window.console.log(this.visible)
      }
    }
  }
</script>

<style scoped>

</style>
