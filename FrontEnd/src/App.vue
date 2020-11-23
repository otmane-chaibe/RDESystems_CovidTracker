<template>
  <div id="app">
    <loading-screen :is-loading="isLoading"></loading-screen>
    
    <b-navbar variant="" type="light">
      <b-navbar-brand href="#">
        <img src="../static/RDE-logo.png" alt="rdelogo" />
      </b-navbar-brand>
      <v-md-date-range-picker class="glyphicon glyphicon-calendar mx-auto date" @change="requestData"></v-md-date-range-picker>
    </b-navbar>
    <br />
    
<div class="row">
  <div class="column left" style="background-color:##F6F6F6;">
    <br>
    <br>
    <p  class="p-5 w-5  mb-0   text-warning " style="background-color:#38618C;">Total Confirmed Cases: {{ConfirmedCases}}</p>
    <p  class="p-5 w-5 mb-0  text-success" style="background-color:#38618C;">Total Recoveries: {{Recovery}} </p>
    <p  class="p-5 w-5 mb-0   text-danger" style="background-color:#38618C;">Total Confirmed Deaths: {{Deaths}}</p>
  </div>
  <div class="column right" style="background-color:#F6F6F6;">
    
      <button
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
        :class="'btn text-white btn-'+applyStyle(entry)+' custom'"
        type="button"

      >
        {{ getCase(entry) }}
      </button>
      
    
    <span>{{ Countydata | pluck(filter) }}</span>
    
    <br />

    <l-map
      :center="[41.818716, -74.184204]"
      :zoom="6"
      style="height: 550px"
      :options="mapOptions"
    >
      <l-choropleth-layer 
 
        :data="propertyComputed"
        titleKey="NAME"
        idKey="NAME"
        :value="value"
        geojsonIdKey="Name"
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
  </div>
</div>

    <br />
    
   <div class="container">
	<div class="block-buttons">
		<div class="btn-group">
		<b-button  @click="viewTable();" variant="primary"> Table</b-button>
    <b-button  @click="viewCharts()" variant="secondary"> Charts</b-button>
		</div>
	</div>
</div>
    <div>
      
      <multiselect v-if="showTable===true" class="name-multiselect"
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
      <v-card-title v-if="showTable===true">
        Covid cases by County
        <v-spacer></v-spacer>
        
      </v-card-title>
      <v-data-table v-if="test.length===0 && showTable===true"
        :data="Countydata"
        :headers="headers"
        :items="Countydata"
        
        track-by="County"
        :multiple="true"
      ></v-data-table>
      <v-data-table v-if="test.length>0 && showTable===true"
        :data="test"
        :headers="headers"
        :items="test"
        
        track-by="County"
        :multiple="true"
      ></v-data-table>
    </v-card>
    <br /><br />
   
    <legend class="typo__label" style="text-align: center" v-if="showCharts===true">Bar Chart</legend>
    <bar-chart v-if="showCharts===true" :data="chartData"></bar-chart>

    

    <br /><br />
    <legend class="typo__label" style="text-align: center" v-if="showCharts===true">Pie Chart</legend>
    <pie-chart :data="chartData" v-if="showCharts===true"></pie-chart>
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
import { LMap } from "vue2-leaflet";
import BarChart from "./components/BarChart";

import PieChart from "@/components/PieChart";
import Loader from "./components/Loader";
var amountArray=[];
var Countydata=[];
Vue.filter("pluck", function (objects, key) {
  
  objects.map(function (object, index) {
    amountArray[index]=object[key];
  });
  
});


var filter = "CONFIRMEDCASES";
var labelsArray = [];
var StateArray = [];


var test =  [];
var chartamountArr=[];
var chartlabelArr=[];
for (var i = 0; i < test.length; i++) {
  chartlabelArr.push(test[i] ? test[i].NAME : "");
  if (filter === "CONFIRMEDCASES") {
    
    chartamountArr.push(test[i] ? test[i].CONFIRMEDCASES : "");
  }
}
var tagData=[];
let tags = [];

