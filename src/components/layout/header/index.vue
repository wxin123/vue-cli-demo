<template>
  <div id="header">
    <div class="logo" @click="goHome" :class="{isFold:isFoldAside}">
      <img src="../../../assets/logo.png" alt />
      <p>后台管理系统</p>
    </div>
    <div class="menu" :class="{isFold:isFoldAside}">
      <div class="title">
        <span v-if="headerTitle !=='首页'">{{headerTitle}}</span>
        <i v-else class="el-icon-s-home"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["isFoldAside","headerTitle"])
  },
  methods: {
    goHome() {
      this.$router.push("/index/home");
    }
  }
};
</script>

<style lang="less" scoped>
@defaultColor: #409eff;
#header {
  height: 50px;
  width: 100%;
  background: @defaultColor;
  color: #fff;
  .logo {
    position: absolute;
    cursor: pointer;
    left: 0;
    height: 50px;
    width: 180px;
    transition: width 0.5s;
    display: flex;
    overflow: hidden;
    img {
      width: 30px;
      height: 30px;
      margin: 10px;
    }
    p {
      line-height: 50px;
      font-size: 16px;
      margin: 0;
      padding: 0 5px;
    }
  }
  .logo.isFold {
    width: 50px;
  }
  .menu {
    position: absolute;
    left: 180px;
    right: 0;
    height: 50px;
    transition: left 0.5s;
    line-height: 50px;
    .title {
      padding: 0 10px;
      span {
        font-size: 18px;
        font-weight: blod;
      }
    }
  }
  .menu.isFold {
    left: 50px;
  }
}
</style>