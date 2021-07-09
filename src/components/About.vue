<template>
  <div id="about" class="section small">
    <b-row class="section-row">
      <h1 class="section-title small">About Me</h1>
    </b-row>

    <b-row>
      <b-col class="text" cols="8">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus odio magna, ac sagittis leo ultrices eu.
          Aliquam nec tortor vitae justo dapibus vulputate vel eget odio. Sed dignissim, urna ac sollicitudin dapibus, 
          velit ligula fermentum dui, ut feugiat nulla tellus at est. Integer sit amet urna vitae tortor rutrum tristique.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus odio magna, ac sagittis leo ultrices eu.
        </p>
      </b-col>
      
      <b-col class="d-flex align-items-center" cols="4">
        <img id="id_card" src="../assets/ID_Card.svg"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped lang="scss">
  #about{
    display: block;

    .section-row{
      justify-content: center;
    }

    .text {
        p{
          text-align: left;
          font-size: 17px;
          line-height: 2em;
        }

    }

    img#id_card{
      transform: rotate(15deg);
      display: block;
      margin: auto;
    }
  }


</style>
