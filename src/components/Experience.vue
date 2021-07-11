<template>
  <div class="experience">
      <h1>Experience</h1>
      <br/>
      <div class="timeline">
          <Timeline
            :timeline-items="dataTimeline"
            :unique-year="true"
            :show-day-and-month="true"
            order="desc"
            />
      </div>
  </div>
</template>

<script>
import Timeline from 'timeline-vuejs';

export default {
  name: 'Experience',
  components: {
      Timeline
  },
  data: () => ({
    dataTimeline: [
      {
        from: new Date(2021, 10),
        title: "Graduated from the University of Toronto",
        description:
          "Graduated with High Distinction."
      },
      {
        from: new Date(2021, 8),
        title: "Started master's @ Ryerson University",
        description:
          "Researcher at the Computer Vision and Intelligent Systems Laboratory, supervised by Dr. Richard Wang. Awarded the full Ryerson Graduate Fellowship."
      },
      {
        from: new Date(2020, 8),
        title: "Teaching Assistant @ University of Toronto, CSCA20:Introduction to Programming",
        description:
          "Held 2 hours-long live tutorials for 40 students each week. Implemented and ran the automarker on assignments and weekly exercises for over 450 students."
      },
      {
        from: new Date(2020, 4),
        title: "Online Education Technologies Developer",
        description:
          "Started a 4 months-long internship at the University of Toronto's Department of Computer Science, aiding Dr. Brian Harrington port over course material, develop automarking tools, and create videos for undergraduate students."
      },
      {
        from: new Date(2019, 4),
        title: "Research Software Developer @ MediaCAT",
        description:
          "Worked for 2.5 years under Dr. Alejandro Paz, creating and optimizing large-scale web crawlers to aid in his research."
      },
      {
        from: new Date(2018, 8),
        title: "Castrophe Modelling Application Developer @ Validus Research Inc.",
        description:
          "Started an 8 months-long internship at Validus Research, working through numerous full-stack engineering projects. Presented applications to senior VPs."
      },
      {
        from: new Date(2017, 8),
        title: "Started undergrad @ University of Toronto",
        description:
          "Awared the University of Toronto Scholars scholarship."
      }
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    text-align: center;
    margin-left: -9rem;
}
.experience {
    margin-top: 10%;
}
.timeline {
    margin: auto;
}
</style>
