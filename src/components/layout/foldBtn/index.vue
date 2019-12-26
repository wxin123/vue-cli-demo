<template>
  <div class="fold" :class="{isFold:isFoldAside}">
    <i class="el-icon-arrow-left" v-if="isFoldAside" @click="unfold"></i>
    <i class="el-icon-arrow-left" v-else @click="fold"></i>
    <span>折叠菜单</span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["isFoldAside"])
  },
  methods: {
    fold() {
      this.$store.commit("isFoldAside", true);
    },
    unfold() {
      this.$store.commit("isFoldAside", false);
    }
  }
};
</script>
<style lang="less" scoped>
.fold {
  position: absolute;
  width: 180px;
  left: 0;
  bottom: 0;
  height: 50px;
  line-height: 50px;
  z-index: 10;
  transition: width 0.5s;
  border-top: 1px solid #666;
  overflow: hidden;
  color: #f5f5f5;
  i {
    width: 50px;
    height: 50px;
    float: left;
    text-align: center;
    font-size: 28px;
    line-height: 50px;
    transition: 0.2s;
  }
  span {
    text-align: center;
    float: left;
    text-align: left;
    padding-left: 10px;
  }
}
.isFold {
  width: 50px;
  i {
    transform: rotate(180deg);
  }
}
</style>