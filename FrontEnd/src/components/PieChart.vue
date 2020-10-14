<script>
  import { Pie } from 'vue-chartjs'
import { Countydata } from '../data/County-data'
  
var labelsArray = [];
var amountArray = [];
for (var i = 0; i < Countydata.length; i++) {
    labelsArray.push(Countydata[i] ? Countydata[i].name : '');
    amountArray.push(Countydata[i] ? Countydata[i].ConfirmedCases : '');
}
  export default {
    extends: Pie,
    data () {
      return {
        chartData: {
          labels: labelsArray,
          datasets: [{
              borderWidth: 1,
              borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)' ,    
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)' ,
              'rgba(75, 192, 192, 1)' ,
                      
              ],
              backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)', 
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',                 
              ],
              data: amountArray,
            }]
        },
        options: {
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>