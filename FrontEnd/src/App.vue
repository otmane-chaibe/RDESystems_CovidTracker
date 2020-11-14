<template>
  <div id="app">
    <loading-screen :is-loading="isLoading"></loading-screen>
    <br>
    <b-navbar variant="faded" type="light">
      <b-navbar-brand href="#">
        <img src="../static/RDE-logo.png" alt="rdelogo" />
      </b-navbar-brand>
      <v-md-date-range-picker></v-md-date-range-picker>
      <!-- <v-date-picker mode="range" v-model="range" :popover="{placement:'bottom-end'}" /> -->
    </b-navbar>
    <br />

    
    <div>
      <b-button
        v-for="(entry, index) in filterList"
        :item="entry"
        :key="index"
        @click="
        
          filter = entry;
          active = index;
          value = {
            key: entry,
            metric: entry,
          };
          changeData();
        "
        :class="{ active: entry == filter }"
        :variant="applyStyle(entry)"

      >
        {{ entry }}
      </b-button>
      
    </div>
    <span>{{ Countydata | pluck(filter) }}</span>
    <span>{{  }}</span>
    
    <br /><br />

    <l-map
      :center="[41.818716, -74.184204]"
      :zoom="6"
      style="height: 500px"
      :options="mapOptions"
    >
      <l-choropleth-layer 
 
        :data="Countydata"
        titleKey="name"
        idKey="Id"
        :value="value"
        geojsonIdKey="GEO_ID"
        :geojson="Tristate"
        :colorScale="colorScale"
      >
        <template slot-scope="props">
          <l-info-control
            :item="props.currentItem"
            :unit="props.unit"
            title="County"
            placeholder="Hover over a County"
          />
          <l-reference-chart
            title="Covid-19 Dashboard"
            :colorScale="colorScale"
            :min="props.min"
            :max="props.max"
            position="topright"
          />
        </template>
      </l-choropleth-layer>
     
      
    </l-map>
    <br />
    <div>
      <label class="typo__label">Tagging</label>
      <multiselect class="name-multiselect"
        v-model="valueArr"
        tag-placeholder="Add this as new tag"
        placeholder="Search or add a tag"
        :options="option"
        :multiple="true"
        :taggable="true"
        @input="addTag(valueArr)"
        @remove="removeTag(valueArr)"
       ></multiselect>
    </div>

    <v-card>
      <v-card-title>
        Covid cases by County
        <v-spacer></v-spacer>
        
      </v-card-title>
      <v-data-table v-if="test.length===0"
        :data="Countydata"
        :headers="headers"
        :items="Countydata"
        :search="valueArr"
        track-by="County"
        :multiple="true"
      ></v-data-table>
      <v-data-table v-if="test.length>0"
        :data="test"
        :headers="headers"
        :items="test"
        :search="valueArr"
        track-by="County"
        :multiple="true"
      ></v-data-table>
    </v-card>
    <br /><br />
    <label class="typo__label" style="align: center">Bar Chart</label>
    <bar-chart :data="chartData"></bar-chart>

    <br /><br />
    <label class="typo__label" style="align: center">Pie Chart</label>
    <pie-chart :data="chartData"></pie-chart>
  </div>
</template>
<script src="https://unpkg.com/vue"></script>
  <script src="https://unpkg.com/vuejs-datepicker"></script>
 
<script>
import Vuetify from "vuetify";

import { InfoControl, ReferenceChart,ChoroplethLayer } from "vue-choropleth";

import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import Multiselect from "vue-multiselect";
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import Tristate from "./data/Tristate.json";
import { Countydata } from "./data/County-data";
import { LMap } from "vue2-leaflet";
import BarChart from "./components/BarChart";

import PieChart from "@/components/PieChart";
import Loader from "./components/Loader";
var amountArray=[];

Vue.filter("pluck", function (objects, key) {
  
  objects.map(function (object, index) {
    amountArray[index]=object[key];
  });
  
});


var filter = "ConfirmedCases";
var labelsArray = [];
var StateArray = [];


