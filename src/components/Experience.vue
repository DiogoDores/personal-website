<template>
  <div class="section" id="experience">
    <h1 class="section-title">Experience</h1>

    <div class="section-name"><span>Work</span></div>
    <div class="section-content">
        <div> cenas</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
}
</script>

<style scoped lang="scss">
  #experience{

      .section-name {

        padding: 0.2em 0;
      
        span{
          padding: 0.3em 2.5em;
          background-color: $color-dark;
          border-radius: 0.5em 0.5em 0 0;

          font-family: $font-text;
          font-size: 1.5em;
          text-transform: lowercase;
          color: $color-text-light;
        }
          
      }

      .section-content{
          background-color: $color-secondary;
      }
  }
</style>
