import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from "buefy";
import "buefy/dist/buefy.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSyncAlt, faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSyncAlt, faHandPointRight);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Buefy);
Vue.config.productionTip = false

Vue.prototype.$urlAsset = 'http://192.168.0.111/project/simple-shop';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
