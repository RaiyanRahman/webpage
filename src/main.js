import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faJsSquare, faVuejs, faGoogle, faNodeJs, faGithub,
         faPython, faLinkedin, faInstagram, faPlaystation } from '@fortawesome/free-brands-svg-icons'
import { faTerminal, faFilm, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faJsSquare)
library.add(faVuejs)
library.add(faGoogle)
library.add(faNodeJs)
library.add(faGithub)
library.add(faPython)
library.add(faTerminal)
library.add(faLinkedin)
library.add(faInstagram)
library.add(faPlaystation)
library.add(faFilm)
library.add(faEnvelope)

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(vuetify)

var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
