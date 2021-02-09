<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>类别管理</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- article分类区域 -->
    <div class="article">
      <h2>Article</h2>
      <div class="articleCate">
        <el-tag
          :key="tag.cate"
          v-for="tag in dynamicTags.article"
          closable
          :disable-transitions="false"
          @close="handleArticleClose(tag)"
        >
          {{ tag.cate }}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputArticleVisible"
          v-model="inputArticleValue"
          ref="saveArticleTagInput"
          size="small"
          @keyup.enter.native="handleArticleInputConfirm"
          @blur="handleArticleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showArticleInput"
          >+ New Tag</el-button
        >
      </div>
    </div>
    <!-- collection -->
    <div class="collection">
      <h2>Collection</h2>
      <div class="collectionCate">
        <el-tag
          :key="tag.cate"
          v-for="tag in dynamicTags.collection"
          closable
          :disable-transitions="false"
          @close="handleCollectionClose(tag)"
        >
          {{ tag.cate }}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputCollectionVisible"
          v-model="inputCollectionValue"
          ref="saveCollectionTagInput"
          size="small"
          @keyup.enter.native="handleCollectionInputConfirm"
          @blur="handleCollectionInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showCollectionInput"
          >+ New Tag</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicTags: {
        article: [],
        collection: []
      },
      inputArticleVisible: false,
      inputArticleValue: '',
      inputCollectionVisible: false,
      inputCollectionValue: ''
    }
  },
  created() {
    this.getTag()
  },
  methods: {
    async getTag() {
      const { data: res } = await this.$http.get('/admin/cate')
      console.log(res)
      this.dynamicTags.article = res.data.cates.filter(
        item => item.class === 'article'
      )
      this.dynamicTags.collection = res.data.cates.filter(
        item => item.class === 'collection'
      )
      if (res.meta.status !== 200) return this.$message.error('分类获取失败')
    },
    async handleArticleClose(tag) {
      const { data: res } = await this.$http.post('/admin/cate-delete', { cate: tag.cate, class: 'article' })
      // this.dynamicTags.article.remove(tag)
      if (res.meta.status !== 200) return this.$message.error('分类删除失败')
      this.getTag()
      this.dynamicTags.article.splice(this.dynamicTags.article.indexOf(tag), 1)
    },
    showArticleInput() {
      this.inputArticleVisible = true
      this.$nextTick(_ => {
        this.$refs.saveArticleTagInput.$refs.input.focus()
      })
    },
    async handleArticleInputConfirm() {
      const inputValue = this.inputArticleValue
      if (inputValue) {
        const { data: res } = await this.$http.post('/admin/cate-add', { cate: inputValue, class: 'article' })
        // this.dynamicTags.article.push(inputValue)
        if (res.meta.status !== 200) return this.$message.error('分类添加失败')
        this.getTag()
      }
      this.inputArticleVisible = false
      this.inputArticleValue = ''
    },

    async handleCollectionClose(tag) {
      const { data: res } = await this.$http.post('/admin/cate-delete', { cate: tag.cate, class: 'collection' })
      // this.dynamicTags.article.remove(tag)
      if (res.meta.status !== 200) return this.$message.error('分类删除失败')
      this.getTag()
      this.dynamicTags.collection.splice(this.dynamicTags.collection.indexOf(tag), 1)
    },
    showCollectionInput() {
      this.inputCollectionVisible = true
      this.$nextTick(_ => {
        this.$refs.saveCollectionTagInput.$refs.input.focus()
      })
    },
    async handleCollectionInputConfirm() {
      const inputValue = this.inputCollectionValue
      if (inputValue) {
        const { data: res } = await this.$http.post('/admin/cate-add', { cate: inputValue, class: 'collection' })
        // this.dynamicTags.article.push(inputValue)
        if (res.meta.status !== 200) return this.$message.error('分类添加失败')
        this.getTag()
      }
      this.inputCollectionVisible = false
      this.inputCollectionValue = ''
    }
  }
}
</script>
Í
<style lang="less" scoped>
.article {
  h2 {
    padding-top: 20px;
    padding-bottom: 15px;
  }
}
.collection {
  h2 {
    padding-top: 40px;
    padding-bottom: 15px;
  }
}
.articleCate {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
  /deep/ .el-tag {
    margin-right: 15px;
    margin-bottom: 15px;
  }
  /deep/ .button-new-tag {
    margin-right: 15px;
    margin-bottom: 15px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  /deep/ .input-new-tag {
    width: 90px;
    margin-right: 15px;
    vertical-align: bottom;
  }
}
.collectionCate {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
  /deep/ .el-tag {
    margin-right: 15px;
    margin-bottom: 15px;
  }
  /deep/ .button-new-tag {
    margin-right: 15px;
    margin-bottom: 15px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  /deep/ .input-new-tag {
    width: 90px;
    margin-right: 15px;
    vertical-align: bottom;
  }
}
</style>
