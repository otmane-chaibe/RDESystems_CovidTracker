<script>
import { Pie, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins;
export default {
    mixins: [reactiveProp],
    extends: Pie,
    props: ['chartData'],
    data () {
      return {
        
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
    },
  watch: {
    data: function() {
      this.$data._chart.destroy()
     
      this.renderChart(this.chartData, this.options);
     
    }
  },
  
  }
</script>
