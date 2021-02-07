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
          <router-link to="/">About</router-link>
        </div>
      </div>
      <!--页面主体-->
      <div class="article">
        <span>JavaScript的回调函数详解</span>
        <span
          >被作为实参传入另一函数，并在该外部函数内被调用，用以来完成某些任务的函数，称为回调函数。回调函数经常被用于继续执行一个异步
          完成后的操作，它们被称为异步回调。</span
        >
        <div><img src="../../assets/collection1.png" alt="" /></div>
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
export default {}
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
      width: 25%;
      height: 553px;
      margin: 60px 0 0 0;
      overflow: hidden;
      .articleCate {
        width: 100%;
      }
      a {
        display: block;
        font-size: 60px;
        font-weight: bold;
        text-decoration: none;
        color: #000000;
        width: 100%;
      }
    }
    .article {
      width: 65%;
      height: 553px;
      margin: 60px 0 0 0;
      padding: 0;
      overflow-y: scroll;
      :nth-child(1) {
        width: 100%;
        display: block;
        padding: 0 0 25px 0;
        font-weight: bold;
        font-size: 30px;
      }
      :nth-child(2) {
        width: 100%;
        display: block;
        padding: 10px 0 50px 0;
        font-size: 18px;
      }
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

::-webkit-scrollbar {
  display: none;
}
</style>
