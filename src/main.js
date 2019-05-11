import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Gvue from './gvue'
import Element from 'element-ui'
Vue.config.productionTip = false
Vue.use(Gvue)
Vue.use(Element)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
