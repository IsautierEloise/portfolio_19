import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import store from './store'
import Header from './components/partials/Header.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})


new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
