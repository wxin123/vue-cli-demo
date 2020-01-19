<template>
  <div id="app">
    <i style="position: fixed;right: 15px;bottom: 10px;color: #000;font-weight: bold;z-index: 100000000000000" id="evn">{{evn}}</i>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      evn: 'development'
    }
  },
  created() {
    this.evn = process.env.NODE_ENV
  }
}
</script>

<style lang="less">
  body,html{margin: 0;padding: 0;background: #f9f9f9}

  #app {
    width: 1000px;
    margin: 0 auto;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(144, 147, 153, 0.3);
    border-radius: 3px;
  }
  .no-padding-table.el-table{
    td{padding: 0!important;}
    .cell{padding: 0!important;}
    .el-table--border td:first-child .cell{padding: 0!important;}
  }
</style>
