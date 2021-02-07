<template>
  <div class="home_container">
    <!--页面header-->
    <header>
      <div>
        taozhongxiao.
      </div>
      <!--页面顶部导航区域-->
      <nav>
        <ul class="mainMenu">
          <li><router-link to="/">主页</router-link></li>
          <li><router-link to="/articles">文章</router-link></li>
          <li><router-link to="/collections">collections</router-link></li>
          <li><router-link to="/more">更多</router-link></li>
          <li></li>
          <li><router-link to="/subscribe">订阅</router-link></li>
        </ul>
      </nav>
      <!--页面顶部搜索区域-->
      <div class="mainMenuSearch">
        <el-input placeholder="搜索"></el-input>
        <i class="el-icon-search" style="font-size: 20px"></i>
      </div>
    </header>

    <!--页面主体容器-->
    <div class="main">
      <div class="login">
        <!-- <div class="subscribeGuide">
          <span>姓</span>
          <span>名</span>
          <span>邮箱</span>
        </div> -->
        <el-form id="loginForm" ref="loginFormRef" :model="loginForm" :rules="loginFormRules">
            <el-form-item prop="email">
              <el-input
              placeholder="请输入邮件地址"
              v-model="loginForm.email"
            />
            </el-form-item>
            <el-form-item prop="password">
              <el-input
              placeholder="请输入密码"
              type="password"
              v-model="loginForm.password"
            />
            </el-form-item>
        </el-form>
        <el-button @click="login" size="small">登录</el-button>
      </div>
    </div>

    <!--页面footer-->
    <footer>
      <a href="https://github.com/taozhongxiao" title="github" target="_blank"
        >github</a
      >
      <a
        href="https://www.douban.com/people/139374534/"
        title="douban"
        target="_blank"
        >douban</a
      >
      <a
        href="https://www.kaggle.com/taozhongxiao"
        title="kaggle"
        target="_blank"
        >kaggle</a
      >
      <p>Hosted by taozhongxiao</p>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    var checkEmail = (rule, value, cb) => {
      // 验证邮箱的正则表达式
      const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/

      if (regEmail.test(value)) {
        // 合法的邮箱
        return cb()
      }

      cb(new Error('请输入合法的邮箱'))
    }
    var checkPassword = (rule, value, cb) => {
      // 验证密码的正则表达式
      const regPassword = /^[a-zA-Z0-9]{6,15}$/

      if (regPassword.test(value)) {
        return cb()
      }

      cb(new Error('密码为6-15位大、小写字母和数字'))
    }
    return {
      loginForm: {
        email: '',
        password: ''
      },
      loginFormRules: {
        // 验证用户名是否合法
        email: [
          { required: true, message: '请输入邮件地址', trigger: 'blur' },
          { validator: checkEmail, message: '请输入合法邮件地址', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: checkPassword, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async login () {
      const { data: res } = await this.$http.post('/admin/login', this.loginForm)
      console.log(res)
      if (res.meta.status !== 200) {
        this.$message.error('登录失败！')
      }
      this.$message.success('登录成功！')
      localStorage.setItem('Authorization', res.data.token)
      localStorage.setItem('username', res.data.username)
      this.$router.push('/admin')
    }
  }
}
</script>

<style lang="less" scoped>
@media screen and (max-width: 992px) {
  .home_container {
    width: 100%;
    height: 100%;
  }
}

@media screen and (min-width: 993px) {
  .home_container {
    width: 92%;
    padding: 0 4%;
    background-color: #ffffff;
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
      'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
    overflow: hidden;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 92px;
    width: 100%;
    border-bottom: solid 4px #000000;
    > div {
      line-height: 92px;
      width: 20%;
      font-size: 30px;
      font-weight: bold;
      width: 220px;
    }
    > nav {
      width: 35%;
      padding: 0;
      margin: 0;
      display: block;
      .mainMenu {
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-between;
        > li {
          line-height: 92px;
          list-style: none;
          > a {
            text-decoration: none;
            color: #000000;
          }
        }
      }
    }
    .mainMenuSearch {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 20%;
      .el-input {
        width: 90%;
        font-size: 14px;
        padding: 0;
      }
      .i {
        display: block;
        width: 10%;
        align-self: flex-end;
        // transform: translateY(2px);
      }
    }
  }

  .main {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;

  }

  .login {
    width: 30%;
    margin: 200px;
    /deep/ .el-input__inner {
      border-bottom: 1px solid #000000;
      padding: 20px 0;
      border-top: 0;
      border-right: 0;
      border-left: 0;
      border-radius: 0;
      background: none;
    }
  }

  footer {
    position: absolute;
    bottom: 0;
    width: 92%;
    margin-top: 0;
    border-top: solid 1px #000000;
    padding: 0;
    > p {
      padding: 15px 0;
      margin: 0;
      float: right;
      font-size: 14px;
    }
    > a {
      display: block;
      float: left;
      font-size: 14px;
      font-weight: bold;
      margin: 15px 30px 15px 0;
      color: #000000;
      text-decoration: none;
    }
    > a:hover {
      color: #808080;
    }
  }
}

header {
  /deep/ .el-input__inner {
    border: 0;
    background: none;
  }
}

::-webkit-scrollbar {
  display: none;
}
</style>
