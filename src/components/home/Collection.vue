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
      <!--页面主体filter-->
      <div class="collectionFilter">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="时间">
            <el-select placeholder="false">
              <el-option label="2020" value="shanghai"></el-option>
              <el-option label="2019" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="分类">
            <el-select>
              <el-option
                label="Data Visualization"
                value="shanghai"
              ></el-option>
              <el-option label="Visual design" value="beijing"></el-option>
              <el-option label="Photography" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="mini">筛选</el-button>
          </el-form-item>
        </el-form>
      </div>

      <div class="Collections">
        <div class="CollectionContent">
          <div><img src="../../assets/collection1.png" alt="" /></div>
          <span>Python数据可视化的魅力</span>
          <span>April 24, 2019</span>
        </div>
        <div class="CollectionContent">
          <div><img src="../../assets/collection1.png" alt="" /></div>
          <span>Python数据可视化的魅力</span>
          <span>April 24, 2019</span>
        </div>
        <div class="CollectionContent">
          <div><img src="../../assets/collection1.png" alt="" /></div>
          <span>Python数据可视化的魅力</span>
          <span>April 24, 2019</span>
        </div>
        <div class="CollectionContent">
          <div><img src="../../assets/collection1.png" alt="" /></div>
          <span>Python数据可视化的魅力</span>
          <span>April 24, 2019</span>
        </div>
        <div class="CollectionContent">
          <div><img src="../../assets/collection1.png" alt="" /></div>
          <span>Python数据可视化的魅力</span>
          <span>April 24, 2019</span>
        </div>
        <div class="CollectionContent">
          <div><img src="../../assets/collection1.png" alt="" /></div>
          <span>Python数据可视化的魅力</span>
          <span>April 24, 2019</span>
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
    border-top: 0;
    border-bottom: 2px solid #000000;
    border-left: 0;
    border-right: 0;
    border-radius: 0;
    padding: 0;
  }

  // /deep/ .el-icon-search {
  //   vertical-align: base;
  // }

  .main {
    width: 100%;
    margin-top: 60px;
  }
  .collectionFilter {
    width: 100%;
    margin: 40px auto;
    display: flex;
    justify-content: center;
    .demo-form-inline {
      display: block;
      > el-form-item {
        margin: 0 40px;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
  .Collections {
    display: flex;
    justify-content: space-between;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .CollectionContent {
      width: 30%;
      margin-bottom: 45px;
      span:nth-child(2) {
        display: block;
        width: 100%;
        padding: 15px 0 0 0;
        font-size: 16px;
        text-align: center;
      }
      span:nth-child(3) {
        display: block;
        width: 100%;
        padding: 10px 0 0 0;
        font-size: 12px;
        text-align: center;
      }
      > div {
        display: block;
        width: 100%;
        > img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
  footer {
    width: 100%;
    margin-top: 10px;
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
