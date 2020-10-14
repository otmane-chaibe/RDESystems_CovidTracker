<template>

  <div id="app">
    <b-navbar variant="faded" type="light">
    <b-navbar-brand href="#">
      <img src="../static/RDE-logo.png" alt="rdelogo">
      
    </b-navbar-brand>
    
    <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
 
  </b-navbar>
  <br></br>
  
  <!-- <b-button-group Horizontal> -->
    
    <b-button disabled pill variant="primary">New Cases</b-button>
    <b-button disabled pill :pressed="true" variant="warning">Confirmed Cases</b-button>
    <b-button disabled pill variant="success">Recoveries</b-button>
    <b-button disabled pill variant="danger">Deaths</b-button>
 
  <!-- </b-button-group> -->
<br></br>
    <l-map :center="[41.818716, -74.184204]"  :zoom="6" style="height: 500px;" :options="mapOptions">
      <l-choropleth-layer  :data="Countydata" titleKey="name" idKey="Id" :value="value" :extraValues="extraValues" geojsonIdKey="GEO_ID" :geojson="Tristate" :colorScale="colorScale">
        <template slot-scope="props">
          <l-info-control :item="props.currentItem" :unit="props.unit" title="County" placeholder="Hover over a County"/>
          <l-reference-chart title="Covid-19 Dashboard" :colorScale="colorScale" :min="props.min" :max="props.max" position="topright"/>
        </template>
      </l-choropleth-layer>

    </l-map>

  <div>
  
  <multiselect v-model="values" :options="options" :multiple="true"  group-label="labelsArray" :group-select="true" placeholder="Type to search" track-by="name" label="name"><span slot="noResult">Oops! No elements found. Consider changing the search query.</span></multiselect>
 
</div>
  <v-card dark>
    <v-card-title>
      Covid cases by County
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :data="Countydata"
      :headers="headers"
      :items="Countydata"
      :search="search"
    ></v-data-table>
  </v-card>
    <bar-chart></bar-chart>
    <pie-chart></pie-chart>
    
  </div>
  
</template>
<script src="https://unpkg.com/vue"></script>
  <script src="https://unpkg.com/vuejs-datepicker"></script>
 
<script>
import Vuetify from 'vuetify'

import { InfoControl, ReferenceChart, ChoroplethLayer } from 'vue-choropleth'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//import Multiselect from './components/multiselector'
import Multiselect from 'vue-multiselect'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import Datepicker from 'vuejs-datepicker';
import Tristate from './data/Tristate.json'
import { Countydata } from './data/County-data'
import {LMap} from 'vue2-leaflet';
import BarChart from './components/BarChart'
import PieChart from '@/components/PieChart'
function centerLeafletMapOnMarker(map, marker) {
  var latLngs = [ marker.getLatLng() ];
  var markerBounds = L.latLngBounds(latLngs);
  map.fitBounds(markerBounds);
}
var labelsArray = [];
var StateArray = [];
for (var i = 0; i < Countydata.length; i++) {
    labelsArray.push(Countydata[i] ? Countydata[i].name : '');
    StateArray.push(Countydata[i] ? Countydata[i].State : '');
}
export default {
  name: "app",
  components: { 
    LMap,
    'l-info-control': InfoControl, 
    'l-reference-chart': ReferenceChart, 
    'l-choropleth-layer': ChoroplethLayer ,
    BarChart,
    PieChart,
    Datepicker,
    Multiselect
  },
  data() {
    return {
      Countydata,
      Tristate,
      options: labelsArray,
      //[
      //   {
      //     language: 'Javascript',
      //     libs: [
      //       { name: 'Vue.js', category: 'Front-end' },
      //       { name: 'Adonis', category: 'Backend' }
      //     ]
      //   },
      //   {
      //     language: 'Ruby',
      //     libs: [
      //       { name: 'Rails', category: 'Backend' },
      //       { name: 'Sinatra', category: 'Backend' }
      //     ]
      //   },
      //   {
      //     language: 'Other',
      //     libs: [
      //       { name: 'Laravel', category: 'Backend' },
      //       { name: 'Phoenix', category: 'Backend' }
      //     ]
      //   }
      // ],
      values: [],
      colorScale: ["e7d090", "e9ae7b", "de7062"],
      value: {
        key: "ConfirmedCases",
        metric: "ConfirmedCases"
      }, search: '',
        headers: [
          {
            text: 'County',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'State', value: 'State' },
          { text: 'New Cases', value: 'NewCases' },
          { text: 'Confirmed Cases', value: 'ConfirmedCases' },
          { text: 'Confirmed Deaths', value: 'ConfirmedDeaths' },
         // { text: 'Sodium', value: 'sodium' },
        ],
      // extraValues: [{
      //   key: "amount_m",
      //   metric: "% boys"
      // }],
      mapOptions: {
        attributionControl: false
      },
      currentStrokeColor: '3d3213'
    }
  },
  methods:{
 
  },
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
@import "../node_modules/leaflet/dist/leaflet.css";
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
@import "../node_modules/bootstrap-vue/dist/bootstrap-vue.css";
/* @import "../node_modules/vuetify/dist/vuetify.css"; */

body {
  background-color: #ffffff;
  margin-left: 100px;
  margin-right: 100px;
}

#map {
  background-color: #eee;
}
</style>
