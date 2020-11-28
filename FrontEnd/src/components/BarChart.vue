<script>
import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins;
export default {
    mixins: [reactiveProp],
    extends: Bar,
    props: ['data'],
    mounted() {
      this.renderChart(this.data, this.options)
    },
    data() {
      return {
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [{
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
  watch: {
    data: function() {
      this.$data._chart.destroy()
     
      this.renderChart(this.data, this.options);
     
    }
  },
    
  }
</script>
