<template>
  <div id="app">
    <!-- loading screen -->
    <loading-screen :is-loading="isLoading"></loading-screen>
    <!-- Navigation bar -->
   <div class="sticky"> 
    <b-navbar variant="" type="light">
      <b-navbar-brand href="#">
        <img src="../static/RDE-logo.png" alt="rdelogo" />
      </b-navbar-brand>
      <!-- Date range Picker calls request data onchange -->
      <v-md-date-range-picker class="glyphicon glyphicon-calendar mx-auto date" @change="requestData"></v-md-date-range-picker>
    </b-navbar>
    <br />
    </div>

  
  <div  style="background-color:#F6F6F6;">
      <!-- button loops through filterlist(confirmed cases....) 
      updates filter to current pressed button
      changes data for charts 
      -->
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
          changeState(State,filter);
        "
        :class="'btn text-white btn-'+applyStyle(entry)+' custom'"
        type="button"

      >
      <!-- gets the corrected grammar for filter(CONFIRMEDCASES-> Confirmes Cases) -->
        {{ getCase(entry) }}
       
      </button>
      
    <!-- pluck is a function that filters the data for the map -->
    <span>{{ Countydata | pluck(filter) }}</span>
    
    <br />
    <!-- the legend on top of the map or filter name -->
    <v-card  height="100%">
        <v-card-text><div>
                  <div align="center" >
                    <strong style="font-size=20;" :class="' p-3 text-'+applyStyle(filter)"><span>{{ getCase(filter) }}</span></strong> 
                  </div>
                  
                </div></v-card-text>
      </v-card>
      <!-- the choropleth map
      ProperyComputed is the method the returns countydata
      Name and FIPS Come from the backend
      value is the current filter
      GEO_ID is the id for each county in Tristate.json -->
    <l-map
      :center="[41.818716, -74.184204]"
      :zoom="6"
      style="height: 550px;z-index:1"
      :options="mapOptions"
    >
      <l-choropleth-layer 
 
        :data="propertyComputed"
        titleKey="NAME"
        idKey="FIPS"
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
  </div>
<v-container>
  <!-- this is the calculated total Confirmed Cases, Recoveries and Deaths-->
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
    <v-flex xs4  style="padding:5px;">
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
    
<v-app id="inspire">

    <br />
    <!-- buttons to show either table or charts 
    to understand what viewTable() and viewCharts 
    please refer to the methods section below -->
   <div class="container">
	<div class="block-buttons">
		<div class="btn-group">
		<b-button  @click="viewTable();" variant="primary"> Table</b-button>
    <b-button  @click="viewCharts()" variant="secondary"> Charts</b-button>
		</div>
	</div>
</div>
    <div>
      <!-- this is the multiselect
      option is all the counties 
      to uderstand what addTag and removeTag 
      please refer to the methods section below -->
      <multiselect v-if="showTable===true" class="name-multiselect"
        v-model="multiselectValue"
        tag-placeholder="Add this as new tag"
        placeholder="Search or add a tag"
        :options="option"
        :multiple="true"
        :taggable="true"
        @input="addTag(multiselectValue)"
        @remove="removeTag(multiselectValue)"
       ></multiselect>
    </div>
    <!-- this is the table -->
    <v-card>
      <v-card-title v-if="showTable===true">
        Covid cases by County
        <v-spacer></v-spacer>
        
      </v-card-title>
      <v-btn @click="createPDF" color="primary" v-if="showTable===true">Download as PDF</v-btn>
      <!-- if no option selected in the multiselect 
      return all the data  -->
      <v-data-table ref="myTable" v-if="multiselectValueArray.length===0 && showTable===true"
        :data="Countydata"
        :headers="headers"
        :items="Countydata"
        
        track-by="County"
        :multiple="true"
      ></v-data-table>
      <!-- if one or more option selected in the multiselect 
      return the filtered data in multiselectValueArray  -->
      <v-data-table ref="myTable" v-if="multiselectValueArray.length>0 && showTable===true"
        :data="multiselectValueArray"
        :headers="headers"
        :items="multiselectValueArray"
        
        track-by="County"
        :multiple="true"
      ></v-data-table>
    </v-card>
    <br /><br />
    <!-- this is the charts they will only show if showCharts is true
    the buttons below control 
    please refer to the methods below 
    to understand what changeState does -->
    <v-card  height="50%" v-if="showCharts===true">
        <v-card-text>Select a State:</v-card-text>
                <div id="toolBtns">
<div class="btn-group" role="group" id="toolBtns" >
  <button class="btn-state"  type="button" @click="activeBtn = 'btn1';changeState('New Jersey',filter)" :class="{active: activeBtn === 'btn1' }">New Jersey</button>
  <button class="btn-state" type="button" @click="activeBtn = 'btn2';changeState('New York',filter)" :class="{active: activeBtn === 'btn2' }">New York</button>
  <button class="btn-state" type="button" @click="activeBtn = 'btn3';changeState('Connecticut',filter)" :class="{active: activeBtn === 'btn3' }">Connecticut</button>
  <button class="btn-state" type="button" @click="activeBtn = 'btn4';changeState('Pennsylvania',filter)" :class="{active: activeBtn === 'btn4' }">Pennsylvania</button></div>
