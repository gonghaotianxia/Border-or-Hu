import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ceshi from '@/vues/ceshi.vue'
import ceshia from '@/vues/ceshia.vue'
import ceshib from '@/vues/ceshib.vue'
// import zhou from '@/vues/zhou'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ceshi',
      name: 'ceshi',
      component: ceshi
    },
    {
      path: '/ceshia',
      name: 'ceshia',
      component: ceshia
    },
    {
      path: '/ceshib',
      name: 'ceshib',
      component: ceshib
    },
  //   {
  //   path: '/zhou',
  //   name: 'zhou',
  //   component: zhou
  // }
]
})
