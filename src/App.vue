<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from './components/Home.vue'
// import About from './components/About.vue'
import Header from './components/partials/Header.vue'

export default {
  name: 'app',
  components: {
    Header,
  //   Home,
  //   About
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:300,400,600|Suranna&display=swap');

#app {
  font-family: 'Raleway', sans-serif, 'Suranna', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>