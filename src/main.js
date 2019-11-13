import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]


const router = new VueRouter({
  routes
})
Vue.use(VueRouter)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
