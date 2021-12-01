import Vue from 'vue'
import App from './App.vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import store from './store'
import router from './router'
import { SquareSpinner } from 'vue-spinners'

Vue.component('square', SquareSpinner)
Vue.component('v-icon', Icon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
