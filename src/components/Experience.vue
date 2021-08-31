<template>
  <div class="experience">
      <h1>Experience</h1>
      <div class="timeline-container">
          <section class="timeline">
            <ul>
              <li v-for="(info, index) in experience" v-bind:key="index" v-on:click="clickedLink(index)">
                  <span></span>
                  <div><br/>{{ info.school }}</div>
                  <div>{{ info.address }}</div>
                  <div>{{ info.course }}</div>
                  <div class="year">
                  <span>{{ info.yearEnd }}</span>
                  <span>{{ info.yearStart }}</span>
                  <br/>
                  </div>
              </li>
            </ul>
          </section>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Experience',
  data: () => ({
    experience: [
      {
        "school": "Research Software Developer",
        "address": "MediaCAT",
        "course": "Worked under Dr. Alejandro Paz, creating and optimizing large-scale web crawlers to aid in his research.",
        "yearStart": "May 2019",
        "yearEnd": "Aug 2021",
        "link": "https://github.com/UTMediaCAT"
      },
      {
        "school": "Teaching Assistant @ University of Toronto",
        "address": "CSCA20: Introduction to Programming",
        "course": "Held 2 hours-long live tutorials for 40 students each week. Implemented and ran the automarker on assignments and weekly exercises for over 450 students.",
        "yearStart": "Sept 2020",
        "yearEnd": "Dec 2020",
        "link": "https://utsc.calendar.utoronto.ca/course/csca20h3"
      },
      {
        "school": "Online Education Technologies Developer",
        "address": "Department of Computer Science - University of Toronto",
        "course": "4 months-long internship at the University of Toronto's Department of Computer Science, aiding Dr. Brian Harrington port over course material, develop automarking tools, and create videos for undergraduate students.",
        "yearStart": "May 2020",
        "yearEnd": "Aug 2020",
        "link": "https://web.cs.toronto.edu/"
      },
      {
        "school": "Castrophe Modelling Application Developer",
        "address": "Validus Research Inc.",
        "course": "8 months-long internship at Validus Research, working through numerous full-stack engineering projects. Presented created applications to senior VPs.",
        "yearStart": "May 2020",
        "yearEnd": "Aug 2020",
        "link": "https://www.validusholdings.com/about-us/our-companies-homepage/validus-research/"
      }
    ]
  }),
  methods: {
    clickedLink(index) {
      window.open(this.experience[index].link, '_blank')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    text-align: center;
    margin-left: -9rem;
    color: #c4926b;
}
.experience {
    padding-top: 7%;
    padding-bottom: 7%;
    background-color: #4c4c4b;
}
.timeline-container {
    margin-left: 10%;
    margin-right: 10%;
    color: #bcbab9;
}
</style>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
$font-stack: 'Montserrat', sans-serif;
$font-color: #fff;
$bg-color: #fff;
$dark-blue: #2E4A62;
$light-blue: #4e9bfa;

@mixin clearfix {
  content: '';
  position: absolute;
  top: 0; left: 0;
}
@mixin set-border($thickness, $color, $radius) {
  border: $thickness solid $color;
  border-radius: $radius;
}

body {
    background-color: $bg-color;
}
*, *::before, *::after {
  margin: 0; padding: 0;
	box-sizing: border-box;
  font-family: $font-stack;
	color: $font-color;
}
main {
    width: 32em;
    height: 100%;
    margin: 1em auto;
    padding: 40px;
    background: $dark-blue;
    border-radius: 4px;
    box-shadow: 0 5px 15px rgba(0,0,0,.5);
}
.timeline {
  padding: 5px 45px;
  ul {
    position: relative;
    &::before {
      @include clearfix();
      height: 100%;
    }
  }
  li {
    position: relative;
    margin: 60px 35px;
    width: 100%;
    list-style: none;
    line-height: 25px;
    &>span {
      @include clearfix();
      left: -25px;
      height: 110%;
      @include set-border(2px, $font-color, none);
    }
    &>span::before, &>span::after {
      @include clearfix();
      width: 14px; height: 14px;
      @include set-border(3px, $font-color, 50%);
      left: -7px;
      background: $light-blue;
    }
    &>span::before {
      top: -15px;
    }
    &>span::after {
      top: 100%;
    }
    div {
      &:nth-child(2) {
        font-size: 1.3em;
        cursor: pointer;
      }
      &:nth-child(3) {
        cursor: pointer;
        font-size: 1em;
        font-style: italic;
        font-weight: bold;
        color: darken($font-color, 25%);
      }
      &:nth-child(4) {
        cursor: pointer;
        font-size: 1em;
        font-style: italic;
        color: darken($font-color, 25%);
      }
    }
    .year span {
      position: absolute;
      font-size: 1em;
      left: -80px;
      width: 40px;
      text-align: right;
      &:first-child {
        top: -20px;
      }
      &:last-child {
        top: 100%;
      }
    }
  }
}
</style>