<template>
  <div id="app">
    <Banner></Banner>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'

export default {
  name: 'App',
  components: {
    Banner
  }
}
</script>

<style lang="scss">
#app {
  font-family: $font-title;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
