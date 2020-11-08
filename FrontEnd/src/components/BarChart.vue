<script>
import { Bar, mixins } from 'vue-chartjs'

export default {
    mixins: [mixins.reactiveData],
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
    
  computed: {
    chartData: function() {
      return this.$data;
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