var ConfirmedCases;
var Recovery;
var Deaths;
export default {
  
  name: "app",
  components: {
    LMap,
    "l-choropleth-layer": ChoroplethLayer,
    "l-info-control": InfoControl,
    "l-reference-chart": ReferenceChart,
    BarChart,
    PieChart,
    Multiselect,
    'loading-screen': Loader
  },
  data() {
    return {
      isLoading: true,
      colorScale: ["e7d090", "e9ae7b", "de7062"],
      ConfirmedCases:0,
      Recovery:0,
      Deaths:0,
      value: {
        key: "CONFIRMEDCASES",
        metric: "CONFIRMEDCASES",
      },
      showTable: true,
      showCharts: false,
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
      
      Countydata:Object,
      Tristate,
      valueArr: "",
      labelsArray,
      amountArray,
      option: labelsArray,
      
      fkey: "Id",
      filterList: [ "CONFIRMEDCASES","RECOVERIES", "CONFIRMEDDEATHS"],
      filter: "CONFIRMEDCASES",
      values: [],
      
      headers: [
        {
          text: "County",
          align: "start",
          sortable: false,
          value: "NAME",
        },
        { text: "State", value: "STATE" },

        { text: "Confirmed Cases", value: "CONFIRMEDCASES" },
        { text: "Recoveries", value: "RECOVERIES" },
        { text: "Confirmed Deaths", value: "CONFIRMEDDEATHS" },
      ],

      mapOptions: {
        attributionControl: true,
      },
      currentStrokeColor: "3d3213",
    };
  },
  mounted () {
    this.requestData();
    this.Tristate=Tristate;

  },
  methods: {
    requestData (values) {
      
        var today;
        var end;
        if(values){
          today = values[0]._d;
         
          end=values[1]._d;
        }
        else{
          today = new Date();
          end= new Date();
        }

       
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today =  yyyy+ '-' + mm + '-'+dd;
        
        var dd = String(end.getDate()).padStart(2, '0');
        var mm = String(end.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = end.getFullYear();
        end =  yyyy+ '-' + mm + '-'+dd;
        
        if(today!=end){
        var scrap ='{"range":[ "'+today+'" , "'+end+'" ]}'
        }
        else{
          var scrap='{"date":"'+today+'"}';
        }
        const url = 'https://d4y3kom4hxs3x.cloudfront.net/rest/controller/APIroutes/stats';
  
  const options = {
    'method': 'POST',
    'Content-Type': 'application/json',
    'body': scrap
  };
  fetch(url, options).then(dataWrappedByPromise => dataWrappedByPromise.json()).then(data => {
    
    
    this.Countydata=data.Response;
    this.ConfirmedCases=0;
    this.Recovery=0;
    this.Deaths=0;
    for (var i = 0; i < this.Countydata.length; i++) {
      labelsArray[i]=this.Countydata[i].NAME;
      this.ConfirmedCases+=this.Countydata[i].CONFIRMEDCASES;
      this.Recovery+=this.Countydata[i].RECOVERIES;
      this.Deaths+=this.Countydata[i].RECOVERIES;
  StateArray[i]=this.Countydata[i].STATE;
  if (filter === "CONFIRMEDCASES") {
    
    
    amountArray[i]=this.Countydata[i].CONFIRMEDCASES;
  }
  
}
this.Tristate=Tristate;
this.changeData();
     setTimeout(() => {
      this.isLoading = false
    }, 1000)
    
}).catch(err => {
            
          })
          
      },
    viewTable(){
      this.showTable=true,
      this.showCharts=false
    },
    viewCharts(){
      this.showTable=false,
      this.showCharts=true
    },
    applyStyle(entry){
if(entry=="CONFIRMEDCASES"){
  return "warning";
}if(entry=="RECOVERIES"){
  return "success";
}if(entry=="CONFIRMEDDEATHS"){
  return "danger";
}
    },
    addTag(newTag) {
      
      test = []
      newTag.forEach((tag) => {
        let filteredItems = this.Countydata.filter((obj) => obj.NAME == tag)
        if(!this.test.includes(filteredItems[0])){
          this.test.push(filteredItems[0])
        }
        
      })
    },
    removeTag(newTag) {
      let currentTag = newTag[newTag.length - 1]
      this.test = test.filter((obj) => obj.NAME != currentTag)
      
    }
    ,
    getCase(entry){
      if(entry=="CONFIRMEDCASES"){
          return "Confirmed Cases";
      }if(entry=="RECOVERIES"){
          return "Recoveries";
      }if(entry=="CONFIRMEDDEATHS"){
          return "Confirmed Deaths";
      }
    },
    changeData () {
      
      if(test.length>0){
        this.chartData= {
        labels: chartlabelArr,
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
            data: chartamountArr, 
          },
        ]
      }
      }
      else{
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
              "Yellow",
              "Aquamarine",
              "crimson",
              "aqua", "salmon", "SlateBlue", "pink", "coral","LightGreen","Pink"
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
      }
     
    }
  
        
  },
  

  computed: {
   propertyComputed() {
      return this.Countydata;
      
    }
    
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
@import "../node_modules/leaflet/dist/leaflet.css";
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
@import "../node_modules/bootstrap-vue/dist/bootstrap-vue.css";

body {
  background-color: #ffffff;
  margin-left: 100px;
  margin-right: 100px;
}
.loading-message color white #map {
  background-color: #eee;
}

button {
  
  border: none;
 
  padding: 10px;
  margin: 5px;
}

.block-buttons {
	position: relative;
}
.block-buttons .btn-group {
	width: 100%;
}

.block-buttons button  {
	width: 50%;
}
* {
  box-sizing: border-box;
}

/* Create two unequal columns that floats next to each other */
.column {
  float: left;
  padding: 5x;
  
}

.left {
  width: 25%;
}

.right {
  width: 75%;
}
.custom {
    width: 170px !important;
    align-self:center;
}
.date{
    position: absolute;
    background-color:white;
    display: inline-block;
    border-bottom-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    color: inherit;
    border-radius: 4px;
    width: 500px;
    text-align:center;
    padding: 4px;
    margin-top: 1px;
    top: 2px;
    left: 20px;
}

</style>
