// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 引入elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'
import router from '@/router'
import store from '@/store/index'
import axios from 'axios'
import Qs from 'qs'
import components from '@/components'
import App from './App'
import '@/utils/permission.js'

Vue.use(ElementUI)
Vue.prototype.axios = axios
Vue.prototype.qs = Qs
Vue.use(components)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
