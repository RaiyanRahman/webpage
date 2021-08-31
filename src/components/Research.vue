<template>
    <div class="research">
      <h1 style="color: #c4926b;">Research</h1>
      <br/>
      <!-- This is a single research paper block. -->
      <div class="paper" v-on:click="readFile('./CSC413_Final_Project.pdf')">
        <div class="underlay">
          <img src="../assets/csc413-final-project-preview.png" alt="paper_image" class="image">
          <h3 class="paper-title">Jarin. G, Rahman. R. (2020). Feature Visualization with AlexNet and ResNet</h3>
        </div>
        <div class="overlay">
          <div class="text">Final research paper for the graduate course CSC413: Neural Networks and Deep Learning at the University of Toronto, taken during the 2020 winter term.</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Research',
  methods: {
    readFile(filename) {
      window.open(filename, '_blank') // Open the given file in a new tab.
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.research {
  background-color: #343434;
  padding-top: 5rem;
  padding-bottom: 7rem;
  padding-left: 17%;
}

.paper {
  cursor: pointer;
  background-color: #5e5e5d;
  position: relative;
  outline-color: grey;
  outline-style: solid;
  outline-width: 1px;
  width: 75%;
}

.underlay {
    display: flex;
}

.overlay {
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    background: rgba(250, 250, 250, 0.5);
    backdrop-filter: blur(6px);
    overflow: hidden;
    width: 100%;
    height:0;
    transition: .5s ease;
}

.paper:hover .overlay {
  bottom: 0;
  height: 100%;
}

.text {
  color: black;
  font-size: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  right: -30%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

img {
    width: 100px;
    margin: 0.5rem 1rem 0.5rem 0.5rem;
}

.paper-title {
    padding-top: 2rem;
    color: #bcbab9;
}

</style>