</div>
      </v-card>
  
    <legend class="typo__label" style="text-align: center" v-if="showCharts===true">Bar Chart</legend>
    <bar-chart v-if="showCharts===true" :chartData="chartData"></bar-chart>

    

    <br /><br />
    <legend class="typo__label" style="text-align: center" v-if="showCharts===true">Pie Chart</legend>
    <pie-chart :chartData="chartData" v-if="showCharts===true"></pie-chart>
    <br>
<!-- this is the date displayed at the buttom  -->
  <div class="date-container">
    <v-container>
      <v-row justify="space-around">
        <v-card width=300px>
          <strong>Start:  {{ beginDate }} End: {{ endDate }}</strong>
        </v-card>
      </v-row>
    </v-container>
  </div>
    </v-app>
  </div>

</template>
<script src="https://unpkg.com/vue"></script>
  <script src="https://unpkg.com/vuejs-datepicker"></script>
 
<script>
//imports 
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
import {colors} from "./chartColors"
import BarChart from "./components/BarChart";
import PieChart from "@/components/PieChart";
import Loader from "./components/Loader";
import  *  as funcs from "./functions.js";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
// variables intialization
var beginDate = "";
var endDate = "";

var amountArray=[];
var Countydata=[];
var filter = "CONFIRMEDCASES";
var labelsArray = [];
var countyLabels=[];
var StateArray = [];


var multiselectValueArray =  [];
var chartamountArr=[];
var chartlabelArr=[];

var tagData=[];
let tags = [];

var ConfirmedCases;
var Recovery;
var Deaths;
var Countydata;
var State;
/* this is called in the filter buttons
this will fiter the data for the map based 
on the filter(confirmedCases...)
*/ 
Vue.filter("pluck", function (objects, key) {
  
  objects.filter(function (object, index) {
    amountArray[index]=object[key];
  });
  
});



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
      
      State:'',
      activeBtn:'btn1',
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
      multiselectValueArray,
      
      Countydata:{},
      Tristate,
      multiselectValue: "",
      labelsArray,
      amountArray,
      option: countyLabels,
      
      fkey: "Id",
      filterList: [ "CONFIRMEDCASES","RECOVERIES", "CONFIRMEDDEATHS"],
      filter: "CONFIRMEDCASES",
      values: [],
      /*the data for the table */
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
     
      /*this is the data injected in the chart*/
      chartData: {
        labels: chartlabelArr,
        datasets: [
          {
            label: "Bar Chart",
            borderWidth: 1,
            backgroundColor: colors,
            borderColor: colors,
            pointBorderColor: "#2554FF",
            data: chartamountArr, 
          },
        ]
      },
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
     /**
   * gets data from the backend
   * @param values the selected date 
   * @return the data based on the date
   */
    requestData(values) {
      
  var today;
  var end;
  /*if values was entered as a parameter*/
  if(values){
    today = values[0]._d;
   
    end=values[1]._d;
  }
  /*if no values were provided get today's date*/
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
  /*if the values that were entered as a parameter different get the range between the two*/
  if(today!=end){
  var scrap ='{"range":[ "'+today+'" , "'+end+'" ]}'
  }
  /*if the values are the same get by the date*/
  else{
    var scrap='{"date":"'+today+'"}';
  }
  /*set the backend URL and post data */
  const url = 'https://d4y3kom4hxs3x.cloudfront.net/rest/controller/APIroutes/stats';
  console.log("this is the API",process.env.VUE_APP_COLDFUSION_API);
  const options = {
  'method': 'POST',
  'Content-Type': 'application/json',
  'body': scrap
  };

fetch(url, options).then(dataWrappedByPromise => dataWrappedByPromise.json()).then(data => {

this.beginDate = today;
this.endDate = end;


this.Countydata= data.Response;
this.ConfirmedCases=0;
this.Recovery=0;
this.Deaths=0;
var j=0;
amountArray=[];
for (var i = 0; i < this.Countydata.length; i++) {
  /*calculates the total Confirmed Cases,Recoveries and Deaths */
  this.ConfirmedCases+=this.Countydata[i].CONFIRMEDCASES;
  this.Recovery+=this.Countydata[i].RECOVERIES;
  this.Deaths+=this.Countydata[i].CONFIRMEDDEATHS;
  /*pushes all the counties for the multiselect */
  countyLabels[i]=this.Countydata[i].NAME;
}

for (var i = 0; i < this.Countydata.length; i++) {
  /*pushes the counties and the data for the specific state */
  if(this.Countydata[i].STATE=="New Jersey"){
      this.State="New Jersey";
      chartlabelArr[j]=this.Countydata[i].NAME+', '+"NJ";
      chartamountArr[j]=this.Countydata[i].CONFIRMEDCASES;
    j++;
  }
  else{
    i++;
  }

}
/*the loading screen is being set to 1 second timeout */
this.changeData();
setTimeout(() => {
this.isLoading = false
}, 1000)

}).catch(err => {
      console.log("no data returned from the backend")
    })
    
},
/**
   * sets show table to true to be able to show table
   * 
  */
 viewTable(){
  this.showTable=true,
  this.showCharts=false
},
/**
   * sets show charts to true to be able to show charts
   * 
  */
    viewCharts(){
      this.showTable=false,
      this.showCharts=true
    },
    /**
   * Applies style to the buttons
   * @param entry case 
   * @return the color based on the entry 
  */
    applyStyle(entry){
      if(entry=="CONFIRMEDCASES"){
        return "warning";
      }if(entry=="RECOVERIES"){
        return "success";
      }if(entry=="CONFIRMEDDEATHS"){
        return "danger";
      }
    },
    /**
   * adds tags to the multiselect
   * @param newTag county name
   *pushes the new Tag to multiselectValueArray array
  */
    addTag(newTag) {
      
      multiselectValueArray = []
      newTag.forEach((tag) => {
        let filteredItems = this.Countydata.filter((obj) => obj.NAME == tag)
        if(!this.multiselectValueArray.includes(filteredItems[0])){
          this.multiselectValueArray.push(filteredItems[0])
        }
        
      })
    },
