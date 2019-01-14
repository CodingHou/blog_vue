import Vue from 'vue'
import Router from 'vue-router'
import editBlog from '@/components/editBlog'
import HelloWorld2 from '@/components/HelloWorld2'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'




Vue.use(Router)
Vue.use(mavonEditor)
// new Vue({
//   'el': '#main',
//   data() {
//     return { value: '' }
//   }
// })

export default new Router({
  routes: [
    {
      path: '/',
      name: 'editBlog',
      component: editBlog
    },
    {
      path: '/2',
      name: 'HelloWorld2',
      component: HelloWorld2
    }
  ]
})
