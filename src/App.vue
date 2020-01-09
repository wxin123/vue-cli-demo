<template>
  <div id="app">
    <i style="position: fixed;right: 0;bottom: 0;color: #000;font-weight: bold;z-index: 100000000000000" id="evn">{{evn}}</i>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      evn: 'dev'
    }
  },
  created() {
    this.evn = process.env.VUE_APP_ENV
  }
}
</script>

<style>
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
</style>
