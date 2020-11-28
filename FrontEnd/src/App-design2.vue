<template>
  <div id="app">
    <loading-screen :is-loading="isLoading"></loading-screen>
    <v-container p-0>
      
        <v-card width=100% >
          
    <b-navbar style="background-color:#4285f4;" variant="black" type="light">
      <b-navbar-brand>
        <img  style="height: 60px;width: 60px;" src="../static/RDE-logo1.png" alt="rdelogo" />
      </b-navbar-brand>
      
  
          <b-navbar-brand class="ml-center">
      <v-md-date-range-picker style="align:center;" class=" glyphicon glyphicon-calendar p-1 m-0 mx-auto date" @change="requestData"></v-md-date-range-picker>
      </b-navbar-brand>
    </b-navbar>
        </v-card>
      
    </v-container>
  <div>
    <v-container px-0>
      <v-row justify="space-around">
        <v-card width=100% >
          
    
    <div class="btn-div" >
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
     </div> 
    
    <span>{{ Countydata | pluck(filter) }}</span>
    
   

    <l-map
      :center="[41.818716, -74.184204]"
      :zoom="6"
      style="height: 550px;z-index:1"
      :options="mapOptions"
    >
      <l-choropleth-layer 
 
        :data="propertyComputed"
        titleKey="NAME"
        idKey="NAME"
        :value="value"
        geojsonIdKey="Name"
        :geojson="geojsonComputed"
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
        </v-card>
      </v-row>
    </v-container>
      
  </div>


    <div class="sticky">
     
      
        <v-card>
          Start:  {{ beginDate }} <br>
          End: {{ endDate }}
   
        </v-card>
   
    </div>
<v-container>
<v-layout>
  
    <v-flex xs4  style="padding:5px;">
      <v-card class="primary" height="100%" >
        <v-card-text><div>
                  <div class="font-weight-normal">
                    <strong style="color:#ffc107;">Total Confirmed Cases</strong> 
                  </div>
                  <div>{{ConfirmedCases}}</div>
                </div></v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs4 style="padding:5px;">
      <v-card class="primary" height="100%">
        <v-card-text><div>
                  <div>
                    <strong style="color:#28a745;">Total Recoveries</strong> 
                  </div>
                  <div>{{Recovery}}</div>
                </div></v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs4 style="padding:5px;">
      <v-card  height="100%">
        <v-card-text><div>
                  <div class="font-weight-normal">
                    <strong style="color:#dc3545;">Total Deaths</strong> 
                  </div>
                  <div>{{Deaths}}</div>
                </div></v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
    
  <div class="date-container">
      <v-container p-0 >
   
	<div class="block-buttons">
		<div class="btn-group">
		<b-button  @click="viewTable();" variant="primary"> Table</b-button>
    <b-button  @click="viewCharts()" variant="secondary"> Charts</b-button>
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
    
      </v-container>
    </div>
   
    <div class="date-container">
    <v-container>
      <v-row justify="space-around">
        <v-card width=100%>
          <legend class="typo__label" style="text-align: center" v-if="showCharts===true">Bar Chart</legend>
    <bar-chart v-if="showCharts===true" :data="chartData"></bar-chart>

        </v-card>
      </v-row>
    </v-container>
  </div>

    
    <br>

  <div class="date-container">
    <v-container>
      <v-row justify="space-around">
        <v-card width=100%>
          <legend class="typo__label" style="text-align: center" v-if="showCharts===true">Pie Chart</legend>
    <pie-chart :data="chartData" v-if="showCharts===true"></pie-chart>
        </v-card>
      </v-row>
    </v-container>
  </div>
    
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

//import Tristate from "./data/Tristate.json";
const Tristate = require('./data/Tristate.json')
import { LMap } from "vue2-leaflet";
import BarChart from "./components/BarChart";

import PieChart from "@/components/PieChart";
import Loader from "./components/Loader";
// import { Countydata } from "./data/County-data";
var beginDate = ""
var endDate = ""

var amountArray=[];
var Countydata=[];
Vue.filter("pluck", function (objects, key) {
  
  objects.map(function (item, index) {
    amountArray[index]=item[key];
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
    
    this.beginDate = today;
    this.endDate = end;

    this.Countydata=data.Response;
    this.ConfirmedCases=0;
    this.Recovery=0;
    this.Deaths=0;

    for (var i = 0; i < this.Countydata.length; i++) {
      labelsArray[i]=this.Countydata[i].NAME;
      this.ConfirmedCases+=this.Countydata[i].CONFIRMEDCASES;
      this.Recovery+=this.Countydata[i].RECOVERIES;
      this.Deaths+=this.Countydata[i].CONFIRMEDDEATHS;
      
  StateArray[i]=this.Countydata[i].STATE;
  if (filter === "CONFIRMEDCASES") {
    
    
    amountArray[i]=this.Countydata[i].CONFIRMEDCASES;
  }
  
}

this.changeData();
     setTimeout(() => {
      this.isLoading = false
    }, 1)
    
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
  
        
  },
  
  watch: {
    geojsonComputed() {
     if(!localStorage.getItem("Tristate")){
        localStorage.setItem("Tristate", JSON.stringify(this.Tristate));
     }
        
        console.log(JSON.parse(localStorage.getItem("Tristate")));
        return JSON.parse(localStorage.getItem("Tristate"));
        
     
      
    }
  },
  computed: {
   propertyComputed() {
      return this.Countydata;
      
    },
   geojsonComputed() {
     if(!localStorage.getItem("Tristate")){
        localStorage.setItem("Tristate", JSON.stringify(this.Tristate));
     }
        
        console.log(JSON.parse(localStorage.getItem("Tristate")));
        return JSON.parse(localStorage.getItem("Tristate"));
        
     
      
    },
    
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
@import "../node_modules/leaflet/dist/leaflet.css";
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
@import "../node_modules/bootstrap-vue/dist/bootstrap-vue.css";

body {
  
  background-color: #F0F8FF;
  margin-left: 10px;
  margin-right: 10px;
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


.custom {
    width: 170px !important;
    align-self:center;
}
.mdrp__activator .activator-wrapper .text-field{
  border-bottom:white;
  font-size:12;
  padding-top:4px;
}

.date  {
 
    background-color:white;
    color:inherit;
    border-radius: 4px;
    width: 350px;
    text-align:center;
    margin-top: 1px;
    padding-left: 100px;
}
.container{
  background-color: #F0F8FF;
}
.btn-div{
  
  border-radius: 0.5rem;
  padding: 1rem 0rem;

}
div.sticky {
  position: -webkit-sticky;
  position:sticky;
  top: 0;
  float: left;
  padding: 0px;
  font-size: 20px;
  z-index: 10;
  margin-left: 50px;
  
}

</style>
