<template>
  <div class="mainContent" :class="{isFold: isFold}">
    <div class="content">
      <el-scrollbar :style="'height: '+height+'px;overflow-x:hidden'">
        <router-view />
      </el-scrollbar>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    isFold: {
      type: [Boolean],
      default: false
    }
  },
  data() {
    return {
      height: (document.documentElement.clientHeight || document.body.clientHeight) -100 // 页面窗口高度
    };
  },
  created(){
      window.onresize = () => {
        return (() => {
          this.height = (document.documentElement.clientHeight || document.body.clientHeight) -100
        })()
      }
  }
};
</script>
<style scoped lang="less">
.mainContent {
  position: absolute;
  left: 180px;
  right: 0;
  bottom: 50px;
  padding: 10px;
  top: 0;
  .content {
    height: 100%;
    background: #fff;
    border-radius: 6px;
  }
}
.isFold {
  left: 50px;
}
</style>