import Vue from 'vue'
import Router from 'vue-router'
import editPage from '@/view/editPage'
import listPage from '@/view/listPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/editPage',
      name: 'editPage',
      component: editPage
    },
    {
      path: '/listPage',
      name: 'listPage',
      component: listPage
    }
  ],
  mode: 'history',
})
