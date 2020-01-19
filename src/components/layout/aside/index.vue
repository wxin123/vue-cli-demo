<template>
  <div class="aside" :class="isFoldAside ? 'isFold': ''">
    <el-menu
      :collapse="isFoldAside"
      background-color="#545c64"
      :default-active="defaultActive"
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
      defaultActive: '',
      menuList: [
        {
          icon: "el-icon-reading",
          title: "字典管理",
          index: "1",
          children: [
            {
              title: "类别",
              index: "1-1",
              path: "/dictionary/type",
              name: "type"
            },
            {
              title: "详情",
              index: "1-2",
              path: "/dictionary/data",
              name: "data"
            }
          ]
        },
        {
          icon: "el-icon-mic",
          title: "娱乐管理",
          index: "3",
          children: [
            {
              title: "音乐",
              index: "3-1",
              path: "/entertainment/music",
              name: "music"
            }
          ]
        },
        {
          icon: "el-icon-pie-chart",
          title: "图表管理",
          index: "4",
          children: [
            {
              title: "柱状图",
              index: "4-1",
              path: "/echarts/bar",
              name: "bar"
            }
          ]
        },
        {
          icon: "el-icon-s-order",
          title: "任务管理",
          index: "5",
          children: [
            {
              title: "计划",
              index: "5-1",
              path: "/task/plan",
              name: "plan"
            },
            {
              title: "物品",
              index: "5-2",
              path: "/task/goods",
              name: "goods"
            }
          ]
        },
        {
          icon: "el-icon-setting",
          title: "系统管理",
          index: "10",
          children: [
            /*{
              title: "初始化数据库",
              index: "10-1",
              path: "/system/initDB",
              name: "initDB"
            },*/
            {
              title: "用户",
              index: "10-1",
              path: "/system/user",
              name: "user"
            },
            {
              title: "权限管理",
              index: "10-2",
              path: "/system/privilege",
              name: "privilege"
            }
          ]
        }
      ]
    };
  },
  computed: {
    ...mapState(["isFoldAside"])
  },
  created() {
      this.defaultActive = localStorage.getItem('asideIndex') || ''
  },
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
      localStorage.setItem("title",item.title)
      localStorage.setItem('asideIndex', item.index)
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
