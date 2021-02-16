import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home.vue'
import Subscribe from '../components/home/Subscribe.vue'
import Article from '../components/home/Article.vue'
import More from '../components/home/More.vue'
import Collection from '../components/home/Collection.vue'
import Login from '../components/admin/Login.vue'
import Admin from '../components/admin/Admin.vue'
import Welcome from '../components/admin/Welcome.vue'
import Users from '../components/admin/user/Users.vue'
import Articles from '../components/admin/article/Articles.vue'
import Articlesupload from '../components/admin/article/Articles-upload.vue'
import Categories from '../components/admin/article/Categories.vue'
import CollectionDetail from '../components/home/collection/Collection-detail.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/subscribe', component: Subscribe },
  { path: '/articles', component: Article },
  { path: '/more', component: More },
  { path: '/collections', component: Collection },
  { path: '/collection', component: CollectionDetail },
  { path: '/login', component: Login },
  {
    path: '/admin',
    component: Admin,
    meta: { requireAuth: true },
    redirect: 'welcome',
    children: [
      { path: '/welcome', component: Welcome, meta: { requireAuth: true } },
      { path: '/admin/users', component: Users, meta: { requireAuth: true } },
      { path: '/admin/articles', component: Articles, meta: { requireAuth: true } },
      {
        path: '/admin/articles-upload',
        component: Articlesupload,
        meta: { requireAuth: true }
      },
      { path: '/admin/categories', component: Categories, meta: { requireAuth: true } }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (to.path === '/login') {
      next()
    } else {
      const token = localStorage.getItem('Authorization')
      if (token === null || token === '') {
        next('/login')
      } else {
        next()
      }
    }
  } else {
    next()
  }
})

export default router
