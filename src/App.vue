<template>
  <div id="app">
    <Banner></Banner>
    <About></About>
    <!--<LineBreak></LineBreak>-->
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
//import LineBreak from './components/LineBreak.vue'

export default {
  name: 'App',
  components: {
    Banner,
    About,
    Experience,
    Projects,
    Skills,
    Contacts,
    //LineBreak
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

    h1.section-title{
      font-family: $font-text;
      font-size: 3em;
      font-weight: 400;
      text-transform: lowercase;

      &::before,
      &::after{
        display: inline-block;
        content: "";
        border-top: .4rem solid $color-dark;
        width: 5rem;
        border-radius: 1em;
        margin: 0 1.5rem;
        transform: translateY(-0.5rem);
      }
    }
  }

  /* width */
::-webkit-scrollbar {
  width: .8em;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: $color-light; 
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(145, 145, 145);
  border-radius: 10px;
  padding: 1em;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(129, 129, 129);
}
</style>
