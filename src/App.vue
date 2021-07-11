<template>
  <div id="app">
    <!-- <img alt="Spiral" src="./assets/spiral.png"> -->
    <TitleBar/>
    <div class="stickynav">
      <v-btn text>
        Home
      </v-btn>
      <v-btn text>
        About
      </v-btn>
      <v-btn text>
        Experience
      </v-btn>
      <v-btn text>
        Research
      </v-btn>
      <v-btn text>
        Projects
      </v-btn>
      <v-btn text>
        Contact
      </v-btn>
    </div>
    <AboutMe/>
    <Experience/>

  </div>
</template>

<script>
import TitleBar from './components/TitleBar.vue';
import AboutMe from './components/AboutMe.vue';
import Experience from './components/Experience.vue';

// TODO: Vue-ScrollTo package to add anchors to the webpage.
// https://github.com/rigor789/vue-scrollTo?ref=madewithvuejs.com
// https://stackoverflow.com/questions/51516318/vue-router-anchor-links-to-a-specific-place-in-a-page-e-g-route-anchor

export default {
  name: 'App',

  components: {
    TitleBar,
    AboutMe,
    Experience
  },

  data: () => ({
    //
  }),
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.stickynav {
  background-color: white;
  text-align: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
