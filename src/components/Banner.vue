<template>
  <div id="banner">
    <div id="navbar">
      <ul>
        <li><a v-scroll-to="'#about'">About Me</a></li>
        <li><a v-scroll-to="'#experience'">Experience</a></li>
        <li><a v-scroll-to="'#projects'">Projects</a></li>
        <li><a v-scroll-to="'#skills'">Skills</a></li>
        <li><a v-scroll-to="'#contacts'">Contacts</a></li>
      </ul>
    </div>

    <div id="welcome">
      <p>Welcome</p>
      <p class="name">I'm Diogo.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  #banner{
    background-color: $color-dark;
    background: linear-gradient(45deg, $color-dark 0%, $color-light 100%);
    height: 100vh;

    #navbar{
      padding: 2.5em 15em;
      ul{
        display: flex;
        justify-content:space-around;
        margin: 0;

        li{
          display: inline; 
          font-size: 1.3em;
          text-transform: lowercase;
          font-weight: 300;
          position: relative;

          &:before{
            transition: 400ms;
            height: 2px;
            content: "";
            position: absolute;
            top: 1.3em;
            background-color: #031D44;
            width: 0%;

          }
          &:hover{
            cursor: pointer;
            &::before{ width: 100%; }
          }

          a{
            text-decoration: none;
            color: $color-text-light;
          }
        }
      }
    }

    #welcome{
      position: absolute;
      bottom: 0;
      margin: 0 0 3em 3em;

      p{
        margin: 0;
        font-size: 4em;
        color: $color-text-light;
        font-weight: 300;

        &.name{
          font-family: $font-text;
          font-size: 3em;
        }
      }
    }
  }
</style>
