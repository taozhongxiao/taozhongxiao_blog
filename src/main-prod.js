import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'
import './assets/font/iconfont.css'
import NProgress from 'nprogress'

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8888'

axios.interceptors.request.use((config) => {
  NProgress.start()
  const token = localStorage.getItem('token') || ''
  if (token) {
    config.headers.Authorization = 'Bearer ' + token
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  NProgress.done()
  return response
}, error => {
  if (error.response.status === 422) {
    Vue.prototype.$message({
      type: 'error',
      message: error.response.data.message
    })
  }
  if (error.response.status === 401) {
    router.push('/login')
  }
  return Promise.reject(error)
})

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
