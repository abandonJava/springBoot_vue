import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import axios from "axios"

axios.defaults.baseURL="http://127.0.0.1:8001/"

Vue.prototype.$http=axios;

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