/**
   * remove tags from multiselect
   * @param newTag county name
   * deletes the  Tag from multiselectValueArray array
  */
    removeTag(newTag) {
      let currentTag = newTag[newTag.length - 1]
      this.multiselectValueArray = multiselectValueArray.filter((obj) => obj.NAME != currentTag)
      
    }
    ,
    /**
   * fixes the grammar for the button names
   * @param entry capital case button name
   * @return the corrected button name
  */
    getCase(entry){
      if(entry=="CONFIRMEDCASES"){
          return "Confirmed Cases";
      }if(entry=="RECOVERIES"){
          return "Recoveries";
      }if(entry=="CONFIRMEDDEATHS"){
          return "Confirmed Deaths";
      }
    },
    /**
   * changes the current state and 
   * adds the data for the state 
   * based on the filter
   * @param state  the selected State
   * @param filter the current filter (confirmedcases...)
   * 
  */
    changeState(state,filter){
      var j=0;
      chartlabelArr=[];
      chartamountArr=[];
      var selected="";
      if(state==="New York"){
        selected="NY";
        this.State="New York";
      }
      if(state==="New Jersey"){
        selected="NJ";
        this.State="New Jersey";
      }
      if(state==="Pennsylvania"){
        selected="PA";
        this.State="Pennsylvania";
      }
      if(state==="Connecticut"){
        selected="CT";
        this.State="Connecticut";
      }
      for (var i = 0; i < this.Countydata.length; i++) {
        if(this.Countydata[i].STATE===state){
          chartlabelArr[j]=this.Countydata[i].NAME+', '+selected;
          
          if (filter === "CONFIRMEDCASES") {
            
            
            chartamountArr[j]=this.Countydata[i].CONFIRMEDCASES;
          }
          if (filter === "RECOVERIES") {
            
            
            chartamountArr[j]=this.Countydata[i].RECOVERIES;
          }
          if (filter === "CONFIRMEDDEATHS") {
            chartamountArr[j]=this.Countydata[i].CONFIRMEDDEATHS;
          }
          j++;
        }
        else{
          i++;
        }
    this.changeData();
  
}
    },
    /**
   * updates the data for the charts
   * 
  */
    changeData () {
      this.chartData= {
        labels: chartlabelArr,
        datasets: [
          {
            label: "Bar Chart",
            borderWidth: 1,
            backgroundColor: colors,
            borderColor: colors,
            pointBorderColor: "#2554FF",
            data: chartamountArr, 
          },
        ]
      }
    
     
    },
    /**
   * export table as a PDF
   * 
  */
     createPDF () {
            var source =  this.$refs["myTable"];
            let rows = [];
            let columnHeader = ["County","State","Confirmed Cases","Recoveries","Confirmed Deaths"];
            let pdfName = 'CovidData-'+this.beginDate+'-'+this.endDate;
            source.items.forEach(element => {
                var temp = [
                    element.NAME,
                    element.STATE  ,
                    element.CONFIRMEDCASES ,
                    element.RECOVERIES ,
                    element.CONFIRMEDDEATHS ,
                ];
                rows.push(temp);
                
            });
            var doc = new jsPDF();
            doc.autoTable(columnHeader, rows, { startY: 10 });
            doc.save(pdfName + '.pdf');
        }
  
        
  },
  watch: {
    propertyComputed() {
      return this.Countydata;
     
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
@import "./style.css";
</style>
