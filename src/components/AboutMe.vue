<template>
  <div class="aboutme">
      <div class="inline-child-left">
          <img alt="Raiyan" src="../assets/raiyan.jpg" height="350">
      </div>
      <div class="inline-child-right">
          <h1>About Me</h1>
          <span class="about-desc">
              I am a master's student at the Computer Vision and
              Intelligent Systems lab at Ryerson University. I completed
              my bachelor's at the University of Toronto in computer science,
              while completing numerous work terms as a software engineer.
              I am passionate about artificial intelligence, cybersecurity,
              full-stack development and all things computer science.
              I am also highly enthusiastic about teaching and have experience
              as a teaching assistant for freshman computer science courses at UofT.
              In my spare time I love watching films and playing video games, as well as
              exploring more of what Toronto has to offer.
          </span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    outline-color: black;
    outline-style: solid;
    outline-width: 1px;
}
.about-desc {
    font-size: 20px;
    display:block;
    width:600px;
    word-wrap:break-word;
}
.aboutme {
    margin-top: 10rem;
    display: flex;
}

.inline-child-left {
    display: inline-block;
    margin-left: 10%;
}
.inline-child-right {
    display: inline-block;
    margin-left: 3rem;
    margin-right: 5%;
    margin-top: 2rem;
}
</style>
