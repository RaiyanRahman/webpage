import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faJsSquare, faVuejs, faGoogle, faNodeJs, faGithub,
         faPython } from '@fortawesome/free-brands-svg-icons'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faJsSquare)
library.add(faVuejs)
library.add(faGoogle)
library.add(faNodeJs)
library.add(faGithub)
library.add(faPython)
library.add(faTerminal)

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(vuetify)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
