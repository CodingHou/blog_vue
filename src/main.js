// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import markdown from './markdown/index'
import {get, post} from './components/axiosHttp'

// 引入markdown富文本组件
Vue.component('markdown', markdown)

Vue.config.productionTip = false

Vue.prototype.axios = axios
Vue.prototype.$get = get
Vue.prototype.$post = post

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
