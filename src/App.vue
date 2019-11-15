<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
  body,html{margin: 0;padding: 0;background: #f9f9f9}
  #app {
    width: 1000px;
    margin: 0 auto;
  }
</style>
