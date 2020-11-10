<script>
import { Pie } from 'vue-chartjs'

export default {
    extends: Pie,
    props: ['data'],
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
      this.renderChart(this.data, this.options)
    },
    methods:{
      update(){
      this.$data._chart.destroy()
     
      this.renderChart(this.data, this.options);}
    },
  computed: {
    chartData: function() {
      return this.data;
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
