<template>
  <div id="experience">Hi! <br> I'm Diogo</div>
</template>

<script>
export default {
  name: 'Skills',
}
</script>

<style scoped lang="scss">

  #experience{
    height: 100%;
    background-color: $color-dark;
  }
  
  div.section-description{
    bottom: 2.5em;
    text-align: center;
    font-family: $font-text;
    font-size: 1.3em;
  }

  div.section-container{

    div.section-subtitle{
      font-family: $font-subtitle;
      color: $color-dark;
      font-size: 2em;
      font-weight: 600;
      text-shadow: 3px 3px 3px $color-shadow;
    }
  }
</style>