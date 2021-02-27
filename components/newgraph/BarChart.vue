<script>
import { Bar } from 'vue-chartjs'
import titanic from './csvjson.json'
export default {
  extends: Bar,
  data() {
    return {
      test: [],
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Titanic',
            borderWidth: 1,
            backgroundColor: [
              '#003f5c',
              '#58508d',
              '#bc5090',
              '#ff6361',
              '#003f5c',
              '#58508d',
              '#bc5090',
              '#ff6361',
              '#bc5090',
              '#ff6361',
              '#ffa600'
            ],
            borderColor: [
              '#003f5c',
              '#58508d',
              '#bc5090',
              '#ff6361',
              '#003f5c',
              '#58508d',
              '#bc5090',
              '#ff6361',
              '#bc5090',
              '#ff6361',
              '#ffa600'
            ],
            pointBorderColor: '#2554FF',
            data: [12, 19, 3, 5, 2, 12, 19, 3, 5, 2],
            fill: true
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
  created() {
    for(let i=0; i<titanic.length; i++) {
      this.chartData.labels.push(titanic[i].Pclass)
    } 
  }
}
</script>