for (var i = 0; i < Countydata.length; i++) {
  labelsArray.push(Countydata[i] ? Countydata[i].name : "");
  StateArray.push(Countydata[i] ? Countydata[i].State : "");
  if (filter === "ConfirmedCases") {
    
    amountArray.push(Countydata[i] ? Countydata[i].ConfirmedCases : "");
  }
}
var tagData=[];
let tags = [];
var test =  [];
// [
//   {
      
//       Id:"0500000US34017",
//       name: 'Hudson',
//       State: "New Jersey",
//       Recoveries:21342,
//       ConfirmedCases: 	
//       21342,
//       ConfirmedDeaths: 34
      
    
//     }];
export default {
  
  name: "app",
  components: {
    LMap,
    "l-info-control": InfoControl,
    "l-reference-chart": ReferenceChart,
    "l-choropleth-layer": ChoroplethLayer,
    BarChart,
    PieChart,
    Multiselect,
    'loading-screen': Loader
  },
  data() {
    return {
     test,
     chartData:{
        labels: labelsArray,
        datasets: [
          {
            label: "Bar Chart",
            borderWidth: 1,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            pointBorderColor: "#2554FF",
            data: amountArray, 
          },
        ]
      }
    ,
      isLoading: true,
      Countydata,
      Tristate,
      valueArr: "",
      option: labelsArray,
      labelsArray,
      amountArray,
      fkey: "Id",
      filterList: [ "ConfirmedCases","Recoveries", "ConfirmedDeaths"],
      filter: "ConfirmedCases",
      values: [],
      colorScale: ["e7d090", "e9ae7b", "de7062"],
     
      value: {
        key: filter,
        metric: filter,
      },
     // search: "",
      headers: [
        {
          text: "County",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "State", value: "State" },

        { text: "Confirmed Cases", value: "ConfirmedCases" },
        { text: "Recoveries", value: "Recoveries" },
        { text: "Confirmed Deaths", value: "ConfirmedDeaths" },
      ],

      mapOptions: {
        attributionControl: true,
      },
      currentStrokeColor: "3d3213",
    };
  },
  mounted () {
    setTimeout(() => {
      this.isLoading = false
    }, 2000)
  },
  methods: {

    applyStyle(entry){
if(entry=="ConfirmedCases"){
  return "warning";
}if(entry=="Recoveries"){
  return "success";
}if(entry=="ConfirmedDeaths"){
  return "danger";
}
    },
    addTag(newTag) {
      console.log('newTag: ', newTag)
      test = []
      newTag.forEach((tag) => {
        let filteredItems = Countydata.filter((obj) => obj.name == tag)
        if(!this.test.includes(filteredItems[0])){
          this.test.push(filteredItems[0])
        }
      })
    },
    removeTag(newTag) {
      let currentTag = newTag[newTag.length - 1]
      this.test = test.filter((obj) => obj.name != currentTag)
      
    },
    changeData () {
      
      this.chartData= {
        labels: labelsArray,
        datasets: [
          {
            label: "Bar Chart",
            borderWidth: 1,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            pointBorderColor: "#2554FF",
            data: amountArray, 
          },
        ]
      }
      BarChart.update();
    }
  
        
  },
  
  watch:{
    colorScale(){
     return ["e7d090", "e9ae7b", "de7062"];
   },
  },
  computed: {
   colorScale(){
     return ["e7d090", "e9ae7b", "de7062"];
   },
    chartData () {
      return {
        labels: labelsArray,
        datasets: [
          {
            label: "Bar Chart",
            borderWidth: 1,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            pointBorderColor: "#2554FF",
            data: amountArray, 
          },
        ]
      }
     BarChart.update()
    }
    
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
@import "../node_modules/leaflet/dist/leaflet.css";
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
@import "../node_modules/bootstrap-vue/dist/bootstrap-vue.css";

/* @import "../node_modules/vue2-daterange-picker/dist/vue2-daterange-picker.css"; */
body {
  background-color: #ffffff;
  margin-left: 100px;
  margin-right: 100px;
}
.loading-message color white #map {
  background-color: #eee;
}

button {
  background: #74b6cc;
  border: none;
  color: #fff;
  padding: 10px;
  margin: 5px;
}
button.active {
  background: #0089ba;
}
</style>
