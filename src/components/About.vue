<template>
  <b-row id="about">

    <b-col class="text">
        <h1 class="section-title">About Me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus odio magna, ac sagittis leo ultrices eu.
            Aliquam nec tortor vitae justo dapibus vulputate vel eget odio. Sed dignissim, urna ac sollicitudin dapibus, 
            velit ligula fermentum dui, ut feugiat nulla tellus at est. Integer sit amet urna vitae tortor rutrum tristique.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus odio magna, ac sagittis leo ultrices eu.
            Aliquam nec tortor vitae justo dapibus vulputate vel eget odio. Sed dignissim, urna ac sollicitudin dapibus, 
            velit ligula fermentum dui, ut feugiat nulla tellus at est. Integer sit amet urna vitae tortor rutrum tristique.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus odio magna, ac sagittis leo ultrices eu.
            Aliquam nec tortor vitae justo dapibus vulputate vel eget odio. Sed dignissim, urna ac sollicitudin dapibus, 
            velit ligula fermentum dui, ut feugiat nulla tellus at est. Integer sit amet urna vitae tortor rutrum tristique.
          </p>
    </b-col>
    
    <b-col class="d-flex align-items-center">
      <img id="id_card" src="../assets/ID_Card.svg"/>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'Banner',
}
</script>

<style scoped lang="scss">
  #about{
    margin: 7em 7em;
    display: flex;

    .text {

        h1{
          text-align: center;
          margin-bottom: 1em;
        }
    
        p{
          text-align: center;
          font-size: 17px;
          line-height: 1.5em;
        }

    }

    img#id_card{
      width: 70%;
      transform: rotate(15deg);
      display: block;
      margin: auto;
    }
  }


</style>
