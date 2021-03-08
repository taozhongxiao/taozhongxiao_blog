<template>
  <div class="home_container">
    <!--页面header-->
    <header>
      <div>
        zào bái
      </div>
      <!--页面顶部导航区域-->
      <nav>
        <ul class="mainMenu">
          <li class="navhomepagewide">
            <router-link to="/">主页</router-link>
          </li>
          <li class="navhomepagenarrow">
            <router-link to="/">主页</router-link>
          </li>
          <li class="navarticlewide">
            <router-link to="/">文章</router-link>
          </li>
          <li class="navarticlenarrow">
            <router-link to="/"><i class="el-icon-news"></i></router-link>
          </li>
          <li>
            <router-link to="/collections" class="navcollectwide"
              >collections</router-link
            >
          </li>
          <li>
            <router-link to="/collections" class="navcollectnarrow"
              ><i class="el-icon-attract"></i
            ></router-link>
          </li>
          <li>
            <router-link to="/more" class="navmorewide">更多</router-link>
          </li>
          <li>
            <router-link to="/more" class="navmorenarrow"
              ><i class="el-icon-magic-stick"></i
            ></router-link>
          </li>
          <li class="navblank"></li>
          <li>
            <router-link to="/subscribe" class="navsubwide">订阅</router-link>
          </li>
          <li>
            <router-link to="/subscribe" class="navsubnarrow"
              ><i class="el-icon-message"></i
            ></router-link>
          </li>
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
      <a href="https://github.com/taozhongxiao" title="github" target="_blank" class="iconfont"
        >&#xe6f6;</a
      >
      <a
        href="https://www.douban.com/people/139374534/"
        title="douban"
        target="_blank"
        class="iconfont"
        >&#xe691;</a
      >
      <a
        href="https://www.kaggle.com/taozhongxiao"
        title="kaggle"
        target="_blank"
        class="iconfont"
        >&#xe600;</a
      >
      <a class="identity" href="http://beian.miit.gov.cn/" target="_blank"
        >鄂ICP备2021002553号</a
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
      this.showWindow = 'none'
    },
    async subscribe () {
      const { data: res } = await this.$http.post('/subscribe', this.subscribeInfo)
      if (res.meta.status !== 200) {
        return this.$message.error('订阅失败!')
      }
      this.showWindow = 'none'
      this.showSuccess = 'block'
    }
  }
}
</script>

<style lang="less" scoped>
@media screen and (max-width: 992px) {
  .home_container {
    margin: 0;
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
    left: 4%;
    right: 4%;
    height: 60px;
    border-bottom: solid 4px #000000;
    > div {
      line-height: 60px;
      width: 20%;
      font-size: 24px;
      font-weight: bold;
      width: 220px;
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
    }
  }
  /deep/ .el-input__inner {
    border: 0;
    font-size: 0;
  }
  nav {
    width: 100vw;
    .mainMenu {
      display: flex;
      justify-content: space-between;
      position: fixed;
      left: 0;
      bottom: -1px;
      z-index: 100;
      backdrop-filter: blur(50px);
      border-top: solid 1px #808080;
      height: 56px;
      line-height: 56px;
      width: 80%;
      padding: 0 10%;
      margin: 0;
      li {
        // width: 22%;
        // font-size:
        list-style: none;
      }
      .navblank {
        display: none;
      }
    }
  }
  .navhomepagenarrow {
    display: none;
  }
  .navhomepagewide {
    display: none;
  }
  .navarticlewide {
    display: none;
  }
  .navcollectwide {
    display: none;
  }
  .navsubwide {
    display: none;
  }
  .navmorewide {
    display: none;
  }
  .main {
    width: 100%;
    min-height: 82vh;
    margin-top: 5vh;
    overflow: hidden;
    opacity: 0.5;
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    video {
      width: auto;
      height: 75vh;
      transform: translateX(-160px);
    }
  }
  /deep/ .el-input__inner {
    border: 0;
  }
  .subscribe {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 70vw;
    padding: 0 4%;
    transform: translate(-50%, -50%);
    height: 50vh;
    background-color: #eeeeee;
    opacity: 0.7;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    h1 {
      margin: 0;
      font-size: 24px;
      display: block;
    }
    form {
      margin: 0;
      width: 100%;
      margin-top: 20px;
      display: flex;
      align-items: center;
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
      font-size: 30px;
      font-weight: bold;
      color: #ffffff;
      position: absolute;
      top: 12vh;
      left: 10vw;
    }
  }
  footer {
    border-top: 1px solid #000000;
    padding-top: 30px;
    a {
      padding-right: 10px;
    }
    a:nth-child(4) {
      display: block;
      padding-top: 12px;
      color: #808080;
    }
    margin-top: 0;
    margin-bottom: 70px;
    font-size: 14px;
    p {
      padding-top: 10px;
      margin: 0;
    }
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
      margin: 0;
      width: 100%;
      margin-top: 20px;
      display: flex;
      align-items: center;
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
    border-top: solid 1px #000000;
    padding: 0;
    > p {
      line-height: 55px;
      display: block;
      float: right;
      margin: 0;
      font-size: 14px;
    }
    a:nth-child(4) {
      display: block;
      font-size: 14px;
      line-height: 55px;
      float: left;
      margin: 0;
      color: #000000;
      text-decoration: none;
    }
    a:nth-child(2) {
      display: block;
      font-size: 17.1px;
      transform: translateY(0.2px);
      float: left;
      margin: 0 25px 0 0;
      color: #000000;
      text-decoration: none;
    }
    a:nth-child(3) {
      display: block;
      font-size: 14.8px;
      transform: translateY(-0.2px);
      float: left;
      margin: 0 25px 0 0;
      color: #000000;
      text-decoration: none;
    }
    a {
      display: block;
      font-size: 16px;
      float: left;
      font-weight: bold;
      margin: 0 25px 0 0;
      line-height: 55px;
      color: #000000;
      text-decoration: none;
    }
    .identity {
      position: absolute;
      left: 50%;
      font-weight: normal;
      transform: translateX(-50%);
    }
    > div {
      font-size: 14px;
      font-weight: bold;
    }
    > a:hover {
      color: #808080;
    }
  }
  .navhomepagenarrow {
    display: none;
  }
  .navarticlenarrow {
    display: none;
  }
  .navcollectnarrow {
    display: none;
  }
  .navsubnarrow {
    display: none;
  }
  .navmorenarrow {
    display: none;
  }
}
a {
  color: #000000;
  text-decoration: none;
}
::-webkit-scrollbar {
  display: none;
}
</style>
