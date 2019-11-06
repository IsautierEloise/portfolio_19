import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

// Importing the global css file
import "@/assets/global.scss"

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
