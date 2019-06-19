import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Qs from 'qs'
//QS是axios库中带的，不需要我们再npm安装一个
 
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


