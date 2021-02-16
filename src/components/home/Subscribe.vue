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
    <div class="mainContent">
      <div class="main">
        <video
          src="../../assets/cloud.mp4"
          width="120%"
          height="auto"
          muted
          loop
          autoplay
        ></video>
      </div>
      <div class="subscribe" v-bind:style="{ display: showWindow }">
        <h1>Subscribe!<br>There's something funny.</h1>
        <i class="el-icon-close" @click="notShowSubcribe"></i>
        <form>
          <input
            type="text"
            name="firstname"
            placeholder="First time"
            v-model="subscribeInfo.fisrtname"
          />
          <input
            type="text"
            name="lastname"
            required="required"
            placeholder="Last name"
            v-model="subscribeInfo.lastname"
          />
          <input
            type="email"
            name="email"
            required="required"
            placeholder="Email"
            v-model="subscribeInfo.email"
          />
        </form>
        <div>
            <el-button class="submitbtn" type="info" @click="subscribe" size="small">Submit</el-button>
          </div>
      </div>
      <div class="success" v-bind:style="{ display: showSuccess }">
        <p>订阅成功！<br>请等待我的来信吧。</p>
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
      <p>Hosted by <b>taozhongxiao</b></p>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showWindow: 'block',
      showSuccess: 'none',
      subscribeInfo: {
        fisrtname: '',
        lastname: '',
        email: ''
      }
    }
  },
  methods: {
    notShowSubcribe () {
      console.log('s')
      this.showWindow = 'none'
    },
    async subscribe () {
      const { data: res } = await this.$http.post('/subscribe', this.subscribeInfo)
      if (res.meta.status !== 200) {
        return this.$message.error('订阅失败!')
      }
      this.showWindow = 'none'
      this.showSuccess = 'block'
      console.log('x')
    }
  }
}
</script>

<style lang="less" scoped>
@media screen and (max-width: 992px) {
  .home_container {
    width: 100%;
  }
}

@media screen and (min-width: 993px) {
  .home_container {
    width: 92%;
    height: 100%;
    padding: 0 4%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
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
  .mainContent {
    width: 100%;
    height: 70%;
    position: relative;
  }
  .main {
    width: 100%;
    height: 100%;
    overflow: hidden;
    opacity: 0.5;
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between;
    video {
      transform: translateY(-80px);
    }
  }
  /deep/ .el-input__inner {
    border: 0;
  }
  .subscribe {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 40%;
    transform: translate(-50%, -50%);
    height: 350px;
    background-color: #ffffff;
    opacity: 0.7;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    h1 {
      margin: 0;
      display: block;
    }
    form {
      // width: 70%;
      margin: 0;
      width: 100%;
      margin-top: 20px;
      display: flex;
      align-items: center;
      // flex-direction: column;
      justify-content: center;
      flex-wrap: wrap;
    }
    i {
      position: absolute;
      right: 3px;
      top: 3px;
      font-size: 30px;
    }
    div {
      width: 80%;
      margin: 10px auto;
      /deep/ .el-button.submitbtn {
        font-size: 14px;
        background-color: #000000;
        font-weight: bold;
        margin-top: 5px;
      }
    }
    input[type='text'] {
      width: 80%;
      border-top: 0;
      border-right: 0;
      border-left: 0;
      border-bottom: 1px solid #000000;
      padding: 0;
      margin: 10px auto;
      background: none;
      height: 30px;
      font-size: 16px;
      outline: none;
    }
    input[type='email'] {
      width: 80%;
      border-top: 0;
      border-right: 0;
      border-left: 0;
      border-bottom: 1px solid #000000;
      background: none;
      padding: 0;
      margin: 10px auto;
      height: 30px;
      font-size: 16px;
      outline: none;
    }
  }
  .success {
    p {
      font-size: 60px;
      font-weight: bold;
      color: #ffffff;
      position: absolute;
      top: 0;
      left: 80px;
    }
  }
  footer {
    width: 100%;
    height: 60px;
    border-top: solid 1px #000000;
    padding: 0;
    > p {
      // padding: 10px 0;
      margin: 0;
      line-height: 60px;
      float: right;
      font-size: 14px;
    }
    > a {
      display: block;
      float: left;
      font-size: 14px;
      font-weight: bold;
      line-height: 60px;
      color: #000000;
      text-decoration: none;
    }
    > a:hover {
      color: #808080;
    }
  }
}

::-webkit-scrollbar {
  display: none;
}
</style>
