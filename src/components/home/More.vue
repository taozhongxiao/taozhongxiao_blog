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
          <router-link to="/">About</router-link>
        </div>
      </div>
      <!--页面主体-->
      <div class="article">
        <span class="titleF">关于我？</span>
        <span class="content">越学越对前端感兴趣。</span>
        <span class="title">关于此网站？</span>

        <span class="content"
          >本网站涵盖前端展示、后台管理两大系统。采用flex响应式布局，适配PC端与移动端。<br /><br />
          <img src="../../assets/Kapture1.gif" /><br /><br />
          <img src="../../assets/Kapture.gif" /><br /><br />
          前端主要技术栈包括：Vue.js, Element, HTML5, CSS,
          JavaScript。后端技术栈主要为Node.js,
          express框架。数据库为MongoDB。轻量应用服务器和域名通过腾讯云购买。<br /><br />具体特性包括：博客分类管理、文章快捷修改、跨域资源请求配置、图片上传与删除、Quill富文本编辑与前端渲染、路由守卫、用户密码加密等。<br /><br />这是我独立完成的第一个项目，周期为2021/01/27-2021/02/25，其中完全投入时间约3周。<br /><br />源码请参考：<a href="https://github.com/taozhongxiao/taozhongxiao_blog">GitHub</a>。</span
        >
        <span class="title">致谢</span>
        <span class="content"
          >技术问题的最佳建议来自：<a href="https://stackoverflow.com/"
            >Stack Overflow</a
          >、<a href="https://github.com/"
            >GitHub</a
          >、<a href="https://segmentfault.com/">SegmentFault 思否</a>、<a
            href="https://www.csdn.net/"
            >CSDN</a
          >。<br /><br />UI设计的最佳建议来自：<a href="https://abduzeedo.com/"
            >abdz</a
          >、<a href="https://www.wix.com/blog/creative">WIX Creative</a>、
          <a href="https://blogonyourown.com/">BOYO</a>。</span
        >
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
export default {}
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
    margin-bottom: 40px;
    font-size: 15px;
    .aside {
      margin-top: 5vh;
      .articleCate {
        a {
          font-size: 24px;
          font-weight: bold;
        }
      }
    }
    .title {
      font-size: 24px;
      display: block;
      font-weight: bold;
      padding-top: 5vh;
      padding-bottom: 15px;
      color: #000000;
    }
    img {
      width: 100%;
    }
    .article {
      color: #808080;
      a {
        color: #808080;
        text-decoration: underline;
      }
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
    min-height: 735px;
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

  .main {
    width: 100%;
    display: flex;
    min-height: 100vh;
    justify-content: flex-end;
    overflow-y: scroll;
    .aside {
      width: 25%;
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
      padding: 0;
      height: 88vh;
      overflow-y: scroll;
      a {
        color: #808080;
        text-decoration: underline;
      }
      img {
        width: 75%;
      }
      .titleF {
        font-size: 20px;
        display: block;
        font-weight: bold;
        margin-bottom: 25px;
        padding: 190px 0 0 0;
      }
      .title {
        font-size: 20px;
        display: block;
        font-weight: bold;
        margin-bottom: 25px;
      }
      .content {
        display: block;
        font-weight: italic;
        color: #808080;
        margin-bottom: 50px;
      }
    }
  }

  footer {
    width: 92%;
    margin-top: 55px;
    position: fixed;
    bottom: 0;
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
