<script>
import { Line } from 'vue-chartjs'
import titanic from './csvjson.json'

export default {
  extends: Line,
  data() {
    return {
      chartData: {
        labels: [0.42,0.67,0.75,0.83,0.92,1,2,3,4,5,6,7,8,9,10,11,12,13,14,14.5,15,16,17,18,19,20,20.5,21,22,23,24,24.5,25,26,27,28,28.5,29,30,30.5,31,32,32.5,33,34,34.5,35,36,36.5,37,38,39,40,40.5,41,42,
        43,44,45,45.5,46,47,48,49,50,51,52,53,54,55,55.5,56,57,58,59,60,61,62,63,64,65,66,70,70.5,71,74,80],
        datasets: [
            {
              label: 'Survived',
              backgroundColor: '#377eb8',
              data: [1,1,2,2,1,5,3,5,7,4,2,1,2,2,0,1,1,2,3,0,4,6,6,9,9,3,0,5,11,5,15,0,6,6,11,7,0,8,10,0,8,9,1,6,6,0,11,11,0,1,5,5,6,0,2,6,1,3,5,0,0,1,6,4,5,2,3,1,3,1,0,2,0,3,0,2,0,2,3,0,0,0,0,0,0,0,1]
            }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  },
  methods: {
  }
}
</script>
