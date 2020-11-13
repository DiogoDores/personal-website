import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'

var VueScrollTo = require('vue-scrollto');

library.add(faUserSecret, faCalendarAlt, faMapMarkerAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueScrollTo)

new Vue({
  render: h => h(App),
}).$mount('#app')
