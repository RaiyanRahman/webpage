<template>
  <div class="aboutme">
      <div class="inline-child-left">
          <img id="raiyan" alt="Raiyan" src="../assets/raiyan.jpg">
          <v-row class="links">
            <a href="mailto:raiyan.rahman01@outlook.com"><font-awesome-icon :icon="['fas', 'envelope']" style="color: black; font-size: 2em;  margin: 2px;" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/raiyan-rahman/"><font-awesome-icon :icon="['fab', 'linkedin']" style="color: #00A1F1; font-size: 2em;  margin: 2px;" /></a>
            <a target="_blank" href="https://github.com/RaiyanRahman"><font-awesome-icon :icon="['fab', 'github']" style="color: #00A1F1; font-size: 2em;  margin: 2px;" /></a>
            <a target="_blank" href="https://www.instagram.com/sspairal/"><font-awesome-icon :icon="['fab', 'instagram']" style="color: #00A1F1; font-size: 2em;  margin: 2px;" /></a>
            <a target="_blank" href="https://letterboxd.com/raiyanrahman/"><font-awesome-icon :icon="['fas', 'film']" style="color: #00A1F1; font-size: 2em;  margin: 2px;" /></a>
            <a target="_blank" href="https://infinitebacklog.nl/users/sspairal"><font-awesome-icon :icon="['fab', 'playstation']" style="color: #00A1F1; font-size: 2em;  margin: 2px;" /></a>
          </v-row>
      </div>
      <div class="inline-child-right">
          <h2 style="color: #c4926b;">About Me</h2>
          <br/>
          <span class="about-desc">
              I am an MSc graduate from the
              <a target="_blank" href="https://www.cs.torontomu.ca/~wangcs/cvis.html">
              Computer Vision and Intelligent Systems lab
              </a> at the <a target="_blank" href="https://www.torontomu.ca/cs/graduate/">Toronto Metropolitan University</a>.
              I completed my undergrad at the <a target="_blank" href="https://www.utoronto.ca/">
              University of Toronto</a> in computer science,
              while completing numerous work terms as a software engineer.
              My research focuses on computer vision applications in real world scenarios
              like autonomous vehicles and other intelligent systems.
              I am passionate about machine learning, artificial intelligence,
              and all things computer science. I am also highly enthusiastic about
              teaching and science communication.
              In my spare time I love watching films and playing video games, as well as
              exploring more of what Toronto has to offer.
          </span>
          <div class="education">
              <div clas="bachelors">
                <section class="timeline">
                  <ul>
                    <li v-for="(info, index) in undergrad" v-bind:key="index">
                        <span></span>
                        <div>{{ info.school }}</div>
                        <div>{{ info.address }}</div>
                        <div>{{ info.course }}</div>
                        <div class="year">
                        <span>{{ info.yearEnd }}</span>
                        <span>{{ info.yearStart }}</span>
                        </div>
                    </li>
                  </ul>
                </section>
              </div>
              <div clas="masters">
                <section class="timeline">
                  <ul>
                    <li v-for="(info, index) in grad" v-bind:key="index">
                        <span></span>
                        <div>{{ info.school }}</div>
                        <div>{{ info.address }}</div>
                        <div>{{ info.course }}</div>
                        <div class="year">
                        <span>{{ info.yearEnd }}</span>
                        <span>{{ info.yearStart }}</span>
                        </div>
                    </li>
                  </ul>
                </section>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data: () => ({
      undergrad: [
        {
          "school":"University of Toronto",
          "address":"Honours Bachelor of Science with High Distinction",
          "course":"Computer Science specializing in Software Engineering, University of Toronto Scholar",
          "yearStart":"2017",
          "yearEnd":"2021"
        }
      ],
      grad: [
        {
          "school":"Toronto Metropolitan University",
          "address":"Master of Science - Computer Science",
          "course":"Machine Learning and Computer Vision, TMU Graduate Fellowship",
          "yearStart":"2021",
          "yearEnd":"2023"
        }
      ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media screen and (max-width:1200px) {
  #raiyan {
    display: block;
    margin: auto;
    height: 300px;
  }

  .aboutme {
    flex-wrap: wrap;
  }

  .inline-child-left {
    width: 100%;
    display: flex;
  }

  .inline-child-right {
    width: 100%;
    padding-top: 20px;
  }
  
  .education {
    flex-wrap: wrap;
  }
}

img {
    height: 400px;
    outline-style: solid;
    outline-width: 3px;
}

.about-desc {
    font-size: 19px;
    display:block;
    width: 100%;
    word-wrap:break-word;
    color: #bcbab9;
}

.aboutme {
    background-color: #343434;
    padding-top: 2rem;
    padding-bottom: 5%;
    padding-left: 10%;
    padding-right: 10%;
    margin-top: 10rem;
    display: flex;
}

.inline-child-left {
    display: inline-block;
    margin-left: 5%;
    margin-right: 2%;
    margin-top: 4%;
    margin-bottom: 4%;
}

.inline-child-right {
    display: inline-block;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 1rem;
}

.links {
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
    padding-left: 10%;
    padding-right: 10%;
}

.education {
    display: flex;
}

.bachelors {
    display: inline-block;
}

.masters {
    display: inline-block;
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
        font-size: 1.2em;
      }
      &:nth-child(3), &:nth-child(4) {
        font-size: 1em;
        font-style: italic;
        color: darken($font-color, 25%);
      }
    }
    .year span {
      position: absolute;
      font-size: 1em;
      left: -85px;
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