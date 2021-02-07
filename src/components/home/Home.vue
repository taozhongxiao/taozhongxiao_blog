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
          <li @click="toggleCollapse">
            <router-link to="/">文章</router-link>
          </li>
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
        <a v-bind:href="['http://localhost:8080/#/articles?id='+mainArticle.id]">
          <div class="mainArticle" :style="isCollapse ? 'display: none' : ''">
            <span class="mainArticleTitle">{{ mainArticle.title }}</span>
            <span class="mainArticleDigest"
              >{{ mainArticle.digest }}</span
            >
            <img v-bind:src="['http://localhost:8888/'+mainArticle.imgsrc+'/fog-3622519_1920.jpg']" alt="" class="mainArticleImage" />
          </div>
        </a>

        <div
          class="articleCateList"
          :style="!isCollapse ? 'display: none' : ''"
        >
          <ul>
            <li>html</li>
            <li>node.js</li>
            <li>JavaScript</li>
            <li>web browser</li>
            <li>css</li>
            <li>mySql</li>
            <li>jQuery</li>
            <li>webpack</li>
            <li>express</li>
            <li>data structure</li>
            <li>computer network</li>
          </ul>
        </div>
      </div>
      <!--页面主体-->
      <div class="article">
        <span>最新文章</span>
        <div class="listArticle">
          <div class="listArticleLetter">
            <span class="listArticleCate">#JavaScript</span>
            <span class="listArticleTitle">JavaScript的回调函数详解 </span>
            <span class="listArticleDigest"
              >被作为实参传入另一函数，并在该外部函数内被调用，用以来完成某些任务的函数，称为回调函数。回调函数经常被用于继续执行一个异步
              完成后的操作，它们被称为异步回调。</span
            >
          </div>
          <img src="../../assets/js.png" alt="" />
        </div>
        <div class="listArticle">
          <div class="listArticleLetter">
            <span class="listArticleCate">#JavaScript</span>
            <span class="listArticleTitle">JavaScript的回调函数详解 </span>
            <span class="listArticleDigest"
              >被作为实参传入另一函数，并在该外部函数内被调用，用以来完成某些任务的函数，称为回调函数。回调函数经常被用于继续执行一个异步
              完成后的操作，它们被称为异步回调。</span
            >
          </div>
          <img src="../../assets/js.png" alt="" />
        </div>
        <div class="listArticle">
          <div class="listArticleLetter">
            <span class="listArticleCate">#JavaScript</span>
            <span class="listArticleTitle">JavaScript的回调函数详解 </span>
            <span class="listArticleDigest"
              >被作为实参传入另一函数，并在该外部函数内被调用，用以来完成某些任务的函数，称为回调函数。回调函数经常被用于继续执行一个异步
              完成后的操作，它们被称为异步回调。</span
            >
          </div>
          <img src="../../assets/js.png" alt="" />
        </div>
        <div class="listArticle">
          <div class="listArticleLetter">
            <span class="listArticleCate">#JavaScript</span>
            <span class="listArticleTitle">JavaScript的回调函数详解 </span>
            <span class="listArticleDigest"
              >被作为实参传入另一函数，并在该外部函数内被调用，用以来完成某些任务的函数，称为回调函数。回调函数经常被用于继续执行一个异步
              完成后的操作，它们被称为异步回调。</span
            >
          </div>
          <img src="../../assets/js.png" alt="" />
        </div>
        <p class="previous">previous</p>
        <p class="next">next</p>
      </div>
    </div>

    <div class="mainMenuCollections">
      <span>collections</span>
      <div class="mainMenuCollectionContent">
        <div><img src="../../assets/collection1.png" alt="" /></div>
        <div><img src="../../assets/collection1.png" alt="" /></div>
        <div><img src="../../assets/collection1.png" alt="" /></div>
      </div>
    </div>

    <div class="more">
      <p>更多</p>
      <img src="../../assets/about.png" alt="" />
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
    return {
      isCollapse: '',
      mainQueryInfo: {
        pagesize: 1
      },
      listQueryInfo: {
        pagesize: 10,
        pagenum: 1
      },
      mainArticle: {
        title: '',
        digest: '',
        imgsrc: '',
        id: ''
      }
    }
  },
  created () {
    this.getMainArticle()
    // this.getListArticle()
  },
  methods: {
    async getMainArticle () {
      const { data: res } = await this.$http.get('/main-article', { params: this.mainQueryInfo })
      this.mainArticle.title = res.data.mainArticles[0].title
      this.mainArticle.digest = res.data.mainArticles[0].digest
      this.mainArticle.imgsrc = res.data.mainArticles[0].mainImg
      this.mainArticle.id = res.data.mainArticles[0]._id
      console.log('主文章成功')
      console.log(res)
    },
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
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
    height: 92px;
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
  }

  // /deep/ .el-icon-search {
  //   vertical-align: base;
  // }

  .main {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .aside {
      width: 45%;
      height: 553px;
      margin: 44px 0 0 0;
    }
    .article {
      width: 50%;
      height: 553px;
      margin: 44px 0 0 0;
      overflow-y: scroll;
      > span {
        width: 100%;
        display: block;
        padding: 7px 0 0 0;
        font-weight: bold;
        font-size: 20px;
        border-bottom: solid 1px #000000;
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

  .mainArticle {
    height: 553px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .mainArticleTitle {
      width: 70%;
      display: block;
      font-size: 32px;
      font-weight: bold;
      clear: both;
    }
    .mainArticleDigest {
      display: block;
      font-size: 18px;
      width: 100%;
    }
    > img {
      width: 100%;
    }
  }

  .articleCateList {
    overflow-y: scroll;
    margin: 0;
    height: 553px;
    width: 100%;
    ul {
      margin: 0;
      padding: 0;
    }
    li {
      font-size: 40px;
      font-weight: bold;
      padding: 3px 0;
      list-style: none;
    }
  }

  .listArticle {
    padding: 20px 0 20px 0;
    height: 190px;
    border-bottom: 1px solid #000000;
    display: flex;
    justify-content: space-between;
    > img {
      display: block;
      margin: 0 0 0 30px;
      // transform: translateY(-210px;);
    }
  }

  .listArticleLetter {
    width: 68%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .listArticleCate {
      display: block;
      padding: 0;
      font-size: 13px;
      font-style: italic;
      width: auto;
    }
    .listArticleTitle {
      display: block;
      font-weight: bold;
      font-size: 24px;
      padding: 0;
      width: auto;
    }
    .listArticleDigest {
      display: block;
      font-size: 14px;
      height: 62px;
      width: auto;
      margin: 0;
      overflow: hidden;
    }
  }

  .mainMenuCollections {
    width: 100%;
    border-top: 1px solid #000000;
    margin-top: 55px;
    > span {
      width: 100%;
      text-align: center;
      padding: 30px 0;
      font-size: 20px;
      font-weight: bold;
      display: block;
      clear: both;
    }
    .mainMenuCollectionContent {
      width: 100%;
      // height: 300px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 55px;
      > div {
        display: block;
        width: 30%;
        > img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
  .more {
    border-top: 1px solid #000000;
    margin-top: 55px;
    > p {
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      padding: 30px 0;
      margin: 0;
    }
    > img {
      width: 100%;
    }
  }

  footer {
    width: 100%;
    margin-top: 55px;
    border-top: solid 1px #000000;
    padding: 0;
    > p {
      padding: 20px 0;
      margin: 0;
      float: right;
      font-size: 14px;
    }
    > a {
      display: block;
      float: left;
      font-size: 14px;
      font-weight: bold;
      margin: 20px 30px 15px 0;
      color: #000000;
      text-decoration: none;
    }
    > a:hover {
      color: #808080;
    }
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
