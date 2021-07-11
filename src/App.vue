<template>
  <div id="app">
    <!-- <img alt="Spiral" src="./assets/spiral.png"> -->
    <TitleBar/>
    <AboutMe/>
  </div>
</template>

<script>
import TitleBar from './components/TitleBar.vue';
import AboutMe from './components/AboutMe.vue';

export default {
  name: 'App',

  components: {
    TitleBar,
    AboutMe
  },

  data: () => ({
    //
  }),
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
