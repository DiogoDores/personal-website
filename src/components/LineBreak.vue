<template>
    <div class="text">&lt;hr&gt;</div>
</template>

<script>
export default {
  name: 'LineBreak',
}
</script>

<style scoped lang="scss">
  .text{
    font-family: $font-text;
    font-size: 1em;
    font-weight: 400;

    &::before,
    &::after{
    display: inline-block;
    content: "";
    border-top: .1rem solid $color-dark;
    width: 5rem;
    margin: 0 1rem;
    transform: translateY(-0.15rem);
    }

    &::after{
        width: 80vw;
    }
  }
</style>
