<template>
    <div class="projects">
        <h1>Projects</h1>
        <br/>
        <div class="projects-container">
            <!-- Project Card -->
            <v-card
                class="mx-auto"
                max-width="360"
                min-width="360"
                style="margin-top: 20px; margin-bottom: 20px;"
            >
                <v-card-text>
                <h2><a href="https://github.com/RaiyanRahman/Reinforcement-Learning-Models">Reinforcement Learning Algorithms</a></h2>
                <p style="padding-top: 5px; padding-bottom: 5px;">
                        <b>Implementation of linear estimator, Double Deep Q-learning Network, and Duelling Double Deep Q-Learning Network. Trained and evaluated on Pong.</b>
                    </p>
                <div>
                    Used technologies:<br>
                    <font-awesome-icon :icon="['fab', 'python']" style="color: #007fbe; font-size: 2em;  margin: 2px;" />
                    <a href="https://github.com/RaiyanRahman/Reinforcement-Learning-Models"><font-awesome-icon :icon="['fab', 'github']" style="color: black; font-size: 2em;  margin: 2px;" /></a>
                    
                </div>
                </v-card-text>
                <v-card-actions>
                <v-btn
                    text
                    color="teal accent-4"
                    @click="project_0 = true"
                >
                    Learn More
                </v-btn>
                </v-card-actions>

                <v-expand-transition>
                <v-card
                    v-if="project_0"
                    class="transition-fast-in-fast-out v-card--reveal"
                    style="height: 100%;"
                >
                    <v-card-text class="pb-0">
                    <div>
                        The final project for the grad course CP8319: Reinforcement Learning. The code implements a linear estimator, a Double Deep Q-learning Network, as well as a Duelling Double Deep Q-Learning Network. All models are trained and evaluated on the classic Pong Atari game.
                    </div>
                    </v-card-text>
                    <v-card-actions class="pt-0">
                    <v-btn
                        text
                        color="teal accent-4"
                        @click="project_0 = false"
                    >
                        Close
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-expand-transition>
            </v-card>

            <!-- Project Card -->
            <v-card
                class="mx-auto"
                max-width="360"
                min-width="360"
                style="margin-top: 20px; margin-bottom: 20px;"
            >
                <v-card-text>
                <h2><a href="https://tdsb-app.herokuapp.com/">Homework Management System</a></h2>
                <p style="padding-top: 5px; padding-bottom: 5px;">
                        <b>Course Project as a Full Stack Web Application</b>
                    </p>
                <div>
                    Used technologies:<br>
                    <font-awesome-icon :icon="['fab', 'js-square']" style="color: #f0db4f; font-size: 2em;  margin: 2px;" />
                    <font-awesome-icon :icon="['fab', 'vuejs']" style="color: #42b883; font-size: 2em; margin: 2px;" />
                    <font-awesome-icon :icon="['fab', 'google']" style="color: #00A1F1; font-size: 2em;  margin: 2px;" />
                    <a href="https://github.com/RaiyanRahman/TDSB-Team-Project"><font-awesome-icon :icon="['fab', 'github']" style="color: black; font-size: 2em;  margin: 2px;" /></a>
                    
                </div>
                </v-card-text>
                <v-card-actions>
                <v-btn
                    text
                    color="teal accent-4"
                    @click="project_1 = true"
                >
                    Learn More
                </v-btn>
                </v-card-actions>

                <v-expand-transition>
                <v-card
                    v-if="project_1"
                    class="transition-fast-in-fast-out v-card--reveal"
                    style="height: 100%;"
                >
                    <v-card-text class="pb-0">
                    <div>
                        Project accepted from Toronto District School Board (TDSB)
                        for a new web application to count towards the final term project of UofT's
                        Intro to Software Engineering course (CSC301).
                    </div>
                    </v-card-text>
                    <v-card-actions class="pt-0">
                    <v-btn
                        text
                        color="teal accent-4"
                        @click="project_1 = false"
                    >
                        Close
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-expand-transition>
            </v-card>

            <!-- Project Card -->
            <v-card
                class="mx-auto"
                max-width="360"
                min-width="360"
                style="margin-top: 20px; margin-bottom: 20px;"
            >
                <v-card-text>
                <h2><a href="https://raiyanrahman.github.io/ADAM-AI/">ADAM-AI</a></h2>
                <p style="padding-top: 5px; padding-bottom: 5px;">
                        <b>Side Project using a Genetic Algorithm</b>
                    </p>
                <div>
                    Used technologies:<br>
                    <font-awesome-icon :icon="['fab', 'node-js']" style="color: #3c873a; font-size: 2em;  margin: 2px;" />
                    <a href="https://github.com/RaiyanRahman/ADAM-AI"><font-awesome-icon :icon="['fab', 'github']" style="color: black; font-size: 2em;  margin: 2px;" /></a>
                    
                </div>
                </v-card-text>
                <v-card-actions>
                <v-btn
                    text
                    color="teal accent-4"
                    @click="project_2 = true"
                >
                    Learn More
                </v-btn>
                </v-card-actions>

                <v-expand-transition>
                <v-card
                    v-if="project_2"
                    class="transition-fast-in-fast-out v-card--reveal"
                    style="height: 100%;"
                >
                    <v-card-text class="pb-0">
                    <div>
                        A complex maze solving A.I. powered by the Genetic Algorithm based on evolution.
                        Think "survival of the fittest" where the most adept bot transfers its "genes" to the next generation.
                        Can also be played through by the user.
                    </div>
                    </v-card-text>
                    <v-card-actions class="pt-0">
                    <v-btn
                        text
                        color="teal accent-4"
                        @click="project_2 = false"
                    >
                        Close
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-expand-transition>
            </v-card>

            <!-- Project Card -->
            <v-card
                class="mx-auto"
                max-width="360"
                min-width="360"
                style="margin-top: 20px; margin-bottom: 20px;"
            >
                <v-card-text>
                <h2><a href="https://github.com/UTMediaCAT">MediaCAT</a></h2>
                <p style="padding-top: 5px; padding-bottom: 5px;">
                        <b>Recursive Web Domain Crawler</b>
                    </p>
                <div>
                    Used technologies:<br>
                    <font-awesome-icon :icon="['fab', 'node-js']" style="color: #3c873a; font-size: 2em;  margin: 2px;" />
                    <font-awesome-icon :icon="['fab', 'python']" style="color: #306998; font-size: 2em;  margin: 2px;" />
                    <font-awesome-icon :icon="['fas', 'terminal']" style="color: grey; font-size: 2em;  margin: 2px;" />
                    <a href="https://github.com/UTMediaCAT"><font-awesome-icon :icon="['fab', 'github']" style="color: black; font-size: 2em;  margin: 2px;" /></a>
                    
                </div>
                </v-card-text>
                <v-card-actions>
                <v-btn
                    text
                    color="teal accent-4"
                    @click="project_3 = true"
                >
                    Learn More
                </v-btn>
                </v-card-actions>

                <v-expand-transition>
                <v-card
                    v-if="project_3"
                    class="transition-fast-in-fast-out v-card--reveal"
                    style="height: 100%;"
                >
                    <v-card-text class="pb-0">
                    <div>
                        MediaCAT is open-source web-based application that crawls designated news websites and twitter accounts
                        for citations of or hyperlinks to a list of source sites,
                        allowing advanced analysis of the relations across the digital news-scape.
                    </div>
                    </v-card-text>
                    <v-card-actions class="pt-0">
                    <v-btn
                        text
                        color="teal accent-4"
                        @click="project_3 = false"
                    >
                        Close
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-expand-transition>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Projects',
    data: () => ({
      project_0: false,
      project_1: false,
      project_2: false,
      project_3: false,
    }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a:link, a:visited {
  color: rgb(69, 69, 69);
}

a:link {
  text-decoration: none;
}

.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}

h1 {
    text-align: center;
    margin-left: -5%;
    color: #c4926b;
}

.projects {
    padding-top: 10%;
    padding-bottom: 10%;
    background-color: #4c4c4b;
}

.projects-container {
    margin: 2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

</style>
