<template>
  <div class="title">
    <br/>
    <h1 style="font-family: Roboto; font-size: 56px;">Raiyan Rahman</h1>
    <h1>Computer Scientist | Machine Learning Researcher</h1>
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
  </div>
</template>

<script>
export default {
  name: 'TitleBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  margin-top: 10rem
}
h1 {
  text-align: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.stickynav {
  text-align: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: white;
}
</style>
