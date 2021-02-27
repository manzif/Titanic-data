<script>
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  data() {
    return {
      chartData: {
        labels: ['Babol', 'Cabanatuan', 'Daegu', 'Jerusalem', 'Fairfield'],
        datasets: [
          {
            label: 'Radar Chart',
            borderWidth: 1,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',

            data: [32127289, 24724027, 25820412, 23685667, 25644258]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true
      }
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
