<template>
  <div id="app">
    <!-- <img alt="Spiral" src="./assets/spiral.png"> -->
    <TitleBar/>
    <div class="stickynav">
      <v-btn text color="#cccbc5">
        Home
      </v-btn>
      <v-btn text color="#cccbc5">
        About
      </v-btn>
      <v-btn text color="#cccbc5">
        Experience
      </v-btn>
      <v-btn text color="#cccbc5">
        Research
      </v-btn>
      <v-btn text color="#cccbc5">
        Projects
      </v-btn>
      <v-btn text color="#cccbc5">
        Contact
      </v-btn>
    </div>
    <AboutMe/>
    <Experience/>
    <Research/>
    <Projects/>
    <Contact/>
    <br/>
    <div class="footer">
      Built and designed by Raiyan Rahman.<br/>
      All rights reserved. ©
    </div>
    <br/>
  </div>
</template>

<script>
import TitleBar from './components/TitleBar.vue';
import AboutMe from './components/AboutMe.vue';
import Experience from './components/Experience.vue';
import Research from './components/Research.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';

// TODO: Vue-ScrollTo package to add anchors to the webpage.
// https://github.com/rigor789/vue-scrollTo?ref=madewithvuejs.com
// https://stackoverflow.com/questions/51516318/vue-router-anchor-links-to-a-specific-place-in-a-page-e-g-route-anchor
// Particle effects: https://github.com/dreambo8563/vue-particle-effect-buttons
// Animations: https://bashooka.com/coding/web-background-animation-effects/
// Hero Animation: https://codepen.io/MarioDesigns/pen/Ndqxbm
// Star Animation: https://codepen.io/saransh/pen/BKJun

export default {
  name: 'App',

  components: {
    TitleBar,
    AboutMe,
    Experience,
    Research,
    Projects,
    Contact
  },

  data: () => ({
    //
  }),
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.stickynav {
  background-color: #242424;
  text-align: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index:1;
}

.footer {
  color: #cccbc5;
  text-align: center;
}

#app {
  background-color: #242424;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 100px;
}

</style>
