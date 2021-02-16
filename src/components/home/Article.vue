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
      <!--页面边栏-->
      <div class="aside">
        <div class="articleCate">
          <router-link to="/">{{ article.cate }}</router-link>
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
        const str = url.substr(11)
        const strs = str.split('&')
        for (let i = 0; i < strs.length; i++) {
          theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
        }
      }
      return theRequest
    },
    async getDetail() {
      this.id = this.GetRequest().id
      const { data: res } = await this.$http.get('/articles', {
        params: this.id
      })
      console.log(this.id)
      console.log(res)
      if (res.meta.status !== 200) {
        return this.$message.error('获取用户列表失败！')
      }
      this.article.title = res.data.content[0].title
      this.article.digest = res.data.content[0].digest
      this.article.content = res.data.content[0].content
      this.article.date = res.data.content[0].date.substr(0, 10)
      this.article.cate = res.data.content[0].cate
      // console.log(this.article)
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
    backdrop-filter: blur(30px);
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
        // transform: translateY(2px);
      }
    }
  }

  /deep/ .el-input__inner {
    border: 0;
    background: none;
  }

  // /deep/ .el-icon-search {
  //   vertical-align: base;
  // }

  .main {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    .aside {
      width: 25%;
      height: 633px;
      position: fixed;
      top: 84px;
      left: 4%;
      margin: 60px 0 0 0;
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
      width: 65%;
      height: 633px;
      margin: 60px 0 0 0;
      padding: 92px 0 0 0;
      overflow-y: scroll;
      /deep/ .ql-editor {
        margin-top: 60px;
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
        display: block;
        overflow: scroll;
        height: auto;
      }
      .title {
        font-size: 32px;
        display: block;
        font-weight: bold;
        margin-bottom: 25px;
      }
      .date {
        font-weight: italic;
        color: #808080
      }
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
  }

  footer {
    width: 100%;
    margin-top: 35px;
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

::-webkit-scrollbar {
  display: none;
}
</style>
