<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
// import Home from './components/Home.vue'
// import About from './components/About.vue'
import Header from './components/partials/Header.vue'
import Footer from './components/partials/Footer.vue'
import Router from 'vue-router'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  //   Home,
  //   About
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Raleway:300,400,600|Suranna&display=swap');

*
{
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Raleway', sans-serif, 'Suranna', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  p::selection,span::selection,img::selection,strong::selection,br::selection, small::selection, div::selection, a::selection, i::selection
  {
    background-color: #FFB03A;
    color: white;
  }
  h1::selection, h2::selection, h3::selection
  {
    background-color: #FFB03A;
    color: white;
  }
}
</style>