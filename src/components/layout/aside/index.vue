<template>
  <div class="aside" :class="isFoldAside ? 'isFold': ''">
    <el-menu
      :collapse="isFoldAside"
      background-color="#545c64"
      style="width: 182px"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu
        :index="item.index"
        :disabled="isFoldAside"
        v-for="item in menuList"
        :key="item.index"
      >
        <template slot="title">
          <i :class="item.icon" :title="item.title"></i>
          <span v-show="!isFoldAside">{{item.title}}</span>
        </template>
        <el-menu-item
          @click="goInto(childItem)"
          v-for="childItem in item.children"
          :index="childItem.index"
          :key="childItem.index"
        >{{childItem.title}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {},
  data() {
    return {
      menuList: [
        {
          icon: "el-icon-reading",
          title: "字典",
          index: "1",
          children: [
            {
              title: "类别",
              index: "1-1",
              path: "/type",
              name: "type"
            },
            {
              title: "详情",
              index: "1-2",
              path: "/data",
              name: "data"
            }
          ]
        }/*,
        {
          icon: "el-icon-pie-chart",
          title: "图表",
          index: "1",
          children: [
            {
              title: "饼图",
              index: "1-1",
              path: "/type",
              name: "type"
            },
            {
              title: "柱状图",
              index: "1-2",
              path: "/data",
              name: "data"
            }
          ]
        }*/
      ]
    };
  },
  computed: {
    ...mapState(["isFoldAside"])
  },
  created() {},
  watch: {
    isFoldActive(val) {
      window.console.log(val);
    }
  },
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      window.console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      window.console.log(key, keyPath);
    },
    goInto(item) {
      window.console.log(this.$router)
      localStorage.setItem("title",item.title)
      this.$router.push({
          path: item.path,
          name: item.name
      })
    }
  }
};
</script>

<style lang="less" scoped>
.aside {
  position: absolute;
  overflow-x: hidden;
  left: 0;
  top: 0;
  bottom: 0;
  width: 180px;
  background: #545c64;
  z-index: 2;
  transition: width 0.5s;
}
.isFold {
  width: 50px;
}
</style>
<style lang="less">
@defaultColor: #409eff;
.aside {
  .el-submenu {
    .el-submenu__title {
      padding: 0 10px !important;

      i {
        color: #fff;
      }
      span {
        color: #fff;
      }
    }
  }
  .el-submenu.is-opened{
    .el-submenu__title{
      background:rgb(67,74,80)!important;
    }
    .el-menu-item{
      color: #fff;
      height: 40px;
      line-height: 40px
    }
    .el-menu-item.is-active{
      background: @defaultColor!important
    }
  }
}
</style>