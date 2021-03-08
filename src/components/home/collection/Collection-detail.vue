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
    <div class="main">
      <!--页面边栏-->
      <div class="aside">
        <div class="articleCate">
          <router-link to="/collections">{{ article.cate }}</router-link>
        </div>
      </div>
      <!--页面主体-->
      <div class="article">
        <span class="title">{{ article.title }}</span>
        <span class="date">{{ article.date }}</span>
        <div class="ql-container ql-snow">
          <div class="ql-editor">
            <div v-html="article.content"></div>
          </div>
        </div>
      </div>
    </div>

    <!--页面footer-->
    <footer>
      <a
        href="https://github.com/taozhongxiao"
        title="github"
        target="_blank"
        class="iconfont"
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
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

export default {
  data() {
    return {
      date: '',
      digest: '',
      id: '',
      article: {
        title: '',
        username: '',
        digest: '',
        content: '',
        date: '',
        cate: ''
      }
    }
  },
  created() {
    this.getDetail()
  },
  methods: {
    GetRequest() {
      const url = window.location.hash // 获取url中"?"符后的字串Request = GetRequest()
      const theRequest = []
      if (url.indexOf('?') !== -1) {
        const str = url.substr(13)
        const strs = str.split('&')
        for (let i = 0; i < strs.length; i++) {
          theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
        }
      }
      return theRequest
    },
    async getDetail() {
      this.id = this.GetRequest().id
      const { data: res } = await this.$http.get('/collection-detail', {
        params: this.id
      })
      if (res.meta.status !== 200) {
        return this.$message.error('获取用户列表失败！')
      }
      this.article.title = res.data.content[0].title
      this.article.digest = res.data.content[0].digest
      this.article.content = res.data.content[0].content
      this.article.date = res.data.content[0].date.substr(0, 10)
      this.article.cate = res.data.content[0].cate
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
    min-height: 90vh;
    .aside {
      margin-top: 5vh;
      .articleCate {
        a {
          font-size: 20px;
          font-weight: bold;
        }
      }
    }
    .title {
      font-size: 24px;
      display: block;
      font-weight: bold;
      padding-top: 25px;
      padding-bottom: 15px;
    }
    .date {
      color: #808080;
    }
    /deep/ .ql-editor {
      width: 100%;
      font-size: 16px;
      border: 0;
      display: block;
      padding: 0;
      overflow: scroll;
      height: auto;
    }
    /deep/ .ql-snow {
      border: 0;
      overflow: scroll;
      height: auto;
    }
    /deep/ .ql-container {
      margin-top: 35px;
      display: block;
      overflow: scroll;
      height: auto;
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
    padding: 0 4%;
    background-color: #ffffff;
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
      'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
    overflow: hidden;
  }
  header {
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 100;
    backdrop-filter: blur(50px);
    align-items: center;
    height: 92px;
    width: 92%;
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
      }
    }
  }

  /deep/ .el-input__inner {
    border: 0;
    background: none;
  }

  .main {
    width: 60%;
    margin: 0 auto;
    position: relative;
    padding-bottom: 160px;
    top: 180px;
    .aside {
      width: 100%;
      height: 50px;
      margin: 0 auto;
      overflow: hidden;
      .articleCate {
        width: 100%;
      }
      a {
        display: block;
        font-size: 40px;
        font-weight: bold;
        text-decoration: none;
        color: #000000;
        width: 100%;
      }
    }
    .article {
      width: 100%;
      min-height: 1000px;
      padding: 0;
      overflow-y: scroll;
      /deep/ .ql-editor {
        margin-top: 60px;
        width: 100%;
        font-size: 15px;
        border: 0;
        display: block;
        padding: 0;
        overflow: scroll;
        height: auto;
      }
      /deep/ .ql-snow {
        border: 0;
        overflow: scroll;
        height: auto;
      }
      /deep/ .ql-container {
        display: block;
        overflow: scroll;
        height: auto;
      }
      .title {
        font-size: 28px;
        padding: 10px 0 0 0;
        display: block;
        font-weight: bold;
        margin-bottom: 25px;
      }
      .date {
        font-weight: italic;
        color: #808080;
      }
    }
  }
  .toolbar {
    width: 100%;
    height: 40px;
    .previous {
      display: block;
      padding: 20px 0 0 0;
      margin: 0;
      font-size: 20px;
      font-weight: bold;
      float: left;
    }
    .next {
      display: block;
      padding: 20px 0 0 0;
      margin: 0;
      font-size: 20px;
      font-weight: bold;
      float: right;
    }
  }

  footer {
    width: 100%;
    margin-top: 55px;
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
