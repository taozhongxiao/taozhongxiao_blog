<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
      <!-- 搜索与添加区域 -->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input
            placeholder="请输入内容"
            v-model="queryInfo.query"
            clearable
            @clear="getArticleList"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="getArticleList"
            ></el-button>
          </el-input>
        </el-col>
        <!-- <el-col :span="4">
          <el-button type="primary" @click="addDialogVisible = true">添加用户</el-button>
        </el-col> -->
      </el-row>

      <!-- 用户列表区域 -->
      <el-table :data="articlelist" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column
          label="标题"
          prop="title"
          width="260px"
        ></el-table-column>
        <el-table-column
          label="Class"
          prop="class"
          :filters="[
            { text: 'article', value: 'article' },
            { text: 'collection', value: 'collection' }
          ]"
          :filter-method="filterTag"
        ></el-table-column>
        <el-table-column label="分类" prop="cate"></el-table-column>
        <el-table-column label="日期" width="220px" prop="date" sortable></el-table-column>
        <el-table-column label="精选" width="120px">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.featured"
              @change="articleStateChanged(scope.row)"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="140px">
          <template slot-scope="scope">
            <!-- 修改按钮 -->
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="editArticleById(scope.row._id)"
            ></el-button>
            <!-- 删除按钮 -->
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="removeArticleById(scope.row._id)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    // 验证邮箱的规则
    var checkEmail = (rule, value, cb) => {
      // 验证邮箱的正则表达式
      const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/

      if (regEmail.test(value)) {
        // 合法的邮箱
        return cb()
      }

      cb(new Error('请输入合法的邮箱'))
    }

    // 验证手机号的规则
    var checkMobile = (rule, value, cb) => {
      // 验证手机号的正则表达式
      const regMobile = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/

      if (regMobile.test(value)) {
        return cb()
      }

      cb(new Error('请输入合法的手机号'))
    }

    var checkPassword = (rule, value, cb) => {
      // 验证密码的正则表达式
      const regPassword = /^[a-zA-Z0-9]{6,15}$/

      if (regPassword.test(value)) {
        return cb()
      }

      cb(new Error('密码为6-15位大、小写字母和数字'))
    }

    return {
      // 获取用户列表的参数对象
      queryInfo: {
        query: '',
        // 当前的页数
        pagenum: 1,
        // 当前每页显示多少条数据
        pagesize: 5
      },
      articlelist: [],
      total: 0,
      // 控制添加用户对话框的显示与隐藏
      addDialogVisible: false,
      // 添加用户的表单数据
      addForm: {
        username: '',
        password: '',
        email: '',
        mobile: '',
        role: 'admin',
        state: 0
      },
      // 添加表单的验证规则对象
      addFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 3,
            max: 12,
            message: '用户名的长度在3~12个字符之间',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            validator: checkPassword,
            trigger: 'blur'
          }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { validator: checkEmail, trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ]
      },
      // 控制修改用户对话框的显示与隐藏
      editDialogVisible: false,
      // 查询到的用户信息对象
      editForm: {},
      // 修改表单的验证规则对象
      editFormRules: {
        email: [
          { required: true, message: '请输入用户邮箱', trigger: 'blur' },
          { validator: checkEmail, trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入用户手机号码', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ]
      },
      // 控制分配角色对话框的显示与隐藏
      setRoleDialogVisible: false,
      // 需要被分配角色的用户信息
      userInfo: {},
      // 所有角色的数据列表
      rolesList: [],
      // 已选中的角色Id值
      selectedRoleId: ''
    }
  },
  created() {
    this.getArticleList()
  },
  methods: {
    async getArticleList() {
      const { data: res } = await this.$http.get('admin/articles', {
        params: this.queryInfo
      })
      if (res.meta.status !== 200) {
        return this.$message.error('获取文章列表失败！')
      }
      this.articlelist = res.data.Articles
      this.total = res.data.count
    },
    // 监听 pagesize 改变的事件
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize
      this.getArticleList()
    },
    // 监听 页码值 改变的事件
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage
      this.getArticleList()
    },
    // 监听 switch 开关状态的改变
    async articleStateChanged(articleInfo) {
      const { data: res } = await this.$http.get('/admin/articles-feature-update', { params: { featured: !!articleInfo.featured, id: articleInfo._id } })
      if (res.meta.status !== 200) {
        articleInfo.featured = !articleInfo.featured
        return this.$message.error('更新用户状态失败！')
      }
      this.$message.success('已更新精选状态！')
      this.getArticleList()
    },
    // 修改文章信息并提交
    editArticleById (id) {
      this.$router.push('/admin/articles-upload?id=' + id)
    },
    // 根据Id删除对应的文章信息
    async removeArticleById(id) {
      // 弹框询问用户是否删除数据
      const confirmResult = await this.$confirm(
        '此操作将永久删除该文章, 是否继续?',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).catch(err => err)
      if (confirmResult !== 'confirm') {
        return this.$message.info('已取消删除')
      }
      const { data: res } = await this.$http.delete('/admin/article-delete', {
        params: { id: id }
      })
      if (res.meta.status !== 200) {
        return this.$message.error('删除文章失败！')
      }
      this.$message.success('删除文章成功！')
      this.getArticleList()
    },
    filterTag(value, row) {
      return row.tag === value
    }
  }
}
</script>

<style lang="less" scoped>
.el-card {
  height: 520px;
  overflow-y: scroll;
}
</style>
