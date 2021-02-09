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
        <a
          v-bind:href="[
            'http://localhost:8080/#/articles?id=' + mainArticle.id
          ]"
        >
          <div class="mainArticle" :style="isCollapse ? 'display: none' : ''">
            <span class="mainArticleTitle">{{ mainArticle.title }}</span>
            <span class="mainArticleDigest">{{ mainArticle.digest }}</span>
            <img
              v-bind:src="[
                'http://localhost:8888/' +
                  mainArticle.imgsrc +
                  '/fog-3622519_1920.jpg'
              ]"
              alt=""
              class="mainArticleImage"
            />
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

    <!-- collections-->
    <div class="mainMenuCollections">
      <!--photography-->
      <div class="mainMenuPhotography">
        <div>
          <img src="../../assets/1-edit.png" alt="" />
          <a href="http://localhost:8080/collections?cate=photography">
            <span>
              Photography
            </span>
          </a>
        </div>
      </div>

      <!--visual design-->
      <div class="mainMenuDesign">
        <div class="title">
          <img src="../../assets/4-edit.png" alt="" />
        </div>
        <div class="digest">
          2015年至今，我的海报、Powerpoint
          设计产出，以及收藏的设计类文章与素材合辑
        </div>
        <div class="text">
          <a href="http://localhost:8080/collections?cate=visual-design">
            <span>Visual<br />Design</span>
          </a>
        </div>
      </div>

      <!--可视化-->
      <div class="mainMenuData">
        <div class="dataText">
          <a href="http://localhost:8080/collections?cate=data-visualization">
            <span>Data<br />Visualization</span>
          </a>
        </div>
        <div class="dataDigest">
          2019年至今，我使用 Python
          完成的数据分析作业，以及在数据咨询公司的工作成果合辑
        </div>
        <div class="hollow">
          <img src="../../assets/3-edit.png" alt="" />
        </div>
      </div>
    </div>

    <div class="more">
      <img src="../../assets/about.png" alt="" />
      <a href="http://localhost:8080/more">
        <span>About<br />更多</span>
      </a>
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
      <a class="identity" href="http://beian.miit.gov.cn/" target="_blank"
        >鄂ICP备2021002553号</a
      >
      <p>Hosted by <b>taozhongxiao</b></p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
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
  created() {
    this.getMainArticle()
    // this.getListArticle()
  },
  methods: {
    async getMainArticle() {
      const { data: res } = await this.$http.get('/main-article', {
        params: this.mainQueryInfo
      })
      this.mainArticle.title = res.data.mainArticles[0].title
      this.mainArticle.digest = res.data.mainArticles[0].digest
      this.mainArticle.imgsrc = res.data.mainArticles[0].mainImg
      this.mainArticle.id = res.data.mainArticles[0]._id
      console.log('主文章成功')
      console.log(res)
    },
    toggleCollapse() {
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

  .mainMenuCollections {
    width: 100%;
    border-top: 1px solid #000000;
    margin-top: 60px;
    > span {
      width: 100%;
      text-align: center;
      padding: 50px 0;
      font-size: 20px;
      font-weight: bold;
      display: block;
      clear: both;
    }
  }

  .mainMenuPhotography {
    width: 100%;
    margin-bottom: 85px;
    overflow: hidden;
    div {
      width: 100%;
      margin-top: 55px;
      overflow: hidden;
      height: auto;
      position: relative;
    }
    section {
      // position: relative;
      // left: 65%;
      // top: 80px;
      span {
        width: 20%;
      }
    }
    img {
      width: 100%;
      transition: all 0.6s;
    }
    span {
      display: none;
      font-size: 60px;
      font-weight: bold;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    img:hover {
      opacity: 0.3;
      transform: scale(1.2);
      transition: all 0.6s;
    }
    span:hover img {
      opacity: 0.3;
      transform: scale(1.2);
      transition: all 0.6s;
    }
    div:hover span {
      display: block;
    }
  }

  .mainMenuDesign {
    display: flex;
    justify-content: space-between;
    height: auto;
    overflow: hidden;
    width: 100%;
    position: relative;
    min-height: 460px;
    .title {
      width: 53%;
      height: 100%;
      img {
        width: 100%;
        transition: all 0.3s;
      }
    }
    .text {
      width: 22%;
      margin-top: 27%;
      transition: all 0.3s;
      span {
        display: block;
        font-size: 60px;
        font-weight: bold;
        text-align: right;
        transition: all 0.3s;
      }
    }
    .digest {
      font-size: 18px;
      width: 22%;
      height: 75px;
      padding-bottom: 15px;
      text-align: left;
      margin-top: 22%;
      transition: all 0.3s;
      border: 0;
    }
  }
  .mainMenuDesign:hover .text {
    margin-top: 5%;
    transition: all 0.2s linear 0s;
  }
  .mainMenuDesign:hover .digest {
    // position: absolute;
    // right: 0;
    transform: translateX(100%);
    border-bottom: 1px solid #000000;
    padding-bottom: 15px;
    transition: all 0.3s;
    text-align: right;
  }
  .mainMenuDesign:hover img {
    transform: scale(1.2);
    transition: all 0.6s;
  }

  .mainMenuData {
    display: flex;
    justify-content: space-between;
    height: auto;
    overflow: hidden;
    width: 100%;
    position: relative;
    min-height: 460px;
    margin-top: 85px;
    transition: all 0.6s;
  }
  .dataText {
    width: 15%;
    transition: all 0.3s;
    margin-top: 0%;
    margin-top: 2.5%;
    span {
      display: block;
      font-size: 50px;
      font-weight: bold;
      text-align: left;
      transition: all 0.6s;
    }
  }
  .dataDigest {
    font-size: 18px;
    width: 22%;
    text-align: left;
    margin-top: 23%;
    transition: all 0.6s;
    padding-top: 15px;
  }
  .hollow {
    // margin-top: 500px;
    width: 60%;
    height: 500px;
    overflow: hidden;
    // box-shadow: 0px 0px 0px 100px #ffffff;
    img {
      position: relative;
      width: 1000px;
      transform: translateX(0);
      opacity: 0.8;
      transition: all 0.6s;
      // height: 500px #E3DFD2;
    }
  }
}
.mainMenuData:hover img {
  transform: translateX(-210px);
  transition: all 0.6s;
}
.mainMenuData:hover .dataDigest {
  transform: translateX(-75%);
  transition: all 0.6s;
  border-top: 1px solid #000000;
}
.mainMenuData:hover .dataText {
  margin-top: 7.5%;
  transition: all 0.3s;
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

.more {
  margin-top: 60px;
  border-top: 1px solid #000000;
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  img {
    width: 80%;
    margin-top: 60px;
    transition: all 0.6s;
  }
  a {
    margin-top: 60px;
    display: block;
    span {
      font-size: 60px;
      font-weight: bold;
      text-align: right;
    }
  }
}
.more:hover img {
  width: 100%;
  transition: all 0.6s;
}
.more:hover a {
  color: #ffffff;
  transform: translateX(-200px);
  position: relative;
}

footer {
  width: 100%;
  margin-top: 55px;
  border-top: solid 1px #000000;
  padding: 0;
  > p {
    padding: 20px 0;
    display: block;
    float: right;
    margin: 0;
    font-size: 14px;
  }
  > a {
    display: block;
    font-size: 14px;
    float: left;
    font-weight: bold;
    margin: 20px 30px 15px 0;
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
    margin: 20px 0 15px 0;
    font-size: 14px;
    font-weight: bold;
  }
  > a:hover {
    color: #808080;
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
