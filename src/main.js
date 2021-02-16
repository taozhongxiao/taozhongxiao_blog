import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/font/iconfont.css'

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8888'

// Add a request interceptor
axios.interceptors.request.use((config) => {
  // Do something before request is sent
  const token = localStorage.getItem('token') || ''
  if (token) {
    config.headers.Authorization = 'Bearer ' + token
  }
  return config
}, (error) => {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use((response) => {
  // Do something with response data
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
  // Do something with response error
  return Promise.reject(error)
})

// axios.interceptors.request.use(
//   config => {
//     if (localStorage.getItem('Authorization')) {
//       config.headers.Authorization = localStorage.getItem('Authorization')
//     }
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   })

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
