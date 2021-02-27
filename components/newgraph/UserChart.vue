<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data() {
    return {
      chartData: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'June',
          'July',
          'Aug',
          'Sept',
          'Oct',
          'Nov',
          'Dec'
        ],
        datasets: [
          {
            label: 'Users',
            data: [12, 19, 3, 5, 2, 12, 19, 3, 5, 2],
            fill: true,
            borderColor: '#2554FF',
            backgroundColor: '#2554FF',
            borderWidth: 1
          }
        ]
      },
      options: {
        maintainAspectRatio: true
      }
    }
  },
  mounted() {
    this.renderChart(this.chartData)
  }
}
</script>
