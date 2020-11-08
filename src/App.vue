<template>
  <div id="app">
    <Banner></Banner>
    <About></About>
    <Experience></Experience>
    <Projects></Projects>
    <Skills></Skills>
    <Contacts></Contacts>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contacts from './components/Contacts.vue'

export default {
  name: 'App',
  components: {
    Banner,
    About,
    Experience,
    Projects,
    Skills,
    Contacts
  }
}
</script>

<style lang="scss">
  body{
    margin: 0;
  }

  #app {
    font-family: $font-title;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
