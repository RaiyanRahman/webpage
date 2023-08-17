<template>
    <div class="research">
      <h1 style="color: #c4926b;">Research</h1>
      <br/>
      <!-- This is a single research paper block. -->
      <div class="paper" style="height: 80px;" v-on:click="window.open('https://openaccess.thecvf.com/content/CVPR2023W/AgriVision/html/Rahman_On_the_Real-Time_Semantic_Segmentation_of_Aphid_Clusters_in_the_CVPRW_2023_paper.html', '_blank')">
        <div class="underlay">
          <img src="../assets/cvf.jpeg" style="height: 65px;" alt="paper_image" class="image">
          <h3 class="paper-title" style="margin-top: 5px;">On the Real-Time Semantic Segmentation of Aphid Clusters in the Wild</h3>
        </div>
        <div class="overlay">
          <div class="text">Raiyan Rahman, Christopher Indris, Tianxiao Zhang, Kaidong Li, Brian McCornack, Daniel Flippo, Ajay Sharda, Guanghui Wang; Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops, 2023, pp. 6298-6305</div>
        </div>
      </div>

      <!-- This is a single research paper block. -->
      <div class="paper" style="height: 80px;" v-on:click="window.open('https://openaccess.thecvf.com/content/CVPR2023W/AgriVision/html/Rahman_On_the_Real-Time_Semantic_Segmentation_of_Aphid_Clusters_in_the_CVPRW_2023_paper.html', '_blank')">
        <div class="underlay">
          <img src="../assets/ai2a.png" alt="paper_image" class="image" style="height: 65px;">
          <h3 class="paper-title" style="margin-top: 3px;">An Intelligent System for Insects Detection and Management for Precision Agriculture</h3>
        </div>
        <div class="overlay">
          <div class="text">Guanghui Wang, Raiyan Rahman, Tianxiao Zhang, Kaidong Li, Brian McCornack, Daniel Flippo, Ajay Sharda;</div>
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
  width: 90%;
  margin-top: 1em;
  margin-bottom: 1em;
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
    padding: 15px 0.5rem 0.5rem 0.5rem;
    color: #bcbab9;
}

</style>
