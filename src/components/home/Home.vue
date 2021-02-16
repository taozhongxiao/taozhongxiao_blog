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
        <el-carousel
          indicator-position="none"
          class="carousel"
          interval="10000"
          height="583px"
          :style="isCollapse ? 'display: none' : ''"
        >
          <el-carousel-item
            v-for="item in mainArticle"
            :key="item"
            class="carouselItem"
            height="583px"
          >
            <a
              v-bind:href="['http://localhost:8080/#/articles?id=' + item._id]"
            >
              <div class="mainArticle">
                <span class="mainArticleTitle">{{ item.title }}</span>
                <span class="mainArticleDigest">{{ item.digest }}</span>
                <img
                  v-bind:src="['http://localhost:8888/' + item.mainImg]"
                  alt=""
                  class="mainArticleImage"
                />
              </div>
            </a>
          </el-carousel-item>
        </el-carousel>

        <!--页面边栏cate-->
        <div
          class="articleCateList"
          :style="!isCollapse ? 'display: none' : ''"
        >
          <ul>
            <li v-for="item in cateList" :key="item.cate" @click="showList(item.cate)">
              <a
                v-bind:href="[
                  'http://localhost:8080/#/'
                ]"
                >{{ item.cate }}</a
              >
            </li>
          </ul>
        </div>
      </div>
      <!--页面主体-->
      <div class="article">
        <p>最新文章</p>
        <div class="listArticle" v-for="item in listArticle" :key="item._id">
          <a v-bind:href="['http://localhost:8080/#/articles?id=' + item._id]">
            <div class="listArticleLetter">
              <span class="listArticleCate">#{{ item.cate }}</span>
              <span class="listArticleTitle">{{ item.title }}</span>
              <span class="listArticleDigest">{{ item.digest }}</span>
            </div>
            <img
              v-bind:src="['http://localhost:8888/' + item.mainImg]"
              alt=""
            />
          </a>
        </div>
        <a class="previous" @click="previous" v-bind:style="{ display: showPrevious }">previous</a>
        <a class="next" @click="next" v-bind:style="{ display: showNext }">next</a>
      </div>
    </div>

    <!-- collections-->
    <div class="mainMenuCollections">
      <!--photography-->
      <div class="mainMenuPhotography">
        <div>
          <img src="../../assets/1-edit.png" alt="" />
          <a href="http://localhost:8080/#/collections?cate=photography">
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
          <a href="http://localhost:8080/#/collections?cate=visual design">
            <span>Visual<br />Design</span>
          </a>
        </div>
      </div>

      <!--可视化-->
      <div class="mainMenuData">
        <div class="dataText">
          <a href="http://localhost:8080/#/collections?cate=data visualization">
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
      <a href="http://localhost:8080/#/more">
        <span>About<br />更多</span>
      </a>
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
  data() {
    return {
      isCollapse: '',
      mainQueryInfo: {
        pagesize: 3,
        pagenum: 1,
        featured: true,
        cate: ''
      },
      listQueryInfo: {
        pagesize: 6,
        pagenum: 1,
        featured: false,
        cate: ''
      },
      mainArticle: {
        title: '',
        digest: '',
        imgsrc: '',
        _id: ''
      },
      listArticle: {
        title: '',
        digest: '',
        mainImg: '',
        _id: ''
      },
      cateList: [],
      showPrevious: 'none',
      showNext: 'block',
      total: 0
    }
  },
  created () {
    this.getMainArticle()
    this.getListArticle()
    this.getTag()
    // this.getListArticle()
  },
  methods: {
    async getMainArticle() {
      const { data: res } = await this.$http.get('/main-article', {
        params: this.mainQueryInfo
      })
      // this.mainArticle.title = res.data.mainArticles[0].title
      // this.mainArticle.digest = res.data.mainArticles[0].digest
      // this.mainArticle.mainImg = res.data.mainArticles[0].mainImg
      // this.mainArticle.id = res.data.mainArticles[0]._id
      this.mainArticle = res.data.homeArticles
      console.log('获取左侧主文章成功')
      console.log(res)
      // console.log(this.mainArticle.mainImg)
    },
    async getListArticle() {
      const { data: res } = await this.$http.get('/main-article', {
        params: this.listQueryInfo
      })
      this.listArticle = res.data.homeArticles
      this.total = res.data.total
      const that = this
      if (that.listQueryInfo.pagenum === 1 && that.total !== 1) {
        that.showPrevious = 'none'
        that.showNext = 'block'
      } else if (that.listQueryInfo.pagenum === that.total) {
        that.showNext = 'none'
      } else {
        that.showNext = 'block'
      }
      console.log('获取右侧文章列表成功')
      console.log(res)
    },
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
      console.log(this.isCollapse)
      this.listQueryInfo.cate = ''
      const that = this
      if (that.isCollapse === false) {
        that.getListArticle()
      }
    },
    async getTag() {
      const { data: res } = await this.$http.get('/admin/cate')
      console.log(res)
      this.cateList = res.data.cates.filter(item => item.class === 'article')
      console.log(this.cateList)
      if (res.meta.status !== 200) return this.$message.error('分类获取失败')
    },
    previous () {
      this.listQueryInfo.pagenum -= 1
      this.getListArticle()
    },
    next () {
      this.listQueryInfo.pagenum += 1
      this.getListArticle()
      this.showPrevious = 'block'
    },
    async showList (cate) {
      this.listQueryInfo.cate = cate
      this.getListArticle()
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
      height: 583px;
      margin: 44px 0 0 0;
    }
    .article {
      width: 50%;
      height: 583px;
      margin: 44px 0 0 0;
      overflow-y: scroll;
      > p {
        width: 100%;
        margin-bottom: 0;
        display: block;
        padding: 7px 0 0 0;
        font-weight: bold;
        font-size: 20px;
        border-bottom: solid 1px #000000;
      }
      .listArticle {
        padding: 20px 0 20px 0;
        height: 190px;
        width: 100%;
        border-bottom: 1px solid #000000;
        display: flex;
        justify-content: space-between;
        a {
          // padding: 20px 0 20px 0;
          height: 190px;
          width: 100%;
          // border-bottom: 1px solid #000000;
          display: flex;
          justify-content: space-between;
          img {
            display: block;
            margin: 0 0 0 0;
            width: 30%;
            min-width: 190px;
            height: auto;
            // transform: translateY(-210px;);
          }
          .listArticleLetter {
            width: 65%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .listArticleCate {
              display: block;
              padding: 0;
              font-size: 13px;
              // font-style: italic;
              width: 100%;
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
        }
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
  height: 583px;
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
  a:nth-child(4) {
    display: block;
    font-size: 14px;
    float: left;
    margin: 20px 30px 15px 0;
    color: #000000;
    text-decoration: none;
  }
  a:nth-child(2) {
    display: block;
    font-size: 19px;
    transform: translateY(0.5px);
    float: left;
    margin: 20px 30px 15px 0;
    color: #000000;
    text-decoration: none;
  }
  a {
    display: block;
    font-size: 18px;
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
