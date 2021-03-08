<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订阅管理</el-breadcrumb-item>
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
          >
            <el-button
              slot="append"
              icon="el-icon-search"
            ></el-button>
          </el-input>
        </el-col>
      </el-row>

      <!-- 用户列表区域 -->
      <el-table :data="subscriberlist" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="邮箱" prop="email"></el-table-column>
        <el-table-column label="姓" prop="lastname" sortable></el-table-column>
        <el-table-column label="名" prop="fisrtname" sortable></el-table-column>
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
    return {
      // 获取用户列表的参数对象
      queryInfo: {
        query: '',
        // 当前的页数
        pagenum: 1,
        // 当前每页显示多少条数据
        pagesize: 5
      },
      subscriberlist: [],
      total: 0
    }
  },
  created() {
    this.getSubscriber()
  },
  methods: {
    async getSubscriber() {
      const { data: res } = await this.$http.get('admin/subscribers', {
        params: this.queryInfo
      })
      if (res.meta.status !== 200) {
        return this.$message.error('获取订阅者列表失败！')
      }
      this.subscriberlist = res.data.Subscribers
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
