<template>
  <b-row>
    <b-col class="web-projects">
      <p class="project-title">VCMI</p>
      <p class="project-subtitle">
        Design and development of a web application for the Visual Computing and Machine Intelligence (VCMI) and Breast research group of INESC TEC. <br>Available <a href="http://vcmi.inesctec.pt/">here</a>.
      </p>
      <div class="tag-container">
        <span class="tag">Vue</span>
        <span class="tag">Django</span>
        <span class="tag">Wagtail</span>
      </div>
    </b-col>
    <b-col class="web-projects">
      <p class="project-title">Cybersecurity Week</p>
      <p class="project-subtitle">
        A website for IEEE's Cybersecurity Week event in 2019.
      </p>
      <div class="tag-container">
        <span class="tag">Vanilla HTML/CSS/JS</span>
      </div>
    </b-col>
    <b-col class="web-projects">
      <p class="project-title">Personal Portfolio</p>
      <p class="project-subtitle">
        The website you are in right now. Pretty meta, right?
      </p>
      <div class="tag-container">
        <span class="tag">Vue</span>
      </div>
    </b-col>
    <b-col class="web-projects">
      <p class="project-title">A Journey through space</p>
      <p class="project-subtitle">
        Available <a href="https://diogodores.github.io/feup-se/index.html">here</a>.
      </p>
      <div class="tag-container">
        <span class="tag">Vue</span>
        <span class="tag">Django</span>
        <span class="tag">Wagtail</span>
        <span class="tag">HTML/CSS/JS</span>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Project",
};
</script>

<style scoped lang="scss">
#projects-container{
  display: flex;
}
.web-projects {
  background: $color-secondary;
  padding: 1.3em;
  margin: 1em;
  border-radius: 1em;

  .project-title{
    font-family: $font-text;
    font-weight: 500;
    font-size: 22px;
    margin-bottom: 0.3em;
  }

  .tag-container {
    display: flex;
    .tag {
      background-color: $color-dark;
      font-family: $font-subtitle;
      color: white;
      margin: 0.3em;
      padding: 0.2em 1em;
      border-radius: 0.5em;
      font-size: 14px;

      &:first-of-type{
        margin-left: 0;
      }
    }
  }
}
</style>