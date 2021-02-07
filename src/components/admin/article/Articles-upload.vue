<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>内容发布</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
      <div class="articleInfo">
        <el-form
          :model="addArticleForm"
          :rules="addArticleRules"
          ref="addArticleRef"
          label-width="70px"
        >
          <el-form-item label="标题" prop="title">
            <el-input v-model="addArticleForm.title"></el-input>
          </el-form-item>
          <el-form-item label="摘要" prop="digest">
            <el-input v-model="addArticleForm.digest"></el-input>
          </el-form-item>
          <el-form :inline="true" :model="addArticleForm" class="demo-form-inline">
            <!--class-->
            <el-form-item label="Class" prop="class">
            <el-select
              v-model="addArticleForm.class"
              placeholder="请选择Class"
            >
              <el-option label="Article" value="article"></el-option>
              <el-option
                label="Collection"
                value="collection"
              ></el-option>
            </el-select>
            </el-form-item>

            <!-- cate -->
            <el-form-item label="分类" prop="cate">
            <el-select
              v-model="addArticleForm.cate"
              placeholder="请选择分类"
            >
              <el-option label="JavaScript" value="JavaScript"></el-option>
              <el-option
                label="Computer Networks"
                value="Computer Networks"
              ></el-option>
              <el-option label="HTML" value="HTML"></el-option>
              <el-option label="杂文" value="essay"></el-option>
              <el-option label="CSS" value="CSS"></el-option>
            </el-select>
            </el-form-item>
          </el-form>
          <el-form-item label="作者" prop="username">
            <el-input v-model="addArticleForm.username" disabled></el-input>
          </el-form-item>
          <div class='datepicker'>
            <el-date-picker
              v-model="addArticleForm.date"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
        </el-form>
        <el-upload
          class="upload-demo"
          action="http://localhost:8888/admin/articleImg-upload"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-success="handleSuccess"
          :before-remove="beforeRemove"
          :multiple="false"
          :limit="1"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传封面图片</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </div>
      <!-- 富文本编辑区域 -->
      <quill-editor
        ref="myQuillEditor"
        v-model="content"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)"
      />
      <!-- 搜索与添加区域 -->
      <el-row :gutter="20">
        <el-col :span="4">
          <el-button type="primary" size="small" @click="upload"
            >发表文章</el-button
          >
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor' // 调用编辑器
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      // fileList: [{ name: '', url: '' }],
      fileList: [],
      uploadSuccessUrl: '',
      uploadSuccessFileName: '',
      content: '',
      editorOption: {},
      addArticleForm: {
        title: '',
        digest: '',
        cate: '',
        username: '',
        class: '',
        date: ''
      },
      addArticleRules: {
        title: [
          { required: true, message: '请输入文章标题', trigger: 'blur' },
          {
            min: 6,
            max: 15,
            message: '标题长度在6~15个字符之间',
            trigger: 'blur'
          }
        ],
        digest: [
          { required: true, message: '请输入文章摘要', trigger: 'blur' },
          {
            min: 6,
            max: 80,
            message: '摘要长度在6~80个字符之间',
            trigger: 'blur'
          }
        ],
        cate: [
          { required: true, message: '请选择分类', trigger: 'blur' },
          { min: 3, max: 20 }
        ]
        // author: [
        //   { required: true, message: '请输入作者', trigger: 'blur' },
        //   {
        //     min: 3,
        //     max: 12,
        //     message: '作者姓名在3~12个字符之间',
        //     trigger: 'blur'
        //   }
        // ]
      }
    }
  },
  created() {
    this.getUserName()
  },
  methods: {
    getUserName() {
      this.addArticleForm.username = localStorage.getItem('username')
    },
    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {}, // 内容改变事件
    async handleRemove(file, fileList) {
      console.log(file, fileList)
      const { data: res } = await this.$http.post('/admin/articleImg-delete', {
        url: this.uploadSuccessUrl,
        filepath: file.name
      })
      if (res.meta.status !== 200) return this.$message.error('图片删除失败')
      this.uploadSuccessUrl = ''
      this.$message.success('图片删除成功！')
    },
    handlePreview(file) {
      // console.log(file)
    },
    handleExceed(files, fileList) {
      // this.$message.warning(
      //   `当前限制选择 3 个文件，本次选择了 ${
      //     files.length
      //   } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      // )
    },
    beforeRemove(file, fileList) {
      // return this.$confirm(`确定移除 ${file.name}？`)
    },
    handleSuccess(res, file) {
      console.log(res)
      console.log(file)
      this.uploadSuccessUrl = res
      this.uploadSuccessFileName = file.name
      this.$message.success('图片上传成功！')
    },
    async upload() {
      if (this.uploadSuccessUrl && this.content) {
        const { data: res } = await this.$http.post('/admin/article-upload', {
          username: this.addArticleForm.username,
          class: this.addArticleForm.cate,
          cate: this.addArticleForm.cate,
          title: this.addArticleForm.title,
          digest: this.addArticleForm.digest,
          content: this.content,
          mainImg: this.uploadSuccessUrl + this.uploadSuccessFileName,
          date: this.addArticleForm.date,
          state: 1,
          featured: 'normal'
        })
        if (res.meta.status !== 200) return this.$message.error('图片删除失败')
        this.$message.success('文章上传成功')
        this.$router.push('/admin/articles')
      } else {
        this.$message.error('请先完成文章！')
      }
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  }
}
</script>

<style lang="less" scoped>
.quill-editor {
  margin-top: 20px;
}

.articleInfo {
  margin-top: 30px;
  margin-bottom: 50px;
  border-left: 2px solid #dddddd;
}

.el-card {
  height: 530px;
  overflow-y: scroll;
}

/deep/ .ql-blank {
  min-height: 360px;
}

/deep/ .upload-demo {
  margin-left: 70px;
}

/deep/ .demo-form-inline {
  margin-left: 23px;
}

.datepicker {
  margin-left: 70px;
  margin-bottom: 20px;
}

/deep/ .ql-editor {
  height: 360px;
}

.el-button {
  margin-top: 15px;
}

/deep/ .el-card__body {
  padding-top: 0px;
}

.demo-form-inline {
  /deep/ .el-input__inner {
    width: 300px;
  }
}

.cate {
  margin-left: 40px;
}
</style>
