 /**
   * gets data from the backend
   * @param values the selected date 
   * @return the data based on the date
   */
export function requestData(values) {
      
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
    
}

/**
   * sets show table to true to be able to show table
   * 
  */

export function viewTable(){
  this.showTable=true,
  this.showCharts=false
}
/**
   * sets show charts to true to be able to show charts
   * 
  */
export function viewCharts(){
  this.showTable=false,
  this.showCharts=true
}
/**
   * Applies style to the buttons
   * @param entry case 
   * @return the color based on the entry 
  */
export function applyStyle(entry){
  if(entry=="CONFIRMEDCASES"){
    return "warning";
  }if(entry=="RECOVERIES"){
    return "success";
  }if(entry=="CONFIRMEDDEATHS"){
    return "danger";
  }
}
/**
   * adds tags to the multiselect
   * @param newTag county name
   *pushes the new Tag to test array
  */
export function addTag(newTag) {
  
  test = []
  newTag.forEach((tag) => {
    let filteredItems = this.Countydata.filter((obj) => obj.NAME == tag)
    if(!this.test.includes(filteredItems[0])){
      this.test.push(filteredItems[0])
    }
    
  })
}
/**
   * remove tags from multiselect
   * @param newTag county name
   * deletes the  Tag from test array
  */
export function removeTag(newTag) {
  let currentTag = newTag[newTag.length - 1]
  this.test = test.filter((obj) => obj.NAME != currentTag)
  
}
/**
   * fixes the grammar for the button names
   * @param entry capital case button name
   * @return the corrected button name
  */
export function getCase(entry){
  if(entry=="CONFIRMEDCASES"){
      return "Confirmed Cases";
  }if(entry=="RECOVERIES"){
      return "Recoveries";
  }if(entry=="CONFIRMEDDEATHS"){
      return "Confirmed Deaths";
  }
}

/**
   * changes the current state and 
   * adds the data for the state 
   * based on the filter
   * @param state  the selected State
   * @param filter the current filter (confirmedcases...)
   * 
  */
export function changeState(state,filter){
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
changeData();

}
}

/**
   * updates the data for the charts
   * 
  */
export function changeData () {
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

 
}