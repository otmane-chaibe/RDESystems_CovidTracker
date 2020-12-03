// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VMdDateRangePicker from "v-md-date-range-picker";
import "leaflet/dist/leaflet.css";
Vue.use(VMdDateRangePicker);


Vue.use(Vuetify);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  vuetify: new Vuetify(),
  el: '#app',
  template: '<App/>',
  components: { App }
})
