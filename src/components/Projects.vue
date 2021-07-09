<template>
  <div class="section" id="projects">
    <div class="section-title">
      Projects
    </div>

    <b-container>
      <div class="section-container">
        <div id="web-dev">
          <div class="section-subtitle">
            web dev
          </div>
          <div class="section-content">
            <Project></Project>
          </div>
        </div>
        <div id="game-dev">
          <div class="section-subtitle">
            game dev
          </div>
          <div class="section-content">
            
          </div>
        </div>
        <div id="mobile-dev">
          <div class="section-subtitle">
            mobile dev
          </div>
          <div class="section-content">
            
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import Project from "./Project.vue"
export default {
  name: 'Projects',
  components: {
    Project,
  }
}
</script>

<style scoped lang="scss">
  
  div.section-container{

    div.section-subtitle{
      font-family: $font-subtitle;
      color: $color-dark;
      font-size: 2em;
      font-weight: 600;
      text-shadow: 3px 3px 3px $color-shadow;
    }

    div.section-content{
      display: flex;
    }
  }
</style>