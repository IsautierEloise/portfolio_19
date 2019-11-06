<template>
  <div id="app">
    <Header/>
    <Home/>
  </div>
</template>

<script>
import Header from './components/partials/Header.vue'
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Header,
    Home
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Oxygen:300,400,700|Suranna&display=swap');

#app {
  font-family: 'Oxygen', sans-serif, 'Suranna', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>