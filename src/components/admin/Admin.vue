<template>
  <div class="container">
    <!--页头-->
    <div height="90px" class="header" display="flex">
      <div>
        <p>皂白的博客管理系统</p>
        <el-dropdown>
        <span class="el-dropdown-link">
         {{ username }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="logout">登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </div>
      <!--下拉菜单-->
    </div>

    <el-container>
      <!--侧边栏-->
      <el-aside>
        <el-col :span="12">
          <el-menu active-text-color="#579ef8" default-active="2" class="el-menu-vertical-demo" router>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>内容管理</span>
              </template>
              <el-menu-item-group>
                <template slot="title">文章 & Collection</template>
                <el-menu-item index="/admin/articles">内容列表</el-menu-item>
                <el-menu-item index="/admin/articles-upload"
                  >内容发布</el-menu-item
                >
                <el-menu-item index="/admin/categories">类别管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/admin/users" href>
              <i class="el-icon-menu"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
            <el-menu-item index="/admin/subscribe">
              <i class="el-icon-setting"></i>
              <span slot="title">订阅管理</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer height="30px">2021/2/19 update</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  created () {
    this.getUserName()
  },
  methods: {
    getUserName () {
      this.username = localStorage.getItem('username')
    },
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  width: 100%;
}

.header {
  justify-content: space-between;
  padding: 0 24px 0 24px;
  margin: 0;
  border-bottom: 2px solid #000000;
  p {
    display: block;
    margin: 0;
    line-height: 92px;
    font-size: 50px;
    font-weight: bold;
    width: 600px;
  }
}

.el-aside {
  padding: 10px 0 0 0;
  width: 300px;
  height: 100%;
}

.el-footer {
  height: 20px;
  margin: 0 0 0 20px;
  border-top: 1px solid #808080;
  padding: 0;
  line-height: 30px;
  font-size: 14px;
}

.el-menu-vertical-demo {
  width: 300px;
}

::-webkit-scrollbar {
  display: none;
}

.el-dropdown {
  position: absolute;
  top: 35px;
  right: 24px;
  display: block;
  float: right;
  font-size: 16px;
}

.el-icon-arrow-down {
    font-size: 16px;
}

.el-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
