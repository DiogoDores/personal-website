<template>
  <div id="app">
    <Banner></Banner>
    <About></About>
    <Experience></Experience>
    <LineBreak id="lb"></LineBreak>
    <Projects></Projects>
    <!-- <Contacts></Contacts> -->
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
// import Contacts from './components/Contacts.vue'
import LineBreak from './components/LineBreak.vue'

export default {
  name: 'App',
  components: {
    Banner,
    About,
    Experience,
    Projects,
    // Contacts,
    LineBreak,
  }
}
</script>

<style lang="scss">

  #app {
    font-family: $font-title;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;


      h1.section-title, div.section-title{
        font-family: $font-text;
        font-size: 3em;
        font-weight: 400;
        text-transform: lowercase;
        text-align: center;
        margin-bottom: 2em;

        &.small{
          margin-bottom: 1em;
        }
        
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

      .section{
        margin: 4em 0em;

        &.small{
          margin: 7em 30em;
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
