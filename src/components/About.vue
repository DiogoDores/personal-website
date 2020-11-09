<template>
  <div id="about">
    <div class="text">
        about me
    </div>
    <div class="image">
        <img src="../assets/ID_Card.svg"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
}
</script>

<style scoped lang="scss">
    #about{
        display: flex;
        justify-content: space-around;
        margin: 6em 5em;
    }

    img{
        width: 200%;
        transform: rotate(15deg);
        margin-right: 2em;
    }

    .text{
        font-family: $font-text;
        font-size: 3em;
        font-weight: 400;
    }
</style>
