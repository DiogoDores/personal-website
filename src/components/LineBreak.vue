<template>
    <div class="text"><span>&lt;hr&gt;</span></div>
</template>

<script>
export default {
  name: 'LineBreak',
}
</script>

<style scoped lang="scss">
  .text{
      width: 95%;
      border-bottom: 2px solid $color-dark;
      border-radius: 5em;
      line-height: 0.1em;
      padding: 0 2em;
      margin: auto;
      font-family: $font-text;

      span{
        position: relative;
        left: 3em;
        background:#fff; 
        padding: 0 10px; 
      }
  }
</style>
