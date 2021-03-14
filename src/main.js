import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/axios'
import './plugins/bootstrap-vue'
import App from './App.vue'
import store from './store'
import "./filters"
import router from './router'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

Vue.use(VueLodash, { lodash: lodash })
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
