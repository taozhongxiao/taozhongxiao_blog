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
      <div class="collectionFilter" v-bind:style="{ display: showFilter }">
        <el-form :inline="true" :model="queryInfo" class="demo-form-inline">
          <el-form-item label="时间">
            <el-select v-model="queryInfo.time" placeholder="请选择">
              <el-option label="2021" value="2021"></el-option>
              <el-option label="2020" value="2020"></el-option>
              <el-option label="2019" value="2019"></el-option>
              <el-option label="2018" value="2018"></el-option>
              <el-option label="2017" value="2017"></el-option>
              <el-option label="2016" value="2016"></el-option>
              <el-option label="2015" value="2015"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="分类">
            <el-select v-model="queryInfo.cate" placeholder="请选择">
              <el-option label="photography" value="photography"></el-option>
              <el-option label="visual design" value="visual design"></el-option>
              <el-option label="data visualization" value="data visualization"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" size="mini">筛选</el-button>
          </el-form-item>
        </el-form>
      </div>

      <div class="Collections">
        <div class="CollectionContent" v-for="item in collections" :key="item._id">
          <a v-bind:href="['http://localhost:8080/#/collection?id=' + item._id]">
            <div><img v-bind:src="['http://localhost:8888/' + item.mainImg]" alt="" /></div>
            <span>{{ item.title }}</span>
            <span>{{ item.date.substr(0, 10) }}</span>
          </a>
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
export default {
  data() {
    return {
      queryInfo: {
        time: '',
        cate: ''
      },
      collections: {
        _id: '',
        title: '',
        date: '',
        mainImg: ''
      },
      showFilter: 'block'
    }
  },
  created () {
    this.getCollection()
  },
  watch: {
    $route(to, from) {
      this.queryInfo.date = ''
      this.queryInfo.cate = ''
      this.showFilter = 'block'
      this.getCollection()
    }
  },
  methods: {
    GetRequest () {
      const url = window.location.hash // 获取url中"?"符后的字串Request = GetRequest()
      const theRequest = []
      if (url.indexOf('?') !== -1) {
        const str = url.substr(14)
        const strs = str.split('&')
        for (let i = 0; i < strs.length; i++) {
          theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
        }
      }
      return theRequest
    },
    async getCollection () {
      const newCate = this.GetRequest().cate
      console.log(newCate)
      const that = this
      if (newCate) {
        that.queryInfo.cate = newCate
        that.queryInfo.date = ''
        that.showFilter = 'none'
      }
      const { data: res } = await this.$http.get('/collections', {
        params: this.queryInfo
      })
      this.collections = res.data.collections
      // this.collections.date = this.collections.date.toString()
      // console.log(this.collections.date)
      // this.collections.date = this.collections.date.substr(0, 10)
      console.log(this.collections)
    },
    onSubmit () {
      this.getCollection()
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

  /deep/ .el-icon-caret-right {
    transition: none !important;
  }

  /deep/ .el-icon-search {
    vertical-align: base;
  }

  .main {
    width: 100%;
    margin-top: 60px;
  }
  .collectionFilter {
    width: auto;
    margin: 50px auto;
    .el-form {
      width: 580px;
      display: flex;
      justify-content: center;
      margin: 0 auto;
      .el-form-item:nth-child(3n+1) {
        width: 250px;
        margin-bottom: 0;
      }
      .el-form-item:nth-child(3n+2) {
        width: 250px;
        margin-bottom: 0;
      }
      .el-form-item:nth-child(3n+3) {
        width: 46px;
        margin-bottom: 0;
        .el-button {
          height: 28px;
        }
      }
    }
    /deep/ .el-input__inner {
      border-top: 0;
      border-bottom: 1px solid #000000;
      border-left: 0;
      border-right: 0;
      border-radius: 0;
      padding: 0;
      width: 200px;
      height: 30px;
    }
    /deep/ .el-button--primary {
      background-color: #000000;
      border: 0;
    }
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
    justify-content: flex-start;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .CollectionContent:nth-child(3n+3) {
      width: 30%;
      padding: 0;
      margin-bottom: 45px;
      a {
        text-decoration: none;
        color: #000000;
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
    .CollectionContent:nth-child(3n+1) {
      width: 30%;
      padding-right: 5%;
      margin-bottom: 45px;
      a {
        text-decoration: none;
        color: #000000;
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
    .CollectionContent:nth-child(3n+2) {
      width: 30%;
      padding-right: 5%;
      margin-bottom: 45px;
      a {
        text-decoration: none;
        color: #000000;
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
