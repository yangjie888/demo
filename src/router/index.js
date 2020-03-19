import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
let router = new Router({
  mode: 'history',
  routes: [
    {path: '/', redirect: '/one'},
    {path: '/one', name: 'One', component: () => import('@/pages/one')},
    {path: '/login', name: 'Login', component: () => import('@/pages/login')},
    { path: '/two',
      name: 'Two',
      component: () => import('@/pages/two'),
      children: [
        { path: 'three',
          name: 'Three',
          component: () => import('@/pages/three'),
          meta: {
            keepAlive: true
          }
        },
        { path: 'four',
          name: 'Four',
          component: () => import('@/pages/four'),
          meta: {
            keepAlive: false
          }
        }
      ]
    },
    {path: '/test', name: 'Test', component: () => import('@/pages/test')},
    {path: '/404', name: 'WrongPage', component: () => import('@/pages/404')},
    {path: '*', redirect: '/404'}
  ]
})
export default router
