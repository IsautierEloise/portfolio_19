import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import store from './store'
import Home from './components/Home.vue'
import About from './components/About.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
