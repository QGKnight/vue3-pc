import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from './api/http'
import plugin from './plugin'
import less from 'less'
import scroll from 'vue-seamless-scroll' 
Vue.use(scroll) 
Vue.use(less)
Vue.use(plugin, { router: router })
Vue.use(ElementUI);
Vue.prototype.$axios = axios
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
