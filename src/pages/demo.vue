<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-col :span="24">
            <el-menu
              router 
              :default-active="$route.path"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
                  {{ item.navItem }}
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList:[
          {name:'/findProject',navItem:'发现项目'},
          {name:'/communityActivity',navItem:'社区动态'},
          {name:'/publishProject',navItem:'发布项目'},
          {name:'/personalCenter',navItem:'个人中心'},
          {name:'/manageCenter',navItem:'管理员中心'},
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
.el-header{background:#409eff;line-height: 60px;color:#fff;}
.el-aside{background: #ccc;height: calc(100vh - 60px);}
.el-menu{border-right: 0;}
h3{line-height: 40px;}
.el-row{display: inline-block}
</style>
