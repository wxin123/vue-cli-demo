<template>
  <div id="index">
    <!-- 头部 -->
    <div class="header">
      <Header />
    </div>
    <div class="main">
      <!--左侧菜单-->
      <Aside />
      <div>
        <!--主体-->
        <Main :isFold="isFoldAside" />
        <!--底部-->
        <Footer :isFold="isFoldAside" />
      </div>
    </div>
    <Fold />
  </div>
</template>

<script>
import Header from "../components/layout/header/index.vue";
import Aside from "../components/layout/aside/index.vue";
import Main from "../components/layout/main/index.vue";
import Footer from "../components/layout/footer/index.vue";
import Fold from "../components/layout/foldBtn/index.vue";
import { mapState } from "vuex";
export default {
  components: {
    Header,
    Aside,
    Main,
    Footer,
    Fold
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["isFoldAside"])
  },
  created() {
    if (!localStorage.getItem("title")) {
      localStorage.setItem("首页");
    }
  }
};
</script>

<style scoped lang="less">
#index {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: #f9f9f9;
  .header {
    height: 50px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }
  .main {
    position: absolute;
    top: 50px;
    left: 0;
    bottom: 0;
    right: 0;
    background: #f3f3f3;
  }
}
</style>
