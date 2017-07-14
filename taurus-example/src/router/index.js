import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index.vue'
import test from '../components/filter-panel.vue'
import form from '../components/test.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: index
    },
    {
      path:'/test',
      component:test
    },
    {
      path:'/form',
      component:form
    }
  ]
})
