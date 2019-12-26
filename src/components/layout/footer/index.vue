<template>
    <div class="footer" :class="{isFold: isFold}"></div>
</template>
<script>
export default {
 props: {
      isFold: {
          type: [Boolean],
          default: false
      }
  }
};
</script>
<style lang="less" scoped>
.footer {
  background: #e5e5e5;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 180px;
  right: 0;
  z-index: 2;
  transition: left 0.5s;
}
.isFold {
  left: 50px;
}
</style>