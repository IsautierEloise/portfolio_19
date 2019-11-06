<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
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
