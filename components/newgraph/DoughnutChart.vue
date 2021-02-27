<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  data() {
    return {
      chartData: {
        labels: ['2015', '2016', '2017', '2018', '2019'],
        datasets: [
          {
            borderWidth: 1,
            borderColor: [
              '#003F5C',
              '#58508D',
              '#BC5090',
              '#FF6361',
              '#FFA600'
            ],
            backgroundColor: [
              '#003F5C',
              '#58508D',
              '#BC5090',
              '#FF6361',
              '#FFA600'
            ],
            data: [12, 19, 3, 5, 2]
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
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
