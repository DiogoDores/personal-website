<template>
  <div class="section" id="skills">
    <div class="section-title">
      Skills
    </div>

    <div class="section-description">
      Here are some of the skills I’ve devolped as an undergraduate through the development of various projects.
    </div>

    <div class="section-container">
      <div class="section-subtitle">
        Programming Languages
      </div>
      <div class="section-content">
        cenas
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
}
</script>

<style scoped lang="scss">
  
  div.section-description{
    position: relative;
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